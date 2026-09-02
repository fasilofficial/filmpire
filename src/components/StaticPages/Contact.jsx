import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Alert,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { Send, CheckCircleOutline, ReportProblemOutlined, HelpOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import SEO from '../SEO/SEO';

const INQUIRY_TYPES = [
  { value: 'feedback', label: 'General Feedback & Thoughts' },
  { value: 'data_correction', label: 'Report Incorrect Movie Information' },
  { value: 'technical', label: 'Technical Bug or Site Issue' },
  { value: 'editorial', label: 'Editorial Question or Suggestion' },
  { value: 'copyright', label: 'Copyright / DMCA Concern' },
  { value: 'feature', label: 'Feature Request' },
];

export default function Contact() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'feedback',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    // Client-side confirmation state
    setSubmitted(true);
  };

  return (
    <div className={classes.container}>
      <SEO
        title="Contact FilmPire - Feedback, Support & Data Corrections"
        description="Get in touch with the FilmPire team. Submit feedback, report movie data inaccuracies, report technical bugs, or contact our editorial desk."
        canonicalUrl="/contact"
      />

      <Box className={classes.header}>
        <Typography variant="h3" component="h1" className={classes.h1}>
          Contact Us
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.introText}>
          Have feedback, spotted incorrect movie metadata, or experiencing a technical issue? We welcome your input to help keep FilmPire accurate, fast, and enjoyable for cinema enthusiasts.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          {submitted ? (
            <Alert
              icon={<CheckCircleOutline fontSize="inherit" />}
              severity="success"
              sx={{ p: 3, borderRadius: 2 }}
            >
              <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                Thank you for your message, {formData.name}!
              </Typography>
              <Typography variant="body2">
                We have received your communication regarding <strong>{formData.subject || formData.inquiryType}</strong>. Our team reviews submissions regularly and will get back to you if a response is required.
              </Typography>
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', inquiryType: 'feedback', subject: '', message: '' });
                }}
                sx={{ mt: 2, textTransform: 'none' }}
              >
                Send Another Message
              </Button>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit} className={classes.cardBlock}>
              <Typography variant="h5" component="h2" fontWeight={800} gutterBottom>
                Send a Message
              </Typography>
              <Typography variant="body2" color="textSecondary" mb={3}>
                Fill out the form below. For data corrections, please include the movie title or TMDB link.
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="Your Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange('name')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email Address"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange('email')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label="Reason for Contact"
                    value={formData.inquiryType}
                    onChange={handleChange('inquiryType')}
                    variant="outlined"
                  >
                    {INQUIRY_TYPES.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject / Movie Title"
                    variant="outlined"
                    placeholder="e.g. Inaccurate release date for Inception"
                    value={formData.subject}
                    onChange={handleChange('subject')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={5}
                    label="Message Details"
                    variant="outlined"
                    placeholder="Provide specific details so we can investigate and assist you effectively..."
                    value={formData.message}
                    onChange={handleChange('message')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="error"
                    size="large"
                    endIcon={<Send />}
                    sx={{ textTransform: 'none', fontWeight: 700, px: 4, borderRadius: 2 }}
                  >
                    Submit Inquiries
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Grid>

        {/* Quick Assistance & Links */}
        <Grid item xs={12} md={4}>
          <Card className={classes.cardBlock}>
            <CardContent sx={{ p: 0 }}>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <HelpOutline color="error" />
                <Typography variant="subtitle1" fontWeight={700}>
                  Quick Help & FAQ
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" paragraph sx={{ lineHeight: 1.6 }}>
                Before reaching out, check our Frequently Asked Questions for quick answers regarding search, ratings, and account lists.
              </Typography>
              <Button component={Link} to="/faq" variant="outlined" size="small" color="inherit" sx={{ textTransform: 'none' }}>
                Visit FAQ Page
              </Button>
            </CardContent>
          </Card>

          <Card className={classes.cardBlock}>
            <CardContent sx={{ p: 0 }}>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <ReportProblemOutlined color="error" />
                <Typography variant="subtitle1" fontWeight={700}>
                  Copyright Concerns
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" paragraph sx={{ lineHeight: 1.6 }}>
                If you represent a copyright holder and have questions regarding metadata or asset display, please consult our dedicated policy.
              </Typography>
              <Button component={Link} to="/copyright" variant="outlined" size="small" color="inherit" sx={{ textTransform: 'none' }}>
                Copyright & DMCA Notice
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
