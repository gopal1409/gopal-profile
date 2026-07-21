import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@hooks/useScrollAnimation';

const SectionHeader = ({ overline, title, subtitle, align = 'center', sx = {} }) => {
  const theme = useTheme();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Box
      ref={ref}
      sx={{
        textAlign: align,
        mb: { xs: 4, md: 6 },
        maxWidth: align === 'center' ? 700 : 'none',
        mx: align === 'center' ? 'auto' : 0,
        ...sx,
      }}
    >
      {overline && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: '0.1em',
              mb: 1,
              display: 'block',
            }}
          >
            {overline}
          </Typography>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 2,
            background: 'linear-gradient(135deg, #f1f5f9 0%, #38bdf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {title}
        </Typography>
      </motion.div>

      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: 'text.secondary', maxWidth: 600, mx: align === 'center' ? 'auto' : 0 }}
          >
            {subtitle}
          </Typography>
        </motion.div>
      )}

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          width: 60,
          height: 3,
          background: 'linear-gradient(90deg, #38bdf8, #f59e0b)',
          borderRadius: 2,
          margin: align === 'center' ? '24px auto 0' : '24px 0 0',
        }}
      />
    </Box>
  );
};

export default SectionHeader;