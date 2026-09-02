import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import SEO from '../SEO/SEO';

const tmdbLogo = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg';

export default function Copyright() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SEO
        title="Copyright & DMCA Notice - FilmPire"
        description="FilmPire's Copyright and DMCA Notice. Learn about our intellectual property policy, TMDB data attribution, and formal takedown procedures."
        canonicalUrl="/copyright"
      />

      <Box className={classes.header}>
        <Typography variant="h3" component="h1" className={classes.h1}>
          Copyright & DMCA Notice
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.introText}>
          FilmPire respects the intellectual property rights of creators, studios, and copyright holders. This page explains our content policy, asset origins, and copyright notification procedures.
        </Typography>
      </Box>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          1. Platform Nature: Informational & Discovery
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          FilmPire is an informational cinema database and editorial guide. <strong>FilmPire does not host, upload, stream, torrent, or distribute full-length movie files or unauthorized video content.</strong>
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          Trailers displayed on this website are delivered strictly via official, public YouTube embedded video players provided by film studios, distributors, and production entities.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          2. Movie Artwork & Metadata Attribution
        </Typography>
        <Box className={classes.cardBlock} display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2.5} alignItems="center">
          <img src={tmdbLogo} alt="The Movie Database Logo" height={42} />
          <Box>
            <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.65 }}>
              Film metadata, movie posters, backdrops, and cast profiles displayed on FilmPire are retrieved via the official API provided by <strong>The Movie Database (TMDB)</strong>.
            </Typography>
            <Typography variant="caption" color="textSecondary" sx={{ mt: 1, display: 'block', fontStyle: 'italic' }}>
              Notice: This product uses the TMDB API but is not endorsed or certified by TMDB.
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          All movie posters, character trademarks, titles, and studio emblems remain the intellectual property of their respective copyright and trademark owners. They are utilized on FilmPire strictly for identification, non-commercial commentary, and educational discovery under fair use principles.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          3. DMCA & Copyright Takedown Procedure
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          If you are a copyright owner or an authorized agent thereof and believe that any material available on FilmPire infringes upon your copyright, you may submit a formal notification pursuant to the Digital Millennium Copyright Act (DMCA).
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          Please provide a written notice containing the following details:
        </Typography>
        <ol style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
          <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
          <li>Identification of the copyrighted work claimed to have been infringed.</li>
          <li>Identification of the material that is claimed to be infringing and specific URLs on FilmPire where the material is located.</li>
          <li>Reasonably sufficient information to allow us to contact you, such as an address, telephone number, and email address.</li>
          <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
          <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner.</li>
        </ol>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.sectionHeading}>
          4. Submitting a Notice
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          You can submit a copyright notification directly through our official contact mechanism:
        </Typography>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          color="error"
          endIcon={<ArrowForward />}
          sx={{ textTransform: 'none', fontWeight: 700 }}
        >
          Submit Copyright Notice via Contact Page
        </Button>
      </section>
    </div>
  );
}
