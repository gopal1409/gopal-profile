import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { Work as WorkIcon } from '@mui/icons-material';
import SectionHeader from '@components/ui/SectionHeader';
import { experience } from '@utils/resumeData';

const Experience = () => {
  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'rgba(30, 41, 59, 0.3)',
      }}
    >
      <Container maxWidth="xl">
        <SectionHeader
          overline="PROFESSIONAL JOURNEY"
          title="Work Experience"
          subtitle="A track record of delivering enterprise-scale DevOps transformation and cloud modernization initiatives."
        />

        {experience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
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
              {/* Header */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2, mb: 3 }}>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5, color: 'text.primary' }}>
                    {job.company}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600, fontSize: '1.1rem' }}>
                    {job.role}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip
                    label={job.period}
                    sx={{
                      backgroundColor: 'rgba(56, 189, 248, 0.1)',
                      color: 'primary.main',
                      fontWeight: 600,
                    }}
                  />
                  <Chip
                    label={job.location}
                    variant="outlined"
                    sx={{
                      borderColor: 'rgba(148, 163, 184, 0.2)',
                      color: 'text.secondary',
                    }}
                  />
                </Box>
              </Box>

              {/* Highlights */}
              <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none' }}>
                {job.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Box
                      component="li"
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1.5,
                        mb: 1.5,
                        pl: 0,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: 'primary.main',
                          mt: 1,
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {highlight}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Paper>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

export default Experience;