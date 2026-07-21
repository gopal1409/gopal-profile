import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { CalendarToday as CalendarIcon } from '@mui/icons-material';
import SectionHeader from '@components/ui/SectionHeader';
import { projects } from '@utils/resumeData';

const Projects = () => {
  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        <SectionHeader
          overline="PORTFOLIO"
          title="Featured Projects"
          subtitle="Enterprise-scale DevOps transformation initiatives delivered for global organizations."
        />

        <MuiTimeline
          position="alternate"
          sx={{ p: 0, '& .MuiTimelineItem-root::before': { display: { xs: 'none', md: 'block' } } }}
        >
          {projects.map((project, index) => (
            <TimelineItem key={project.title}>
              <TimelineOppositeContent
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                  color: 'text.secondary',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CalendarIcon fontSize="small" />
                  {project.duration}
                </Box>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    backgroundColor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                    boxShadow: `0 0 0 4px ${index % 2 === 0 ? 'rgba(56, 189, 248, 0.2)' : 'rgba(245, 158, 11, 0.2)'}`,
                  }}
                />
                {index < projects.length - 1 && (
                  <TimelineConnector sx={{ backgroundColor: 'rgba(56, 189, 248, 0.2)' }} />
                )}
              </TimelineSeparator>

              <TimelineContent sx={{ py: 2, px: { xs: 2, md: 3 } }}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      backgroundColor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateX(8px)',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1.5 }}>
                      <Chip
                        label={project.duration}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(245, 158, 11, 0.1)',
                          color: 'secondary.main',
                          fontWeight: 600,
                          display: { md: 'none' },
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, mb: 1, color: 'text.primary', fontSize: '1.15rem' }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, lineHeight: 1.7 }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                      {project.tools.map(tool => (
                        <Chip
                          key={tool}
                          label={tool}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(56, 189, 248, 0.08)',
                            color: 'primary.main',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>

                    <Box component="ul" sx={{ m: 0, pl: 2, mb: 0 }}>
                      {project.outcomes.slice(0, 2).map((outcome, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            mb: 0.5,
                            '&::marker': { color: 'success.main' },
                          }}
                        >
                          {outcome}
                        </Typography>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </MuiTimeline>
      </Container>
    </Box>
  );
};

export default Projects;
