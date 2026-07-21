/**
 * MUI Component Overrides
 * Consistent enterprise styling across all components
 */

export const components = {
  MuiCssBaseline: {
    styleOverrides: {
      html: { scrollBehavior: 'smooth' },
      body: {
        backgroundColor: '#0f172a',
        color: '#f1f5f9',
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#0f172a',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#334155',
          borderRadius: '4px',
          '&:hover': { background: '#475569' },
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '10px',
        textTransform: 'none',
        fontWeight: 600,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
        },
      },
      containedPrimary: {
        background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)',
        boxShadow: '0 4px 15px rgba(56, 189, 248, 0.3)',
        '&:hover': {
          boxShadow: '0 8px 25px rgba(56, 189, 248, 0.4)',
        },
      },
      outlined: {
        borderColor: 'rgba(148, 163, 184, 0.3)',
        '&:hover': {
          borderColor: '#38bdf8',
          color: '#38bdf8',
        },
      },
      sizeLarge: {
        padding: '12px 32px',
        fontSize: '1rem',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        background: '#1e293b',
        border: '1px solid rgba(148, 163, 184, 0.12)',
        borderRadius: '16px',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'rgba(56, 189, 248, 0.3)',
          transform: 'translateY(-4px)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        fontWeight: 500,
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      },
      filled: {
        backgroundColor: 'rgba(56, 189, 248, 0.08)',
        color: '#38bdf8',
        border: '1px solid rgba(56, 189, 248, 0.2)',
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          backgroundColor: '#0f172a',
          transition: 'all 0.3s ease',
          '& fieldset': {
            borderColor: 'rgba(148, 163, 184, 0.2)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(56, 189, 248, 0.4)',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#38bdf8',
            boxShadow: '0 0 0 3px rgba(56, 189, 248, 0.1)',
          },
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: '#1e293b',
        borderRight: '1px solid rgba(148, 163, 184, 0.1)',
      },
    },
  },
  MuiTimeline: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiTimelineDot: {
    styleOverrides: {
      root: {
        backgroundColor: '#38bdf8',
        boxShadow: '0 0 0 4px rgba(56, 189, 248, 0.2)',
      },
    },
  },
  MuiTimelineConnector: {
    styleOverrides: {
      root: {
        backgroundColor: 'rgba(56, 189, 248, 0.3)',
      },
    },
  },
};

export default components;