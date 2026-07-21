import { Box, Container, Typography, Button, Grid, Paper, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import {
  ArrowDownward as ArrowDownIcon,
  Download as DownloadIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import { personalInfo, stats, certifications } from '@utils/resumeData';
import { smoothScrollTo } from '@utils/helpers';
import StatCounter from '@components/ui/StatCounter';
import SocialLinks from '@components/ui/SocialLinks';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 8 },
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(56, 189, 248, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(245, 158, 11, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(56, 189, 248, 0.03) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      {/* Floating particles effect */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: 4 + i * 2,
              height: 4 + i * 2,
              borderRadius: '50%',
              background: i % 2 === 0 ? 'rgba(56, 189, 248, 0.2)' : 'rgba(245, 158, 11, 0.15)',
              left: `${15 + i * 15}%`,
              top: `${20 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={7}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  mb: 2,
                  display: 'block',
                }}
              >
                ENTERPRISE DEVOPS ARCHITECT
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.05,
                  mb: 2,
                  fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                  background: 'linear-gradient(135deg, #f1f5f9 0%, #38bdf8 50%, #7dd3fc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Gopal Das
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                }}
              >
                DevOps Consultant | CI/CD & Cloud Transformation Specialist
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: 580,
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                }}
              >
                {personalInfo.summary}
              </Typography>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Grid container spacing={2} sx={{ mb: 4, maxWidth: 600 }}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} sm={3} key={stat.label}>
                    <StatCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      label={stat.label}
                      delay={0.5 + index * 0.1}
                    />
                  </Grid>
                ))}
              </Grid>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => smoothScrollTo('contact')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1rem',
                  }}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<DownloadIcon />}
                  href="/resume/gopal-das-resume.pdf"
                  download
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1rem',
                  }}
                >
                  Download Resume
                </Button>
              </Box>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <SocialLinks size="medium" />
            </motion.div>
          </Grid>

          {/* Right Content - Profile Card */}
          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  background:
                    'linear-gradient(180deg, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.95) 100%)',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'linear-gradient(90deg, #38bdf8, #f59e0b)',
                  },
                }}
              >
                {/* Avatar */}
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #38bdf8, #f59e0b)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    mb: 3,
                  }}
                >
                  GD
                </Box>

                <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {personalInfo.name}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}
                >
                  {personalInfo.role}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    mb: 3,
                    color: 'text.secondary',
                  }}
                >
                  <LocationIcon fontSize="small" />
                  <Typography variant="body2">
                    {personalInfo.location} — {personalInfo.availability}
                  </Typography>
                </Box>

                <Typography
                  variant="overline"
                  sx={{ color: 'text.secondary', fontSize: '0.7rem', mb: 1.5, display: 'block' }}
                >
                  CERTIFICATIONS
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {certifications.map(cert => (
                    <Chip
                      key={cert.abbr}
                      label={cert.abbr}
                      size="small"
                      sx={{
                        backgroundColor: `${cert.color}15`,
                        color: cert.color,
                        border: `1px solid ${cert.color}30`,
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        '&:hover': {
                          backgroundColor: `${cert.color}25`,
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <IconButton
              onClick={() => smoothScrollTo('about')}
              sx={{
                color: 'text.secondary',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
              }}
            >
              <ArrowDownIcon />
            </IconButton>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
