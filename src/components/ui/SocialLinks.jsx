import { Box, IconButton, Tooltip } from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const SocialLinks = ({ size = 'medium', vertical = false, sx = {} }) => {
  const links = [
    { icon: LinkedInIcon, href: 'https://linkedin.com/in/gopaldevops', label: 'LinkedIn' },
    { icon: EmailIcon, href: 'mailto:gopal1409@gmail.com', label: 'Email' },
    { icon: PhoneIcon, href: 'tel:+919537126262', label: 'Phone' },
  ];

  const iconSize = size === 'large' ? 28 : size === 'small' ? 18 : 22;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
        gap: 1,
        ...sx,
      }}
    >
      {links.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.15, y: -2 }}
        >
          <Tooltip title={link.label} arrow>
            <IconButton
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              sx={{
                color: 'text.secondary',
                backgroundColor: 'rgba(56, 189, 248, 0.08)',
                width: size === 'large' ? 48 : size === 'small' ? 36 : 42,
                height: size === 'large' ? 48 : size === 'small' ? 36 : 42,
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'rgba(56, 189, 248, 0.15)',
                },
                transition: 'all 0.3s ease',
              }}
              aria-label={link.label}
            >
              <link.icon sx={{ fontSize: iconSize }} />
            </IconButton>
          </Tooltip>
        </motion.div>
      ))}
    </Box>
  );
};

export default SocialLinks;
