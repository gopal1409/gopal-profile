import { Drawer, Box, List, ListItem, ListItemButton, ListItemText, Divider, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '@utils/constants';

const MobileDrawer = ({ open, onClose, activeSection, onNavClick }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 280,
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
          borderLeft: '1px solid rgba(148, 163, 184, 0.1)',
        },
      }}
    >
      <Box sx={{ p: 3, pt: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            color: 'primary.main',
            mb: 3,
            letterSpacing: '-0.02em',
          }}
        >
          Navigation
        </Typography>

        <List sx={{ py: 0 }}>
          {NAV_LINKS.map((link, index) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    onClick={() => onNavClick(link.href)}
                    sx={{
                      borderRadius: 2,
                      py: 1.2,
                      backgroundColor: isActive
                        ? 'rgba(56, 189, 248, 0.1)'
                        : 'transparent',
                      borderLeft: isActive
                        ? '3px solid #38bdf8'
                        : '3px solid transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(56, 189, 248, 0.08)',
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? 'primary.main' : 'text.secondary',
                        fontSize: '1rem',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </motion.div>
            );
          })}
        </List>

        <Divider sx={{ my: 2, borderColor: 'rgba(148, 163, 184, 0.1)' }} />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Button
            fullWidth
            variant="contained"
            onClick={() => onNavClick('#contact')}
            sx={{
              py: 1.5,
              fontWeight: 600,
              borderRadius: 2,
              fontSize: '1rem',
            }}
          >
            Hire Me
          </Button>
        </motion.div>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;