import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  increment,
  getDoc,
  setDoc
} from "firebase/firestore";
import { db } from "../../config/firebase";
import {
  validateName,
  validatePhone,
  validateEmail
} from "../../utils/valentineMessages";
import { getCountryName } from "../../utils/countryCodeMapping";
import {
  getAllUniversities,
  getUniversityFullName,
  getUniversityShortName
} from "../../utils/universityMapping";
import { HeartParticle } from "../Hearts3D/styles";
import { MockingBanner } from "../MockingBanner";
import { ValentineChart } from "../ValentineChart";
import { UniversityChart } from "../UniversityChart";
import {
  HeroSection,
  BackgroundBlur,
  Container,
  HeroContent,
  FormContainer,
  Form,
  InputGroup,
  InputWrapper,
  Label,
  Input,
  InputButton,
  InputButtonText,
  InputButtonIcon,
  ErrorMessage,
  GeneralError,
  SubmitButton,
  LoadingSpinner,
  PopupOverlay,
  PopupContent,
  PopupEmoji,
  PopupTitle,
  PopupMessage,
  PopupButton,
  PickerOverlay,
  PickerModal,
  PickerHeader,
  PickerTitle,
  PickerCloseButton,
  PickerList,
  PickerOption,
  PickerCheckmark,
  ToggleContainer,
  ToggleOption,
  ToggleSlider
} from "./styles";

/**
 * Valentine's Day Landing Page Component
 *
 * One-page website for capturing leads from users who missed Valentine's Day
 * Features 3D heart animations, form validation, and Firebase integration
 */

interface FormErrors {
  name: string;
  phone: string;
  email: string;
}

export const ValentinePage = () => {
  // Form state
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");

  // UI state
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    phone: "",
    email: ""
  });
  const [generalError, setGeneralError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showParticles, setShowParticles] = useState(false);
  const [activeView, setActiveView] = useState<"form" | "chart">("form");
  const [chartType, setChartType] = useState<"countries" | "universities">(
    "countries"
  );
  const [showUniversityPicker, setShowUniversityPicker] = useState(false);

  // Prevent auto-scroll on mobile
  useEffect(() => {
    // Prevent scroll restoration that causes jump-back behavior
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({ name: "", phone: "", email: "" });
    setGeneralError("");

    // Validate all fields
    const fullPhone = `${countryCode}${phone}`;
    const newErrors: FormErrors = {
      name: !validateName(name)
        ? "Please enter your name (at least 2 characters)"
        : "",
      phone: !validatePhone(fullPhone)
        ? "Please enter a valid phone number (10-15 digits)"
        : "",
      email:
        email.trim() && !validateEmail(email)
          ? "Please enter a valid email address"
          : ""
    };

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Start loading
    setLoading(true);

    // Submit to Firebase (promise-based, no try-catch)
    const fullPhoneNumber = `${countryCode}${phone}`;
    const submissionData: any = {
      name: name.trim(),
      phone: fullPhoneNumber.replace(/\D/g, ""),
      countryCode: countryCode.trim()
    };

    // Only include email if provided
    if (email.trim()) {
      submissionData.email = email.trim().toLowerCase();
    }

    // Only include university if selected
    if (university) {
      submissionData.university = university;
    }

    addDoc(collection(db, "valentines"), submissionData)
      .then(async () => {
        // Success - show modal and particle burst
        setSuccessMessage("Successfully submitted");
        setShowSuccessModal(true);
        setShowParticles(true);

        // Increment country count in valentine_chart collection
        try {
          const countryDocRef = doc(db, "valentine_chart", countryCode.trim());
          const countryDoc = await getDoc(countryDocRef);

          if (countryDoc.exists()) {
            // Document exists, increment count
            await updateDoc(countryDocRef, {
              count: increment(1)
            });
          } else {
            // Document doesn't exist, create it with count 1
            await setDoc(countryDocRef, {
              code: countryCode.trim(),
              name: getCountryName(countryCode.trim()),
              count: 1
            });
          }
        } catch (chartError) {
          // Log error but don't block user experience
          console.error("Failed to update chart:", chartError);
        }

        // Increment university count in university_cache collection
        if (university) {
          try {
            const universityDocRef = doc(db, "university_cache", university);
            const universityDoc = await getDoc(universityDocRef);

            if (universityDoc.exists()) {
              // Document exists, increment count
              await updateDoc(universityDocRef, {
                count: increment(1)
              });
            } else {
              // Document doesn't exist, create it with count 1
              await setDoc(universityDocRef, {
                key: university,
                shortName: getUniversityShortName(university),
                fullName: getUniversityFullName(university),
                count: 1
              });
            }
          } catch (universityError) {
            // Log error but don't block user experience
            console.error(
              "Failed to update university chart:",
              universityError
            );
          }
        }

        // Reset form
        setName("");
        setCountryCode("+1");
        setPhone("");
        setEmail("");
        setUniversity("");

        // Hide particles after animation
        setTimeout(() => setShowParticles(false), 1500);
      })
      .catch((err: any) => {
        // Error handling
        setGeneralError(
          err.message || "Failed to submit. Please try again later."
        );
        setTimeout(() => setGeneralError(""), 5000);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Close success modal
  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setShowParticles(false);
  };

  // Generate particle burst
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    emoji: ["💗", "💝", "💖", "💘"][i % 4],
    delay: i * 50,
    angle: (i * 360) / 12
  }));

  return (
    <>
      <HeroSection>
        <BackgroundBlur />

        {/* Encouraging banner section */}
        <MockingBanner />

        <Container>
          <HeroContent></HeroContent>

          <FormContainer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {/* Toggle Switch */}
            <ToggleContainer>
              <ToggleSlider
                animate={{ x: activeView === "form" ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <ToggleOption
                onClick={() => setActiveView("form")}
                $active={activeView === "form"}
              >
                Form
              </ToggleOption>
              <ToggleOption
                onClick={() => setActiveView("chart")}
                $active={activeView === "chart"}
              >
                Chart
              </ToggleOption>
            </ToggleContainer>

            {/* Conditional Rendering */}
            {activeView === "form" ? (
              <Form onSubmit={handleSubmit}>
                {generalError && (
                  <GeneralError
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    {generalError}
                  </GeneralError>
                )}

                <InputWrapper>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    $hasError={!!errors.name}
                    disabled={loading}
                  />
                  {errors.name && (
                    <ErrorMessage
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.name}
                    </ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper>
                  <Label htmlFor="phone">Phone Number</Label>
                  <InputGroup>
                    <Input
                      id="countryCode"
                      type="text"
                      placeholder="+1"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      $hasError={!!errors.phone}
                      disabled={loading}
                      style={{ flex: "0 0 80px" }}
                    />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      $hasError={!!errors.phone}
                      disabled={loading}
                      style={{ flex: "1" }}
                    />
                  </InputGroup>
                  {errors.phone && (
                    <ErrorMessage
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.phone}
                    </ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper>
                  <Label htmlFor="email">Email Address (optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    $hasError={!!errors.email}
                    disabled={loading}
                  />
                  {errors.email && (
                    <ErrorMessage
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.email}
                    </ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper>
                  <Label htmlFor="university">
                    University (optional) for SA only
                  </Label>
                  <InputButton
                    type="button"
                    onClick={() => setShowUniversityPicker(true)}
                    disabled={loading}
                  >
                    <InputButtonText $placeholder={!university}>
                      {university
                        ? getUniversityFullName(university)
                        : "Select your university"}
                    </InputButtonText>
                    <InputButtonIcon>▼</InputButtonIcon>
                  </InputButton>
                </InputWrapper>

                <SubmitButton
                  type="submit"
                  $loading={loading}
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <>
                      <LoadingSpinner />
                      Sending Love...
                    </>
                  ) : (
                    <>Send Me Love 💌</>
                  )}
                </SubmitButton>
              </Form>
            ) : (
              <>
                {/* Chart Type Toggle - Only visible in chart view */}
                <ToggleContainer style={{ marginTop: "1rem" }}>
                  <ToggleSlider
                    animate={{ x: chartType === "countries" ? 0 : "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                  <ToggleOption
                    onClick={() => setChartType("countries")}
                    $active={chartType === "countries"}
                  >
                    Countries
                  </ToggleOption>
                  <ToggleOption
                    onClick={() => setChartType("universities")}
                    $active={chartType === "universities"}
                  >
                    Universities
                  </ToggleOption>
                </ToggleContainer>

                {/* Conditional Chart Rendering */}
                {chartType === "countries" ? (
                  <ValentineChart />
                ) : (
                  <UniversityChart />
                )}
              </>
            )}
          </FormContainer>
        </Container>
      </HeroSection>

      {/* Success Modal */}
      {showSuccessModal && (
        <PopupOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeSuccessModal}
        >
          <PopupContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <PopupEmoji>💝</PopupEmoji>
            <PopupTitle>{successMessage}</PopupTitle>
            <PopupMessage>
              Check your inbox - Cupid's on the way! 💘
            </PopupMessage>
            <PopupButton
              onClick={closeSuccessModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Got it!
            </PopupButton>
          </PopupContent>
        </PopupOverlay>
      )}

      {/* Particle Burst Animation */}
      {showParticles &&
        particles.map((particle) => (
          <HeartParticle
            key={particle.id}
            $delay={particle.delay}
            $angle={particle.angle}
          >
            {particle.emoji}
          </HeartParticle>
        ))}

      {/* University Picker Modal */}
      {showUniversityPicker && (
        <PickerOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowUniversityPicker(false)}
        >
          <PickerModal
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <PickerHeader>
              <PickerTitle>Select your university (optional)</PickerTitle>
              <PickerCloseButton onClick={() => setShowUniversityPicker(false)}>
                ✕
              </PickerCloseButton>
            </PickerHeader>
            <PickerList>
              {getAllUniversities().map((uni) => (
                <PickerOption
                  key={uni.key}
                  $selected={university === uni.key}
                  onClick={() => {
                    setUniversity(uni.key);
                    setShowUniversityPicker(false);
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {university === uni.key && (
                    <PickerCheckmark>✓</PickerCheckmark>
                  )}
                  <span>{uni.full}</span>
                </PickerOption>
              ))}
            </PickerList>
          </PickerModal>
        </PickerOverlay>
      )}
    </>
  );
};
