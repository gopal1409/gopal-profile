/**
 * Typography Configuration
 * Uses Inter Variable for body, JetBrains Mono for code/mono
 */

export const typography = {
  fontFamily: '"Inter Variable", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontFamilyMono: '"JetBrains Mono Variable", "JetBrains Mono", "Fira Code", monospace',
  h1: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h4: {
    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1.1rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  subtitle1: {
    fontSize: '1.15rem',
    fontWeight: 500,
    lineHeight: 1.5,
    color: '#94a3b8',
  },
  subtitle2: {
    fontSize: '0.95rem',
    fontWeight: 500,
    lineHeight: 1.5,
    color: '#94a3b8',
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.7,
  },
  body2: {
    fontSize: '0.9rem',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  button: {
    fontSize: '0.95rem',
    fontWeight: 600,
    textTransform: 'none',
    letterSpacing: '0.01em',
  },
  caption: {
    fontSize: '0.8rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.02em',
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#38bdf8',
  },
};

export default typography;