import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { getUniversityFullName } from "../../utils/universityMapping";
import styled from "styled-components";
import {
  ChartContainer,
  ChartTitle,
  ChartSubtitle,
  CountryList,
  CountryItem,
  Rank,
  CountryInfo,
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
} from "../ValentineChart/styles";

// Custom styled component for university names (allows 2 lines)
const UniversityName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

// Container for bar and count on the same line
const BarWithCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface UniversityData {
  key: string;
  shortName: string;
  fullName: string;
  count: number;
}

export const UniversityChart = () => {
  const [universities, setUniversities] = useState<UniversityData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUniversityData = async () => {
    setLoading(true);
    setError("");

    try {
      // Query top 20 universities ordered by count (descending)
      const q = query(
        collection(db, "university_cache"),
        orderBy("count", "desc"),
        limit(20)
      );

      const querySnapshot = await getDocs(q);
      const fetchedUniversities: UniversityData[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedUniversities.push({
          key: data.key || doc.id,
          shortName: data.shortName || "",
          fullName: data.fullName || getUniversityFullName(data.key || doc.id),
          count: data.count || 0
        });
      });

      // Filter out universities with 0 count for cleaner display
      const universitiesWithData = fetchedUniversities.filter(
        (university) => university.count > 0
      );

      setUniversities(universitiesWithData);
    } catch (err: any) {
      console.error("Error fetching university chart data:", err);
      setError(err.message || "Failed to load chart data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUniversityData();
  }, []);

  // Calculate max count for bar width percentage
  const maxCount = universities.length > 0 ? Math.max(...universities.map((u) => u.count)) : 1;

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
          <LoadingText>Loading university chart data...</LoadingText>
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
            We couldn't load the university chart data. Please check your connection and try again.
          </ErrorMessage>
          <RetryButton
            onClick={fetchUniversityData}
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
  if (universities.length === 0) {
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
      <ChartTitle>University Lonely Hearts Leaderboard</ChartTitle>
      <ChartSubtitle>
        South African universities with the most people who haven't received Valentine's gifts
      </ChartSubtitle>

      <CountryList>
        {universities.map((university, index) => {
          const percentage = (university.count / maxCount) * 100;

          return (
            <CountryItem
              key={university.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.3
              }}
            >
              <Rank>{index + 1}</Rank>

              <CountryInfo>
                <UniversityName>{university.fullName}</UniversityName>
                <BarWithCount>
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
                  <Count>{university.count.toLocaleString()}</Count>
                </BarWithCount>
              </CountryInfo>
            </CountryItem>
          );
        })}
      </CountryList>
    </ChartContainer>
  );
};
