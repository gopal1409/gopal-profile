import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const ClientMarquee = ({ clients }) => {
  const duplicatedClients = [...clients, ...clients];

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
        py: 4,
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      {/* Gradient overlays for fade effect */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 100,
          background: 'linear-gradient(90deg, #1e293b, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 100,
          background: 'linear-gradient(270deg, #1e293b, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        style={{
          display: 'flex',
          gap: '3rem',
          width: 'max-content',
        }}
      >
        {duplicatedClients.map((client, index) => (
          <Typography
            key={`${client}-${index}`}
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              opacity: 0.6,
              transition: 'opacity 0.3s, color 0.3s',
              '&:hover': {
                opacity: 1,
                color: 'primary.main',
              },
              fontSize: '1.1rem',
            }}
          >
            {client}
          </Typography>
        ))}
      </motion.div>
    </Box>
  );
};

export default ClientMarquee;
