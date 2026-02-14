import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { getCountryName } from "../../utils/countryCodeMapping";
import {
  ChartContainer,
  ChartTitle,
  ChartSubtitle,
  CountryList,
  CountryItem,
  Rank,
  CountryInfo,
  CountryName,
  BarContainer,
  Bar,
  Count,
  LoadingContainer,
  LoadingSpinner,
  LoadingText,
  EmptyState,
  EmptyEmoji,
  EmptyTitle,
  EmptyMessage,
  ErrorContainer,
  ErrorEmoji,
  ErrorTitle,
  ErrorMessage,
  RetryButton
} from "./styles";

interface CountryData {
  code: string;
  name: string;
  count: number;
}

export const ValentineChart = () => {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCountryData = async () => {
    setLoading(true);
    setError("");

    try {
      // Query top 20 countries ordered by count (descending)
      const q = query(
        collection(db, "valentine_chart"),
        orderBy("count", "desc"),
        limit(20)
      );

      const querySnapshot = await getDocs(q);
      const fetchedCountries: CountryData[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedCountries.push({
          code: data.code || doc.id,
          name: data.name || getCountryName(data.code || doc.id),
          count: data.count || 0
        });
      });

      // Filter out countries with 0 count for cleaner display
      const countriesWithData = fetchedCountries.filter(
        (country) => country.count > 0
      );

      setCountries(countriesWithData);
    } catch (err: any) {
      console.error("Error fetching chart data:", err);
      setError(err.message || "Failed to load chart data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  // Calculate max count for bar width percentage
  const maxCount = countries.length > 0 ? Math.max(...countries.map((c) => c.count)) : 1;

  // Loading state
  if (loading) {
    return (
      <ChartContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <LoadingContainer>
          <LoadingSpinner />
          <LoadingText>Loading chart data...</LoadingText>
        </LoadingContainer>
      </ChartContainer>
    );
  }

  // Error state
  if (error) {
    return (
      <ChartContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ErrorContainer>
          <ErrorEmoji>😔</ErrorEmoji>
          <ErrorTitle>Something Went Wrong</ErrorTitle>
          <ErrorMessage>
            We couldn't load the chart data. Please check your connection and try again.
          </ErrorMessage>
          <RetryButton
            onClick={fetchCountryData}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </RetryButton>
        </ErrorContainer>
      </ChartContainer>
    );
  }

  // Empty state
  if (countries.length === 0) {
    return (
      <ChartContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <EmptyState>
          <EmptyEmoji>💔</EmptyEmoji>
          <EmptyTitle>No Data Yet</EmptyTitle>
          <EmptyMessage>
            Be the first to submit! Switch back to the form and send some love.
          </EmptyMessage>
        </EmptyState>
      </ChartContainer>
    );
  }

  // Chart with data
  return (
    <ChartContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <ChartTitle>Lonely Hearts Leaderboard</ChartTitle>
      <ChartSubtitle>
        Countries with the most people who haven't received Valentine's gifts
      </ChartSubtitle>

      <CountryList>
        {countries.map((country, index) => {
          const percentage = (country.count / maxCount) * 100;

          return (
            <CountryItem
              key={country.code}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.3
              }}
            >
              <Rank>{index + 1}</Rank>

              <CountryInfo>
                <CountryName>{country.name}</CountryName>
                <BarContainer>
                  <Bar
                    $percentage={percentage}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{
                      delay: index * 0.05 + 0.2,
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                  />
                </BarContainer>
              </CountryInfo>

              <Count>{country.count.toLocaleString()}</Count>
            </CountryItem>
          );
        })}
      </CountryList>
    </ChartContainer>
  );
};
