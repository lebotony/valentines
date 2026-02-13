/**
 * Valentine's Day Form Validation Utilities
 *
 * Provides validation helpers for the Valentine's form fields
 * Following the pattern from utils/hornymeterMessages.ts
 */

/**
 * Validates email format using regex
 * @param email - Email address to validate
 * @returns true if email is valid format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates phone number (accepts international formats)
 * Requires 10-15 digits after removing non-numeric characters
 * @param phone - Phone number to validate
 * @returns true if phone number is valid
 */
export const validatePhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 15;
};

/**
 * Validates name (minimum 2 characters)
 * @param name - Name to validate
 * @returns true if name is valid
 */
export const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};

/**
 * Returns a random success message for variety
 * @returns Success message string
 */
export const getSuccessMessage = (): string => {
  const messages = [
    "Your Valentine's surprise is on the way! 💝",
    "Love is coming your way! 💖",
    "Cupid has been notified! 💘",
    "Something special is headed to you! 💗",
    "Get ready for your Valentine's treat! 💝"
  ];

  return messages[Math.floor(Math.random() * messages.length)];
};

/**
 * Formats phone number for display (adds dashes)
 * Example: 1234567890 -> 123-456-7890
 * @param phone - Raw phone number
 * @returns Formatted phone number
 */
export const formatPhoneDisplay = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }

  return phone;
};
