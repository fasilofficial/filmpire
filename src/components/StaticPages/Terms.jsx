import React from 'react';
import { Box, Typography } from '@mui/material';

import useStyles from './styles';
import SEO from '../SEO/SEO';

export default function Terms() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SEO
        title="Terms of Service - FilmPire"
        description="Read the Terms of Service governing your access and use of FilmPire's movie discovery, editorial content, and cataloging platform."
        canonicalUrl="/terms"
      />

      <Box className={classes.header}>
        <Typography variant="h3" component="h1" className={classes.h1}>
          Terms of Service
        </Typography>
        <Typography variant="caption" color="textSecondary" display="block" mb={1}>
          LAST UPDATED: SEPTEMBER 2026
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.introText}>
          Please read these Terms of Service ("Terms") carefully before using the FilmPire website located at https://filmpire-page.vercel.app ("Service").
        </Typography>
      </Box>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          By accessing or using FilmPire, you agree to be bound by these Terms. If you do not agree with any part of these terms, you may not access or use the platform.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          2. Informational & Discovery Nature of Service
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          FilmPire is strictly an online cinema discovery, education, and cataloging service. FilmPire does not host, upload, or broadcast full movie files or unauthorized streams. FilmPire connects viewers with verified movie metadata, official trailers, and legal platform links.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          3. Acceptable Use
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          You agree not to use FilmPire for any unlawful purpose or in any way that interrupts, damages, or impairs the operation of the site. You agree not to scrape or mass-extract content without prior authorization, nor attempt to circumvent access controls or security measures.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          4. User Accounts & Third-Party Authentication
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          Optional account features (such as watchlists and favorites) utilize The Movie Database (TMDB) API authentication. You are responsible for safeguarding your TMDB credentials and for any activities conducted through your session.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          5. Accuracy of Third-Party Movie Information
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          Film metadata, cast credits, release dates, runtime measurements, and images are sourced from The Movie Database (TMDB) community API. While we strive to present accurate data, FilmPire cannot guarantee that all third-party metadata is free from errors or omissions.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          6. Intellectual Property & Editorial Content
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          Original editorial articles, genre guides, website design, and code are the intellectual property of FilmPire. Movie titles, posters, character trademarks, and studio logos are the property of their respective copyright and trademark owners and are displayed under fair informational use principles.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          7. External Links & Video Embeds
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          FilmPire contains links to external websites (such as IMDb, official film websites, and YouTube video embeds). We do not control or endorse the content or privacy practices of external websites and assume no liability for third-party platforms.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          8. Limitation of Liability & Service Availability
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          FilmPire is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. We do not warrant that the website will be error-free or uninterrupted. To the maximum extent permitted by law, FilmPire will not be liable for any indirect or consequential damages arising from your use of the platform.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          9. Changes to Terms
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          We reserve the right to modify or replace these Terms at any time. Continued use of the platform following any modifications constitutes acceptance of the updated terms.
        </Typography>
      </section>
    </div>
  );
}
