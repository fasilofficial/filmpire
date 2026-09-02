import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBack, Movie as MovieIcon } from '@mui/icons-material';

import useStyles from './styles';
import { useGetActorQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';
import { MovieList, Pagination } from '../index';
import SEO from '../SEO/SEO';
import AdBanner from '../AdSense/AdBanner';

const ACTOR_PLACEHOLDER =
  'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450"%3E%3Crect width="100%25" height="100%25" fill="%231e293b"/%3E%3Ccircle cx="150" cy="170" r="60" fill="%23334155"/%3E%3Cpath d="M80 340 C80 270, 220 270, 220 340 Z" fill="%23334155"/%3E%3Ctext x="50%25" y="380" font-family="sans-serif" font-size="14" font-weight="600" fill="%2394a3b8" text-anchor="middle"%3ENo Photo Available%3C/text%3E%3C/svg%3E';

function Actors() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });

  if (isFetching) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" minHeight="60vh">
        <CircularProgress size="6rem" />
      </Box>
    );
  }

  if (error || !data) {
    return (
      <Box textAlign="center" py={12}>
        <Typography variant="h4" color="error" gutterBottom>
          Actor Details Unavailable
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={3}>
          We were unable to locate details for this actor or filmmaker.
        </Typography>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="error" variant="contained">
          Go Back
        </Button>
      </Box>
    );
  }

  const birthDateStr = data?.birthday ? new Date(data.birthday).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : null;
  const profileImage = data?.profile_path ? `https://image.tmdb.org/t/p/w780/${data.profile_path}` : ACTOR_PLACEHOLDER;

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 0.5rem' }}>
      <SEO
        title={`${data.name} - Biography, Movies & Filmography`}
        description={`Explore ${data.name}'s biography, known movies, filmography, and film career on FilmPire.`}
        canonicalUrl={`/actors/${id}`}
      />

      <Grid container spacing={4} mt={1}>
        <Grid item xs={12} md={5} lg={4} textAlign="center">
          <img
            className={classes.image}
            src={profileImage}
            alt={data.name || 'Actor portrait'}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = ACTOR_PLACEHOLDER;
            }}
          />
        </Grid>
        <Grid item xs={12} md={7} lg={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant="h2" component="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
            {data?.name}
          </Typography>

          {birthDateStr && (
            <Typography variant="subtitle1" color="textSecondary" fontWeight={600} gutterBottom>
              Born: {birthDateStr} {data.place_of_birth ? `in ${data.place_of_birth}` : ''}
            </Typography>
          )}

          <Typography variant="body1" color="textSecondary" paragraph sx={{ lineHeight: 1.8, my: 2 }}>
            {data?.biography || 'Biography details are currently not available for this individual.'}
          </Typography>

          <Box className={classes.btns} display="flex" gap={2} mt={2} flexWrap="wrap">
            {data?.imdb_id && (
              <Button
                variant="contained"
                color="error"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.imdb.com/name/${data.imdb_id}`}
                startIcon={<MovieIcon />}
                sx={{ textTransform: 'none', fontWeight: 700 }}
              >
                View on IMDb
              </Button>
            )}
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate(-1)}
              variant="outlined"
              color="inherit"
              sx={{ textTransform: 'none' }}
            >
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box margin="4rem 0 2rem">
        <Typography variant="h4" component="h2" fontWeight={800} gutterBottom>
          Featured Filmography ({movies?.total_results || 0} Titles)
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={3}>
          Browse movies featuring {data.name}.
        </Typography>

        {movies?.results?.length > 0 ? (
          <>
            <MovieList movies={movies} numberOfMovies={12} />
            <Pagination currentPage={page} setPage={setPage} totalPages={movies?.total_pages || 1} />
          </>
        ) : (
          <Typography variant="body2" color="textSecondary">
            No filmography records currently available.
          </Typography>
        )}
      </Box>

      <AdBanner slot="actor-detail-bottom" showAds={true} />
    </div>
  );
}

export default Actors;
