import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import {
  GitHub as GitHubIcon,
  Sync as SyncIcon,
  ViewInAr as ViewInArIcon,
  Construction as ConstructionIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  Assessment as AssessmentIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import SectionHeader from '@components/ui/SectionHeader';
import { skills } from '@utils/resumeData';

const iconMap = {
  GitHub: GitHubIcon,
  Sync: SyncIcon,
  ViewInAr: ViewInArIcon,
  Construction: ConstructionIcon,
  Cloud: CloudIcon,
  Security: SecurityIcon,
  Assessment: AssessmentIcon,
  Code: CodeIcon,
};

const Skills = () => {
  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        <SectionHeader
          overline="TECHNICAL EXPERTISE"
          title="Skills & Technologies"
          subtitle="A comprehensive technology stack spanning version control, CI/CD, containers, cloud, security, and automation."
        />

        <Grid container spacing={3}>
          {skills.map((skillCategory, categoryIndex) => {
            const IconComponent = iconMap[skillCategory.icon] || CodeIcon;

            return (
              <Grid item xs={12} sm={6} lg={3} key={skillCategory.category}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
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
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 1.5,
                          backgroundColor: 'rgba(56, 189, 248, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'primary.main',
                        }}
                      >
                        <IconComponent sx={{ fontSize: 22 }} />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: 'primary.main', fontSize: '1rem' }}
                      >
                        {skillCategory.category}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {skillCategory.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: categoryIndex * 0.08 + techIndex * 0.03,
                          }}
                          whileHover={{ scale: 1.08 }}
                        >
                          <Chip
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(56, 189, 248, 0.06)',
                              color: 'text.secondary',
                              border: '1px solid rgba(148, 163, 184, 0.12)',
                              fontWeight: 500,
                              fontSize: '0.8rem',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                backgroundColor: 'rgba(56, 189, 248, 0.12)',
                                color: 'primary.main',
                                borderColor: 'rgba(56, 189, 248, 0.3)',
                              },
                            }}
                          />
                        </motion.div>
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

export default Skills;
