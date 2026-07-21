import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatCounter = ({ value, suffix, label, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Box sx={{ textAlign: 'center', p: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: 'primary.main',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          {inView ? (
            <CountUp end={value} duration={2.5} suffix={suffix} separator="," />
          ) : (
            `0${suffix}`
          )}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontWeight: 500,
            mt: 0.5,
            fontSize: '0.9rem',
          }}
        >
          {label}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default StatCounter;
