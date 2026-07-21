import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Business as BusinessIcon,
  Sync as SyncIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  SwapHoriz as SwapIcon,
  School as SchoolIcon,
} from '@mui/icons-material';
import SectionHeader from '@components/ui/SectionHeader';
import { services } from '@utils/resumeData';

const iconMap = {
  Business: BusinessIcon,
  Sync: SyncIcon,
  Cloud: CloudIcon,
  Security: SecurityIcon,
  SwapHoriz: SwapIcon,
  School: SchoolIcon,
};

const Services = () => {
  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'rgba(30, 41, 59, 0.3)',
      }}
    >
      <Container maxWidth="xl">
        <SectionHeader
          overline="SERVICES"
          title="What I Can Do For You"
          subtitle="Comprehensive DevOps consulting and implementation services tailored to enterprise needs."
        />

        <Grid container spacing={3}>
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || BusinessIcon;

            return (
              <Grid item xs={12} md={6} lg={4} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      backgroundColor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.25)',
                        '& .service-icon': {
                          backgroundColor: 'primary.main',
                          color: '#0f172a',
                          transform: 'scale(1.1) rotate(5deg)',
                        },
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 4,
                        height: '100%',
                        background: 'linear-gradient(180deg, #38bdf8, #f59e0b)',
                        opacity: 0,
                        transition: 'opacity 0.3s',
                      },
                      '&:hover::before': {
                        opacity: 1,
                      },
                    }}
                  >
                    <Box
                      className="service-icon"
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        backgroundColor: 'rgba(56, 189, 248, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.5,
                        transition: 'all 0.3s ease',
                        color: 'primary.main',
                      }}
                    >
                      <IconComponent sx={{ fontSize: 28 }} />
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2.5, lineHeight: 1.7 }}
                    >
                      {service.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {service.features.map(feature => (
                        <Chip
                          key={feature}
                          label={feature}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(56, 189, 248, 0.06)',
                            color: 'text.secondary',
                            border: '1px solid rgba(148, 163, 184, 0.1)',
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
