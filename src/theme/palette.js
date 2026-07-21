/**
 * Enterprise Dark Theme Palette
 * Inspired by modern DevOps/cloud tool aesthetics
 */

export const palette = {
  mode: 'dark',
  primary: {
    main: '#38bdf8',
    light: '#7dd3fc',
    dark: '#0ea5e9',
    contrastText: '#0f172a',
  },
  secondary: {
    main: '#f59e0b',
    light: '#fbbf24',
    dark: '#d97706',
    contrastText: '#0f172a',
  },
  background: {
    default: '#0f172a',
    paper: '#1e293b',
    elevated: '#334155',
  },
  text: {
    primary: '#f1f5f9',
    secondary: '#94a3b8',
    disabled: '#64748b',
  },
  divider: 'rgba(148, 163, 184, 0.12)',
  action: {
    active: '#38bdf8',
    hover: 'rgba(56, 189, 248, 0.08)',
    selected: 'rgba(56, 189, 248, 0.16)',
    disabled: 'rgba(148, 163, 184, 0.3)',
    disabledBackground: 'rgba(148, 163, 184, 0.12)',
  },
  error: {
    main: '#ef4444',
    light: '#fca5a5',
    dark: '#dc2626',
  },
  warning: {
    main: '#f59e0b',
    light: '#fcd34d',
    dark: '#d97706',
  },
  success: {
    main: '#22c55e',
    light: '#86efac',
    dark: '#16a34a',
  },
  info: {
    main: '#38bdf8',
    light: '#7dd3fc',
    dark: '#0ea5e9',
  },
  // Custom brand colors
  brand: {
    cyan: '#38bdf8',
    amber: '#f59e0b',
    emerald: '#10b981',
    rose: '#f43f5e',
    violet: '#8b5cf6',
    slate: '#64748b',
  },
  gradient: {
    primary: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)',
    secondary: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    hero: 'linear-gradient(135deg, rgba(56,189,248,0.08) 0%, rgba(245,158,11,0.06) 50%, rgba(56,189,248,0.05) 100%)',
    card: 'linear-gradient(180deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.95) 100%)',
    text: 'linear-gradient(135deg, #f1f5f9 0%, #38bdf8 100%)',
  },
};

export default palette;