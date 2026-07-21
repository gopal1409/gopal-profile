import { useState, useCallback } from 'react';
import { Box, Container, Typography, Grid, Paper, TextField, Button, MenuItem, Alert, CircularProgress, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Send as SendIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  CheckCircle as CheckCircleIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import SectionHeader from '@components/ui/SectionHeader';
import { useFormValidation } from '@hooks/useFormValidation';
import { personalInfo } from '@utils/resumeData';
import { EMAILJS_CONFIG } from '@utils/constants';

const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'consulting', label: 'Enterprise DevOps Consulting' },
  { value: 'cicd', label: 'GitHub / GitLab CI/CD Implementation' },
  { value: 'training', label: 'Enterprise Training Programs' },
  { value: 'architecture', label: 'Architecture & Governance Workshops' },
  { value: 'cloud', label: 'Cloud & Kubernetes Transformation' },
  { value: 'migration', label: 'SCM Migration (SVN to Git)' },
  { value: 'devsecops', label: 'DevSecOps Pipeline Implementation' },
  { value: 'other', label: 'Other' },
];

const validationRules = {
  name: { required: true, requiredMessage: 'Full name is required' },
  email: { required: true, email: true, requiredMessage: 'Email is required' },
  service: { required: true, requiredMessage: 'Please select a service' },
  message: { required: true, minLength: 10, requiredMessage: 'Message is required', minLengthMessage: 'Message must be at least 10 characters' },
};

const Contact = () => {
  const theme = useTheme();
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormValidation(
    { name: '', email: '', phone: '', company: '', service: '', message: '' },
    validationRules
  );

  const onSubmit = useCallback(async (formValues) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS integration
      const templateParams = {
        from_name: formValues.name,
        from_email: formValues.email,
        phone: formValues.phone || 'Not provided',
        company: formValues.company || 'Not provided',
        service: serviceOptions.find((s) => s.value === formValues.service)?.label || formValues.service,
        message: formValues.message,
        to_email: personalInfo.email,
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      setSubmitStatus('success');
      resetForm();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [resetForm]);

  const contactDetails = [
    {
      icon: EmailIcon,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`,
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/gopaldevops',
      href: personalInfo.linkedin,
      external: true,
    },
    {
      icon: LocationIcon,
      label: 'Location',
      value: `${personalInfo.location} — ${personalInfo.availability}`,
      href: null,
    },
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #0f172a 0%, rgba(30,41,59,0.5) 100%)',
      }}
    >
      <Container maxWidth="xl">
        <SectionHeader
          overline="GET IN TOUCH"
          title="Let's Work Together"
          subtitle="Available for enterprise DevOps consulting, training programs, architecture workshops, and cloud transformation initiatives."
        />

        <Grid container spacing={6} alignItems="flex-start">
          {/* Left - Contact Info */}
          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>
                Ready to Transform Your Organization?
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                Whether you need enterprise DevOps transformation, CI/CD modernization, Kubernetes platform engineering, or hands-on training for your teams — I'm here to help.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 4 }}>
                {contactDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Box
                      component={detail.href ? 'a' : 'div'}
                      href={detail.href || undefined}
                      target={detail.external ? '_blank' : undefined}
                      rel={detail.external ? 'noopener noreferrer' : undefined}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'all 0.3s ease',
                        '&:hover': detail.href ? {
                          borderColor: 'primary.main',
                          backgroundColor: 'rgba(56, 189, 248, 0.05)',
                        } : {},
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          backgroundColor: 'rgba(56, 189, 248, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'primary.main',
                          flexShrink: 0,
                        }}
                      >
                        <detail.icon />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          {detail.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {detail.value}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              {/* Resume Download */}
              <Button
                variant="outlined"
                fullWidth
                startIcon={<DownloadIcon />}
                href="/resume/gopal-das-resume.pdf"
                download
                sx={{
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 2,
                }}
              >
                Download Resume (PDF)
              </Button>
            </motion.div>
          </Grid>

          {/* Right - Enquiry Form */}
          <Grid item xs={12} lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'linear-gradient(90deg, #38bdf8, #f59e0b)',
                  },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}>
                  Send an Enquiry
                </Typography>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Alert
                      severity="success"
                      icon={<CheckCircleIcon />}
                      sx={{ mb: 3, borderRadius: 2 }}
                    >
                      Thank you! Your enquiry has been sent successfully. I'll get back to you within 24 hours.
                    </Alert>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                      Something went wrong. Please try again or contact me directly via email.
                    </Alert>
                  </motion.div>
                )}

                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name *"
                        name="name"
                        value={values.name}
                        onChange={handleChange('name')}
                        onBlur={handleBlur('name')}
                        error={touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                        placeholder="Your name"
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address *"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                        error={touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        placeholder="you@company.com"
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        placeholder="+1 (555) 000-0000"
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Company / Organization"
                        name="company"
                        value={values.company}
                        onChange={handleChange('company')}
                        onBlur={handleBlur('company')}
                        placeholder="Your company"
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        select
                        label="Service Interested In *"
                        name="service"
                        value={values.service}
                        onChange={handleChange('service')}
                        onBlur={handleBlur('service')}
                        error={touched.service && !!errors.service}
                        helperText={touched.service && errors.service}
                        disabled={isSubmitting}
                      >
                        {serviceOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={5}
                        label="Project Details / Message *"
                        name="message"
                        value={values.message}
                        onChange={handleChange('message')}
                        onBlur={handleBlur('message')}
                        error={touched.message && !!errors.message}
                        helperText={touched.message && errors.message}
                        placeholder="Tell me about your project, timeline, and requirements..."
                        disabled={isSubmitting}
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                    sx={{
                      mt: 3,
                      py: 1.5,
                      fontWeight: 700,
                      fontSize: '1rem',
                      borderRadius: 2,
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;