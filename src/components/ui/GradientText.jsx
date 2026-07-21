import { Typography } from '@mui/material';

const GradientText = ({ children, variant = 'h1', sx = {}, ...props }) => {
  return (
    <Typography
      variant={variant}
      sx={{
        background: 'linear-gradient(135deg, #f1f5f9 0%, #38bdf8 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontWeight: 800,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default GradientText;