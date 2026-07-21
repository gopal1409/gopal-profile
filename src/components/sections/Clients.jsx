import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '@components/ui/SectionHeader';
import ClientMarquee from '@components/ui/ClientMarquee';
import { clients } from '@utils/resumeData';

const Clients = () => {
  return (
    <Box
      id="clients"
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl" sx={{ mb: 4 }}>
        <SectionHeader
          overline="TRUSTED BY"
          title="Fortune 500 Clients"
          subtitle="Delivered enterprise DevOps transformation and training to industry-leading organizations worldwide."
        />
      </Container>

      <ClientMarquee clients={clients} />

      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: 2,
              opacity: 0.7,
            }}
          >
            {clients.slice(0, 12).map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                <Box
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(56, 189, 248, 0.05)',
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: 'text.secondary',
                      fontSize: '0.85rem',
                    }}
                  >
                    {client}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Clients;