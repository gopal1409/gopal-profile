import { useState, useCallback } from 'react';

export const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = useCallback(
    (fieldValues = values) => {
      const newErrors = {};

      Object.keys(validationRules).forEach(field => {
        const rules = validationRules[field];
        const value = fieldValues[field];

        if (rules.required && !value?.trim()) {
          newErrors[field] = rules.requiredMessage || `${field} is required`;
        }

        if (rules.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[field] = rules.emailMessage || 'Please enter a valid email';
        }

        if (rules.minLength && value && value.length < rules.minLength) {
          newErrors[field] = rules.minLengthMessage || `Minimum ${rules.minLength} characters`;
        }

        if (rules.pattern && value && !rules.pattern.test(value)) {
          newErrors[field] = rules.patternMessage || 'Invalid format';
        }

        if (rules.custom && value) {
          const customError = rules.custom(value, fieldValues);
          if (customError) newErrors[field] = customError;
        }
      });

      return newErrors;
    },
    [values, validationRules]
  );

  const handleChange = useCallback(
    field => event => {
      const value = event.target.value;
      setValues(prev => ({ ...prev, [field]: value }));

      if (touched[field]) {
        const fieldErrors = validate({ ...values, [field]: value });
        setErrors(prev => ({ ...prev, [field]: fieldErrors[field] }));
      }
    },
    [values, touched, validate]
  );

  const handleBlur = useCallback(
    field => () => {
      setTouched(prev => ({ ...prev, [field]: true }));
      const fieldErrors = validate();
      setErrors(prev => ({ ...prev, [field]: fieldErrors[field] }));
    },
    [validate]
  );

  const handleSubmit = useCallback(
    onSubmit => event => {
      event.preventDefault();
      setTouched(Object.keys(validationRules).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      const formErrors = validate();
      setErrors(formErrors);

      if (Object.keys(formErrors).length === 0) {
        onSubmit(values);
      }
    },
    [validate, values, validationRules]
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  const isValid = Object.keys(errors).length === 0 && Object.keys(touched).length > 0;

  return {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setValues,
  };
};

export default useFormValidation;
