import { Box, Container, Typography, Grid, IconButton, Divider, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import {
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { personalInfo } from '@utils/resumeData';
import { NAV_LINKS } from '@utils/constants';
import { smoothScrollTo } from '@utils/helpers';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: LinkedInIcon, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: EmailIcon, href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: PhoneIcon, href: `tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`, label: 'Phone' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="flex-start">
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <CodeIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: 'primary.main',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Gopal Das
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300, mb: 3 }}>
                Senior DevOps Consultant & Enterprise Solution Architect with 28+ years of experience transforming organizations through modern DevOps practices.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    sx={{
                      color: 'text.secondary',
                      backgroundColor: 'rgba(56, 189, 248, 0.08)',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(56, 189, 248, 0.15)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>
                Quick Links
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {NAV_LINKS.map((link) => (
                  <Box component="li" key={link.label} sx={{ mb: 1 }}>
                    <Typography
                      component="a"
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo(link.href.replace('#', ''));
                      }}
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        transition: 'color 0.3s',
                        cursor: 'pointer',
                        '&:hover': { color: 'primary.main' },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>
                Contact
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Typography variant="body2" color="text.secondary">
                  <strong style={{ color: '#f1f5f9' }}>Email:</strong>{' '}
                  <a href={`mailto:${personalInfo.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {personalInfo.email}
                  </a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong style={{ color: '#f1f5f9' }}>Phone:</strong>{' '}
                  <a href={`tel:${personalInfo.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {personalInfo.phone}
                  </a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong style={{ color: '#f1f5f9' }}>Location:</strong> {personalInfo.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong style={{ color: '#f1f5f9' }}>Availability:</strong> {personalInfo.availability}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'divider' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Gopal Das. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Built with React 19, Vite & Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;