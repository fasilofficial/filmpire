import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

// Built-in SVG poster placeholder to prevent external HTTP failures
const POSTER_PLACEHOLDER =
  'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450"%3E%3Crect width="100%25" height="100%25" fill="%231e293b"/%3E%3Cpath d="M110 180 L190 180 L190 270 L110 270 Z" fill="%23334155"/%3E%3Cpolygon points="135,200 170,225 135,250" fill="%2394a3b8"/%3E%3Ctext x="50%25" y="320" font-family="sans-serif" font-size="14" font-weight="600" fill="%2394a3b8" text-anchor="middle"%3ENo Poster Available%3C/text%3E%3C/svg%3E';

function Movie({ movie, i }) {
  const classes = useStyles();

  if (!movie) return null;

  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : '';
  const hasRating = typeof movie.vote_average === 'number' && movie.vote_average > 0;
  const posterSrc = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : POSTER_PLACEHOLDER;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} className={classes.movie}>
      <Grow in timeout={Math.min((i + 1) * 150, 1000)}>
        <Link
          className={classes.links}
          to={`/movie/${movie.id}`}
          aria-label={`${movie.title}${releaseYear ? ` (${releaseYear})` : ''}`}
        >
          <Box className={classes.imageWrapper}>
            <img
              src={posterSrc}
              alt={movie.title ? `${movie.title} poster` : 'Movie poster'}
              className={classes.image}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = POSTER_PLACEHOLDER;
              }}
            />
            {releaseYear && (
              <Box className={classes.yearBadge}>
                {releaseYear}
              </Box>
            )}
          </Box>

          <Typography className={classes.title} variant="h6" component="h3">
            {movie.title}
          </Typography>

          {hasRating ? (
            <Tooltip disableTouchListener title={`${movie.vote_average.toFixed(1)} / 10 based on ${movie.vote_count || 0} votes`}>
              <Box display="flex" alignItems="center" gap={0.5} mt={0.5}>
                <Rating readOnly value={movie.vote_average / 2} precision={0.1} size="small" />
                <Typography variant="caption" color="textSecondary" fontWeight={600}>
                  {movie.vote_average.toFixed(1)}
                </Typography>
              </Box>
            </Tooltip>
          ) : (
            <Typography variant="caption" color="textSecondary" mt={0.5}>
              Rating pending
            </Typography>
          )}
        </Link>
      </Grow>
    </Grid>
  );
}

export default Movie;
