// Form validation utilities
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export interface FormErrors {
  [key: string]: string;
}

export interface FormData {
  [key: string]: string;
}

// Validation constants
export const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
} as const;

export const VALIDATION_MESSAGES = {
  required: (field: string) => `${field} is required`,
  email: 'Please enter a valid email address',
  minLength: (field: string, min: number) => 
    `${field} must be at least ${min} characters long`,
  maxLength: (field: string, max: number) => 
    `${field} must not exceed ${max} characters`,
  pattern: (field: string) => `Please enter a valid ${field.toLowerCase()}`,
} as const;

/**
 * Validates a single field based on its rules
 */
export function validateField(
  value: string, 
  fieldName: string, 
  rules: ValidationRule
): string | null {
  // Required validation
  if (rules.required && !value.trim()) {
    return VALIDATION_MESSAGES.required(fieldName);
  }

  // Skip other validations if field is empty and not required
  if (!value.trim() && !rules.required) {
    return null;
  }

  // Min length validation
  if (rules.minLength && value.length < rules.minLength) {
    return VALIDATION_MESSAGES.minLength(fieldName, rules.minLength);
  }

  // Max length validation
  if (rules.maxLength && value.length > rules.maxLength) {
    return VALIDATION_MESSAGES.maxLength(fieldName, rules.maxLength);
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(value)) {
    return VALIDATION_MESSAGES.pattern(fieldName);
  }

  // Custom validation
  if (rules.custom) {
    return rules.custom(value);
  }

  return null;
}

/**
 * Validates entire form based on validation rules
 */
export function validateForm(
  formData: FormData, 
  validationRules: ValidationRules
): FormErrors {
  const errors: FormErrors = {};

  Object.entries(validationRules).forEach(([fieldName, rules]) => {
    const value = formData[fieldName] || '';
    const error = validateField(value, fieldName, rules);
    
    if (error) {
      errors[fieldName] = error;
    }
  });

  return errors;
}

/**
 * Contact form specific validation rules
 */
export const CONTACT_FORM_RULES: ValidationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  email: {
    required: true,
    pattern: VALIDATION_PATTERNS.email,
    maxLength: 255,
  },
  subject: {
    required: true,
    minLength: 5,
    maxLength: 200,
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 2000,
  },
  projectType: {
    required: true,
  },
};

/**
 * Sanitizes form data to prevent XSS attacks
 */
export function sanitizeFormData(formData: FormData): FormData {
  const sanitized: FormData = {};
  
  Object.entries(formData).forEach(([key, value]) => {
    // Basic HTML tag removal and trimming
    sanitized[key] = value
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .trim();
  });
  
  return sanitized;
}