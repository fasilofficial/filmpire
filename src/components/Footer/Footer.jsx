import React from 'react';
import { Box, Container, Grid, Typography, Divider, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const tmdbLogo = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg';

export default function Footer() {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Divider sx={{ mb: 5, opacity: 0.15 }} />
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Brand & Purpose */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" mb={1.5}>
              <Typography variant="h5" component={Link} to="/" className={classes.brandTitle}>
                Film<span className={classes.brandAccent}>Pire</span>
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.7, mb: 2 }}>
              A modern movie discovery and educational guide platform. Discover popular titles, explore curated genres, read in-depth cinema guides, and find films truly worth watching.
            </Typography>
            <Box display="flex" alignItems="center" gap={1.5} mt={2}>
              <img src={tmdbLogo} alt="The Movie Database (TMDB) Logo" height={28} style={{ opacity: 0.9 }} />
              <Typography variant="caption" color="textSecondary" sx={{ lineHeight: 1.4 }}>
                This product uses the TMDB API but is not endorsed or certified by TMDB.
              </Typography>
            </Box>
          </Grid>

          {/* Explore Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom className={classes.columnTitle}>
              Explore
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <MuiLink component={Link} to="/movies" className={classes.footerLink}>Browse All Movies</MuiLink>
              <MuiLink component={Link} to="/popular" className={classes.footerLink}>Popular Movies</MuiLink>
              <MuiLink component={Link} to="/top-rated" className={classes.footerLink}>Top Rated</MuiLink>
              <MuiLink component={Link} to="/upcoming" className={classes.footerLink}>Upcoming Releases</MuiLink>
              <MuiLink component={Link} to="/genres" className={classes.footerLink}>All Genres Directory</MuiLink>
            </Box>
          </Grid>

          {/* Editorial & Guides */}
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom className={classes.columnTitle}>
              Editorial & Guides
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <MuiLink component={Link} to="/guides" className={classes.footerLink}>Movie Guides & Articles</MuiLink>
              <MuiLink component={Link} to="/guides/how-to-find-a-good-movie" className={classes.footerLink}>How to Find a Good Movie</MuiLink>
              <MuiLink component={Link} to="/guides/movie-genres-explained" className={classes.footerLink}>Movie Genres Explained</MuiLink>
              <MuiLink component={Link} to="/guides/how-movie-ratings-work" className={classes.footerLink}>Understanding Movie Ratings</MuiLink>
              <MuiLink component={Link} to="/guides/how-to-build-a-movie-watchlist" className={classes.footerLink}>Curating Your Watchlist</MuiLink>
            </Box>
          </Grid>

          {/* Company & Legal */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom className={classes.columnTitle}>
              Trust & Legal
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <MuiLink component={Link} to="/about" className={classes.footerLink}>About FilmPire</MuiLink>
              <MuiLink component={Link} to="/contact" className={classes.footerLink}>Contact & Corrections</MuiLink>
              <MuiLink component={Link} to="/faq" className={classes.footerLink}>Frequently Asked Questions</MuiLink>
              <MuiLink component={Link} to="/privacy" className={classes.footerLink}>Privacy Policy</MuiLink>
              <MuiLink component={Link} to="/terms" className={classes.footerLink}>Terms of Service</MuiLink>
              <MuiLink component={Link} to="/copyright" className={classes.footerLink}>Copyright & DMCA Notice</MuiLink>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, opacity: 0.1 }} />

        <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center" pb={3}>
          <Typography variant="caption" color="textSecondary">
            © {currentYear} FilmPire. All rights reserved. For informational and educational cinema discovery purposes.
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Designed for genuine film lovers &bull; Powered by TMDB & YouTube
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
