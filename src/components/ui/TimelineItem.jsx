import { Box, Typography, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import {
  TimelineItem as MuiTimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { useScrollAnimation } from '@hooks/useScrollAnimation';

const TimelineItem = ({ project, index, isLast }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <MuiTimelineItem>
        <TimelineOppositeContent
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'flex-end',
            color: 'text.secondary',
            fontWeight: 600,
            fontSize: '0.9rem',
            pr: 3,
          }}
        >
          {project.duration}
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot
            sx={{
              backgroundColor: 'primary.main',
              boxShadow: '0 0 0 4px rgba(56, 189, 248, 0.2)',
            }}
          />
          {!isLast && <TimelineConnector sx={{ backgroundColor: 'rgba(56, 189, 248, 0.3)' }} />}
        </TimelineSeparator>

        <TimelineContent sx={{ py: 2, px: { xs: 2, md: 3 } }}>
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
                }}
              />
            </Box>

            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
              {project.title}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
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
                  }}
                />
              ))}
            </Box>

            <Box component="ul" sx={{ m: 0, pl: 2, color: 'text.secondary' }}>
              {project.outcomes.map((outcome, i) => (
                <Typography
                  key={i}
                  component="li"
                  variant="body2"
                  sx={{
                    mb: 0.5,
                    '&::marker': { color: 'primary.main' },
                  }}
                >
                  {outcome}
                </Typography>
              ))}
            </Box>
          </Paper>
        </TimelineContent>
      </MuiTimelineItem>
    </motion.div>
  );
};

export default TimelineItem;
