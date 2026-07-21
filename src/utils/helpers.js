/**
 * Helper Utilities
 */

export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  }
};

export const formatNumber = (num) => {
  if (num >= 1000) return `${(num / 1000).toFixed(0)}k+`;
  return `${num}+`;
};

export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const generateId = () => Math.random().toString(36).substr(2, 9);

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

export default { smoothScrollTo, formatNumber, debounce, throttle, generateId, copyToClipboard };