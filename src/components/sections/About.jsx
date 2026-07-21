import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '@components/ui/SectionHeader';

const About = () => {
  const highlights = [
    {
      number: '28+',
      label: 'Years of Experience',
      description:
        'Transforming enterprises across telecom, banking, retail, healthcare, and government sectors.',
    },
    {
      number: '500+',
      label: 'Training Programs',
      description:
        'Delivered hands-on, implementation-focused DevOps and cloud training to Fortune 500 organizations.',
    },
    {
      number: '1000+',
      label: 'Repositories Migrated',
      description:
        'Successfully migrated SVN to Git with full history retention and governance standardization.',
    },
    {
      number: '25+',
      label: 'Fortune 500 Clients',
      description:
        'Trusted by IBM, Accenture, Barclays, Deloitte, Siemens, Walmart, and many more.',
    },
  ];

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <SectionHeader
          overline="ABOUT ME"
          title="Driving Enterprise DevOps Excellence"
          subtitle="With over two decades of hands-on experience, I help organizations modernize their software delivery practices and build world-class engineering cultures."
        />

        <Grid container spacing={6} alignItems="center">
          {/* Left - Bio */}
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8, fontSize: '1.05rem' }}
              >
                I am a{' '}
                <strong style={{ color: '#f1f5f9' }}>
                  Senior DevOps Consultant and Enterprise Solution Architect
                </strong>{' '}
                with extensive hands-on expertise in GitHub-based Version Control strategies, GitLab
                CI/CD implementation, Kubernetes platform engineering, Infrastructure as Code,
                DevSecOps, cloud-native automation, and enterprise release governance.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8, fontSize: '1.05rem' }}
              >
                My approach combines{' '}
                <strong style={{ color: '#f1f5f9' }}>deep technical knowledge</strong> with
                practical implementation experience. I don&apos;t just advise — I architect, build,
                and deliver solutions that work in production environments at scale.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8, fontSize: '1.05rem' }}
              >
                I have successfully delivered large-scale DevOps adoption programs, CI/CD
                modernization initiatives, Git migration projects, and implementation-focused
                training engagements for organizations including{' '}
                <strong style={{ color: '#f1f5f9' }}>
                  IBM, Accenture, Barclays, Deloitte, Siemens, Ericsson, Walmart, Infosys, TCS
                </strong>
                , and British Telecom.
              </Typography>

              <Box
                sx={{
                  p: 3,
                  backgroundColor: 'rgba(56, 189, 248, 0.05)',
                  border: '1px solid rgba(56, 189, 248, 0.15)',
                  borderRadius: 3,
                  borderLeft: '4px solid #38bdf8',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: 'text.primary', fontStyle: 'italic', lineHeight: 1.7 }}
                >
                  &quot;I believe in building scalable, secure, and governance-driven delivery
                  pipelines that empower teams to ship faster without compromising on quality or
                  compliance.&quot;
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Right - Highlights Grid */}
          <Grid item xs={12} lg={6}>
            <Grid container spacing={2}>
              {highlights.map((item, index) => (
                <Grid item xs={12} sm={6} key={item.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 800,
                          color: 'primary.main',
                          mb: 1,
                          fontSize: '2rem',
                        }}
                      >
                        {item.number}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, mb: 1, color: 'text.primary', fontSize: '1rem' }}
                      >
                        {item.label}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
