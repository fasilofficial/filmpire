import React from 'react';
import { Box, Typography, Grid, Card, Button } from '@mui/material';
import { MovieCreation, MenuBook, Search, Lock } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import SEO from '../SEO/SEO';

const tmdbLogo = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg';

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SEO
        title="About FilmPire - Movie Discovery & Editorial Mission"
        description="Learn about FilmPire: our mission to simplify movie discovery, our curated editorial guides, technical architecture, and our data attribution to The Movie Database (TMDB)."
        canonicalUrl="/about"
      />

      <Box className={classes.header}>
        <Typography variant="h3" component="h1" className={classes.h1}>
          About FilmPire
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.introText}>
          FilmPire is an independent movie discovery, film education, and editorial publisher platform designed to help movie lovers explore cinema, understand storytelling genres, and find films truly worth watching.
        </Typography>
      </Box>

      {/* Purpose & Origin */}
      <section className={classes.section}>
        <Typography variant="h4" component="h2" className={classes.sectionHeading}>
          Our Purpose
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          In a fragmented streaming landscape where tens of thousands of titles compete for viewer attention, choosing a film has become an exhausting chore. Passive algorithmic recommendation feeds frequently promote homogenous content, leaving audiences stuck in endless carousel scrolling.
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          FilmPire was built to replace passive scrolling with intentional cinematic discovery. We combine structured, verified metadata from global film archives with thoughtful, human-centered editorial writing, genre explanations, and curated recommendations.
        </Typography>
      </section>

      {/* What Users Can Do */}
      <section className={classes.section}>
        <Typography variant="h4" component="h2" className={classes.sectionHeading}>
          What You Can Do on FilmPire
        </Typography>
        <Grid container spacing={3} mt={0.5}>
          <Grid item xs={12} sm={6}>
            <Card className={classes.cardBlock} sx={{ height: '100%' }}>
              <Box display="flex" alignItems="center" gap={1.5} mb={1.5}>
                <MovieCreation color="error" />
                <Typography variant="h6" fontWeight={700}>
                  Curated Discovery
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.65 }}>
                Browse trending popular movies, top-rated masterpieces of all time, and anticipated upcoming theatrical and digital premieres.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.cardBlock} sx={{ height: '100%' }}>
              <Box display="flex" alignItems="center" gap={1.5} mb={1.5}>
                <MenuBook color="error" />
                <Typography variant="h6" fontWeight={700}>
                  Editorial Film Guides
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.65 }}>
                Read original articles analyzing cinema genres, rating mechanics, viewing strategies, and themed recommendations without sponsored puffery or clickbait.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.cardBlock} sx={{ height: '100%' }}>
              <Box display="flex" alignItems="center" gap={1.5} mb={1.5}>
                <Search color="error" />
                <Typography variant="h6" fontWeight={700}>
                  19 Genre Deep Dives
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.65 }}>
                Explore comprehensive guides for Action, Sci-Fi, Mystery, Animation, Documentary, and more, complete with storytelling hallmarks and historical context.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.cardBlock} sx={{ height: '100%' }}>
              <Box display="flex" alignItems="center" gap={1.5} mb={1.5}>
                <Lock color="error" />
                <Typography variant="h6" fontWeight={700}>
                  Personal Library Sync
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.65 }}>
                Connect your TMDB account to save custom watchlists and favorites across sessions, keeping track of films you intend to experience.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </section>

      {/* Data Source & Attribution */}
      <section className={classes.section}>
        <Typography variant="h4" component="h2" className={classes.sectionHeading}>
          Data Source & TMDB Attribution
        </Typography>
        <Box className={classes.cardBlock} display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={3} alignItems="center">
          <img src={tmdbLogo} alt="The Movie Database Logo" height={48} />
          <Box>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
              Powered by The Movie Database (TMDB) API
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.65 }}>
              FilmPire utilizes the TMDB API to provide verified movie metadata, release dates, runtime measurements, cast filmographies, and poster assets.
            </Typography>
            <Typography variant="caption" color="textSecondary" sx={{ mt: 1, display: 'block', fontStyle: 'italic' }}>
              Notice: This product uses the TMDB API but is not endorsed or certified by TMDB.
            </Typography>
          </Box>
        </Box>
      </section>

      {/* Editorial Standards & Integrity */}
      <section className={classes.section}>
        <Typography variant="h4" component="h2" className={classes.sectionHeading}>
          Editorial Standards & Trust
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          We take content authenticity seriously. We do not generate fake viewer reviews, fabricate awards or employee bios, or republish wholesale third-party articles. Our guides are original works written by cinema enthusiasts to provide genuine cultural context and actionable viewing guidance.
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          FilmPire does not host video streams or pirated files. All trailers are served through verified, official YouTube embeds provided by film studios and distributors.
        </Typography>
      </section>

      {/* Support FilmPire */}
      <section className={classes.section}>
        <Typography variant="h4" component="h2" className={classes.sectionHeading}>
          Support Independent Development
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
          FilmPire is created and maintained as an independent cinema discovery and editorial resource. If you find our guides, genre breakdowns, and movie recommendations valuable, consider supporting our ongoing development and hosting costs.
        </Typography>
        <Box mt={2}>
          <Button
            component="a"
            href="https://buymeacoffee.com/mfasilofficial"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#FFDD00',
              color: '#000000',
              fontWeight: 700,
              textTransform: 'none',
              borderRadius: '8px',
              px: 3,
              py: 1,
              fontSize: '0.95rem',
              boxShadow: '0 4px 14px rgba(255, 221, 0, 0.3)',
              '&:hover': {
                backgroundColor: '#ffe84d',
                color: '#000000',
              },
            }}
          >
            ☕ Buy Me a Coffee
          </Button>
        </Box>
      </section>

      {/* Call to Action */}
      <Box textAlign="center" mt={4} pt={3} borderTop="1px solid rgba(255, 255, 255, 0.08)">
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Start Exploring FilmPire
        </Typography>
        <Box display="flex" gap={2} justifyContent="center" mt={2} flexWrap="wrap">
          <Button component={Link} to="/movies" variant="contained" color="error" sx={{ textTransform: 'none', fontWeight: 700 }}>
            Browse Movies
          </Button>
          <Button component={Link} to="/guides" variant="outlined" color="inherit" sx={{ textTransform: 'none' }}>
            Read Film Guides
          </Button>
          <Button component={Link} to="/contact" variant="text" color="inherit" sx={{ textTransform: 'none' }}>
            Contact Editorial Team &rarr;
          </Button>
        </Box>
      </Box>
    </div>
  );
}
