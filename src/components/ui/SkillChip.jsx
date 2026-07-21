import { Chip } from '@mui/material';
import { motion } from 'framer-motion';

const SkillChip = ({ label, icon, delay = 0 }) => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.08, y: -2 }}
    >
      <Chip
        icon={icon}
        label={label}
        variant="filled"
        sx={{
          backgroundColor: 'rgba(56, 189, 248, 0.08)',
          color: 'text.secondary',
          border: '1px solid rgba(148, 163, 184, 0.15)',
          fontWeight: 500,
          fontSize: '0.85rem',
          py: 0.5,
          px: 0.5,
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(56, 189, 248, 0.15)',
            color: 'primary.main',
            borderColor: 'rgba(56, 189, 248, 0.3)',
          },
        }}
      />
    </motion.div>
  );
};

export default SkillChip;