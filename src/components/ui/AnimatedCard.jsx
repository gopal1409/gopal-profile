import { Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, delay = 0, sx = {}, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      <Card
        sx={{
          height: '100%',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'primary.main',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          },
          ...sx,
        }}
        {...props}
      >
        <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>{children}</CardContent>
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;
