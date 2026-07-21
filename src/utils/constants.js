/**
 * Application Constants
 */

export const APP_CONFIG = {
  name: 'Gopal Das',
  title: 'DevOps Consultant & Enterprise Architect',
  email: 'gopal1409@gmail.com',
  phone: '+91-9537126262',
  linkedin: 'https://linkedin.com/in/gopaldevops',
  location: 'India',
  availability: 'Open for Remote & Global Assignments',
  yearsExperience: 28,
  trainingsDelivered: 500,
  reposMigrated: 1000,
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Training', href: '#training' },
  { label: 'Contact', href: '#contact' },
];

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
};

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
};

export const SECTION_PADDING = { xs: 6, sm: 8, md: 10 };
export const MAX_WIDTH = 1280;

export default APP_CONFIG;