import { useState, useEffect, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  useScrollTrigger,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Code as CodeIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import MobileDrawer from './MobileDrawer';
import { NAV_LINKS } from '@utils/constants';
import { smoothScrollTo } from '@utils/helpers';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback(href => {
    const sectionId = href.replace('#', '');
    smoothScrollTo(sectionId);
    setMobileOpen(false);
  }, []);

  const toggleDrawer = useCallback(() => {
    setMobileOpen(prev => !prev);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
          backdropFilter: trigger ? 'blur(12px)' : 'none',
          borderBottom: trigger ? '1px solid rgba(148, 163, 184, 0.1)' : '1px solid transparent',
          transition: theme.transitions.create(
            ['background-color', 'backdrop-filter', 'border-color'],
            {
              duration: 300,
            }
          ),
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                onClick={() => handleNavClick('#home')}
                sx={{
                  textTransform: 'none',
                  color: 'primary.main',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  letterSpacing: '-0.02em',
                  '&:hover': { backgroundColor: 'transparent' },
                }}
                startIcon={<CodeIcon sx={{ fontSize: 28 }} />}
              >
                GD
              </Button>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                {NAV_LINKS.map((link, index) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Button
                        onClick={() => handleNavClick(link.href)}
                        sx={{
                          color: isActive ? 'primary.main' : 'text.secondary',
                          fontWeight: isActive ? 600 : 500,
                          fontSize: '0.9rem',
                          px: 1.5,
                          py: 0.8,
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 4,
                            left: '50%',
                            transform: isActive
                              ? 'translateX(-50%) scaleX(1)'
                              : 'translateX(-50%) scaleX(0)',
                            width: '60%',
                            height: 2,
                            backgroundColor: 'primary.main',
                            borderRadius: 1,
                            transition: 'transform 0.3s ease',
                          },
                          '&:hover': {
                            color: 'primary.main',
                            backgroundColor: 'transparent',
                            '&::after': {
                              transform: 'translateX(-50%) scaleX(1)',
                            },
                          },
                        }}
                      >
                        {link.label}
                      </Button>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <Button
                    variant="contained"
                    onClick={() => handleNavClick('#contact')}
                    sx={{
                      ml: 2,
                      px: 3,
                      py: 1,
                      fontWeight: 600,
                      borderRadius: 2,
                    }}
                  >
                    Hire Me
                  </Button>
                </motion.div>
              </Box>
            )}

            {/* Mobile Toggle */}
            {isMobile && (
              <IconButton
                onClick={toggleDrawer}
                sx={{ color: 'text.primary' }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CloseIcon />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MenuIcon />
                    </motion.div>
                  )}
                </AnimatePresence>
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </>
  );
};

export default Navbar;
