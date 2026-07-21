import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Verified as VerifiedIcon } from '@mui/icons-material';
import SectionHeader from '@components/ui/SectionHeader';
import { certifications } from '@utils/resumeData';

const Certifications = () => {
  return (
    <Box
      id="certifications"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        <SectionHeader
          overline="CREDENTIALS"
          title="Professional Certifications"
          subtitle="Industry-recognized certifications validating expertise across cloud, containers, and DevOps platforms."
        />

        <Grid container spacing={3}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={cert.abbr}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: cert.color,
                      boxShadow: `0 10px 40px ${cert.color}15`,
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      backgroundColor: cert.color,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      backgroundColor: `${cert.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      color: cert.color,
                    }}
                  >
                    <VerifiedIcon sx={{ fontSize: 28 }} />
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: cert.color,
                      mb: 0.5,
                      fontSize: '1.5rem',
                    }}
                  >
                    {cert.abbr}
                  </Typography>

                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                    {cert.name}
                  </Typography>

                  <Chip
                    label={cert.issuer}
                    size="small"
                    sx={{
                      backgroundColor: `${cert.color}10`,
                      color: cert.color,
                      fontWeight: 500,
                      fontSize: '0.75rem',
                    }}
                  />
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certifications;