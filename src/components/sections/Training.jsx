import { Box, Container, Typography, Grid, Paper, Chip, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ExpandMore as ExpandMoreIcon, School as SchoolIcon, Timer as TimerIcon, BarChart as BarChartIcon } from '@mui/icons-material';
import SectionHeader from '@components/ui/SectionHeader';
import { trainingPrograms } from '@utils/resumeData';

const Training = () => {
  const theme = useTheme();

  return (
    <Box
      id="training"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'rgba(30, 41, 59, 0.3)',
      }}
    >
      <Container maxWidth="xl">
        <SectionHeader
          overline="CORPORATE TRAINING"
          title="Training Programs"
          subtitle="Implementation-focused, hands-on training programs designed to transform teams from foundational to advanced DevOps maturity."
        />

        <Grid container spacing={4}>
          {trainingPrograms.map((program, index) => (
            <Grid item xs={12} md={4} key={program.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
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
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: index === 0
                        ? 'linear-gradient(90deg, #38bdf8, #8b5cf6)'
                        : index === 1
                        ? 'linear-gradient(90deg, #f59e0b, #ef4444)'
                        : 'linear-gradient(90deg, #10b981, #38bdf8)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <SchoolIcon sx={{ color: 'primary.main' }} />
                    <Chip
                      label={program.level}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(56, 189, 248, 0.1)',
                        color: 'primary.main',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    />
                  </Box>

                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary', fontSize: '1.2rem' }}>
                    {program.title}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <TimerIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      Duration: {program.duration}
                    </Typography>
                  </Box>

                  <Typography variant="overline" sx={{ color: 'text.secondary', fontSize: '0.7rem', mb: 1.5, display: 'block' }}>
                    MODULES
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {program.modules.map((module, moduleIndex) => (
                      <Accordion
                        key={module.name}
                        elevation={0}
                        sx={{
                          backgroundColor: 'transparent',
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: '8px !important',
                          '&::before': { display: 'none' },
                          '&.Mui-expanded': {
                            borderColor: 'rgba(56, 189, 248, 0.3)',
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}
                          sx={{
                            minHeight: 40,
                            '& .MuiAccordionSummary-content': { my: 0.5 },
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                            {moduleIndex + 1}. {module.name}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ pt: 0 }}>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                            <strong style={{ color: '#94a3b8' }}>Tools:</strong> {module.tools}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Training;