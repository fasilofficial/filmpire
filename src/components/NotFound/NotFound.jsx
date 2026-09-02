import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Home, Movie, Search, MenuBook } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import SEO from '../SEO/SEO';

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
      <SEO
        title="404 - Page Not Found"
        description="The movie or page you were looking for could not be found on FilmPire."
        noindex={true}
      />

      <Typography
        variant="h1"
        fontWeight={900}
        color="error.main"
        sx={{ fontSize: { xs: '5rem', md: '8rem' }, lineHeight: 1, letterSpacing: '-2px', mb: 2 }}
      >
        404
      </Typography>

      <Typography variant="h4" component="h2" fontWeight={800} gutterBottom>
        Lost in the Cinema? Page Not Found
      </Typography>

      <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '560px', mx: 'auto', mb: 4, lineHeight: 1.7 }}>
        The reel ran out. The page or movie you are looking for may have been moved, renamed, or is temporarily unavailable.
      </Typography>

      <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="error"
          size="large"
          startIcon={<Home />}
          sx={{ textTransform: 'none', fontWeight: 700, px: 3, borderRadius: 2 }}
        >
          Back to Home
        </Button>
        <Button
          component={Link}
          to="/movies"
          variant="outlined"
          size="large"
          color="inherit"
          startIcon={<Movie />}
          sx={{ textTransform: 'none', fontWeight: 700, px: 3, borderRadius: 2 }}
        >
          Browse Movies
        </Button>
        <Button
          component={Link}
          to="/genres"
          variant="outlined"
          size="large"
          color="inherit"
          startIcon={<Search />}
          sx={{ textTransform: 'none', fontWeight: 700, px: 3, borderRadius: 2 }}
        >
          Explore Genres
        </Button>
        <Button
          component={Link}
          to="/guides"
          variant="outlined"
          size="large"
          color="inherit"
          startIcon={<MenuBook />}
          sx={{ textTransform: 'none', fontWeight: 700, px: 3, borderRadius: 2 }}
        >
          Read Guides
        </Button>
      </Box>
    </Container>
  );
}
