import React from 'react';
import { Box, Typography } from '@mui/material';

import useStyles from './styles';
import SEO from '../SEO/SEO';

export default function Privacy() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SEO
        title="Privacy Policy - FilmPire"
        description="Read FilmPire's comprehensive Privacy Policy explaining how we handle cookies, local storage, Google Analytics, Google AdSense, and TMDB authentication."
        canonicalUrl="/privacy"
      />

      <Box className={classes.header}>
        <Typography variant="h3" component="h1" className={classes.h1}>
          Privacy Policy
        </Typography>
        <Typography variant="caption" color="textSecondary" display="block" mb={1}>
          LAST UPDATED: SEPTEMBER 2026
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.introText}>
          FilmPire ("we", "our", or "us") values your personal privacy. This Privacy Policy transparently explains what data we collect, how it is processed, and how third-party services operate when you visit https://filmpire-page.vercel.app.
        </Typography>
      </Box>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          1. Information We Collect & How It Is Used
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          FilmPire is primarily a public movie discovery and educational resource. You can browse movie catalogs, read editorial guides, and explore genres without creating an account or providing personally identifiable information.
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          When you optionally interact with specific features, the following data may be processed:
        </Typography>
        <ul style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
          <li>
            <strong>TMDB Authentication & Profile:</strong> If you choose to log in to save favorites or watchlists, you are redirected securely to The Movie Database (TMDB) authentication portal. We never receive or store your TMDB password. We store a session identifier token and account ID in your browser’s local storage to facilitate watchlist and favorite syncing.
          </li>
          <li>
            <strong>Contact Form Submissions:</strong> If you contact us via our support form, we collect your name, email address, inquiry reason, and message content solely to respond to your inquiry.
          </li>
        </ul>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          2. Browser Local Storage
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          FilmPire utilizes your browser’s client-side <code>localStorage</code> mechanism to enhance your user experience:
        </Typography>
        <ul style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
          <li><code>theme_mode</code>: Stores your preference for Dark Mode or Light Mode.</li>
          <li><code>request_token</code> and <code>session_id</code>: Stores temporary TMDB authentication tokens when you log in.</li>
          <li><code>accountId</code>: References your public TMDB account number for watchlist retrieval.</li>
        </ul>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          You can clear your browser storage at any time by clearing your browser cache or clicking "Logout" in your profile.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          3. Analytics (Google Analytics)
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          We utilize Google Analytics (Measurement ID: <code>G-HF54VMRPRZ</code>) to understand how visitors navigate our website, which movie guides are most read, and overall platform performance. Google Analytics uses cookies to collect anonymous technical telemetry such as browser type, operating system, referring URLs, and pages visited. This information does not personally identify you.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          4. Advertising (Google AdSense)
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          We display non-intrusive advertisements served by Google AdSense (Publisher ID: <code>ca-pub-6821531199235214</code>). Google and its advertising partners use cookies to serve ads based on your prior visits to this website or other websites across the internet.
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our sites and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#e50914' }}>Google Ads Settings</a> or through <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: '#e50914' }}>aboutads.info</a>.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          5. Third-Party APIs & Embedded Content
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          FilmPire interacts with trusted third-party providers:
        </Typography>
        <ul style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
          <li>
            <strong>The Movie Database (TMDB):</strong> Movie descriptions, ratings, cast, and posters are delivered via the TMDB API. TMDB has its own independent privacy policy governing account interactions.
          </li>
          <li>
            <strong>YouTube / Google:</strong> Official trailers are embedded from YouTube. Interacting with trailer video players is governed by YouTube's Terms of Service and Google's Privacy Policy.
          </li>
        </ul>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          6. Data Retention & Security
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          We retain contact form communications only as long as necessary to address your feedback. We do not sell, rent, or trade your personal information to third parties. We employ HTTPS encryption across all site interactions.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          7. Contact Information
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          If you have questions regarding this Privacy Policy or wish to request information regarding your data, please contact us through our official <a href="/contact" style={{ color: '#e50914' }}>Contact Page</a>.
        </Typography>
      </section>
    </div>
  );
}
