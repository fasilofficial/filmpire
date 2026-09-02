import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { MovieFilter, ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import SEO from '../SEO/SEO';
import AdBanner from '../AdSense/AdBanner';
import { ALL_GENRES_LIST } from '../../data/genreDetails';
import genreIcons from '../../assets/genres';

export default function GenresList() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SEO
        title="Movie Genres Directory - Explore All Film Categories"
        description="Browse all 19 movie genres on FilmPire. Read detailed genre overviews, key themes, subgenres, and discover top-rated and popular films across every cinematic category."
        canonicalUrl="/genres"
      />

      <Box className={classes.header}>
        <Box display="flex" alignItems="center" gap={1.5} mb={1}>
          <MovieFilter color="error" fontSize="large" />
          <Typography variant="h3" component="h1" fontWeight={800} className={classes.h1}>
            Movie Genres Directory
          </Typography>
        </Box>
        <Typography variant="body1" color="textSecondary" className={classes.introText}>
          Discover movies through the lens of genre conventions, emotional tones, and narrative frameworks. Explore all 19 cinematic categories curated with in-depth storytelling hallmarks and recommendations.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {ALL_GENRES_LIST.map((genre) => {
          const iconSrc = genreIcons[genre.name.toLowerCase()];
          return (
            <Grid item xs={12} sm={6} md={4} key={genre.id}>
              <Card className={classes.genreDirectoryCard} component={Link} to={`/genre/${genre.id}`}>
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box display="flex" alignItems="center" gap={1.5} mb={1.5}>
                    {iconSrc && (
                      <img src={iconSrc} alt="" height={36} className={classes.genreIcon} />
                    )}
                    <Typography variant="h5" component="h2" fontWeight={800} className={classes.genreName}>
                      {genre.name}
                    </Typography>
                  </Box>

                  <Typography variant="subtitle2" color="error.main" fontWeight={600} gutterBottom>
                    {genre.tagline}
                  </Typography>

                  <Typography variant="body2" color="textSecondary" sx={{ flexGrow: 1, my: 1.5, lineHeight: 1.6 }}>
                    {genre.description.slice(0, 160)}...
                  </Typography>

                  {genre.subgenres?.length > 0 && (
                    <Box display="flex" flexWrap="wrap" gap={0.5} my={1}>
                      {genre.subgenres.slice(0, 3).map((sub, i) => (
                        <Typography key={i} variant="caption" sx={{ color: 'text.secondary', backgroundColor: 'rgba(255,255,255,0.06)', px: 1, py: 0.25, borderRadius: 1 }}>
                          {sub}
                        </Typography>
                      ))}
                    </Box>
                  )}

                  <Box display="flex" alignItems="center" gap={0.5} mt={2} color="error.main" fontWeight={700} fontSize="0.88rem">
                    Explore {genre.name} Movies &rarr;
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <AdBanner slot="genres-directory-bottom" showAds={true} />

      <Box textAlign="center" mt={6} mb={4} p={4} sx={{ backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: 3, border: '1px solid rgba(255,255,255,0.08)' }}>
        <Typography variant="h5" fontWeight={800} gutterBottom>
          Want to learn how genres evolved?
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ maxWidth: '600px', mx: 'auto', mb: 2.5 }}>
          Read our comprehensive guide "Movie Genres Explained" covering classic conventions, subgenre hybrids, and film history.
        </Typography>
        <Button
          component={Link}
          to="/guides/movie-genres-explained"
          variant="contained"
          color="error"
          endIcon={<ArrowForward />}
          sx={{ textTransform: 'none', fontWeight: 700 }}
        >
          Read Movie Genres Explained
        </Button>
      </Box>
    </div>
  );
}
