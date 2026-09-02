import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Rating, Chip, Modal } from '@mui/material';
import { PlayArrow, InfoOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import { useGetMovieQuery } from '../../services/TMDB';

function FeaturedMovie({ movie }) {
  const classes = useStyles();
  const [trailerOpen, setTrailerOpen] = useState(false);
  const { data: movieDetail } = useGetMovieQuery(movie?.id, { skip: !movie?.id });

  if (!movie) return null;

  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : '';
  const trailerVideo = movieDetail?.videos?.results?.find(
    (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
  ) || movieDetail?.videos?.results?.[0];

  return (
    <>
      <Box className={classes.featuredCardContainer}>
        <Card className={classes.card} classes={{ root: classes.cardRoot }}>
          <CardMedia
            media="picture"
            alt={movie.title}
            image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}`}
            title={movie.title}
            className={classes.cardMedia}
          />
          <Box className={classes.overlayGradient} />
          <Box padding={{ xs: '20px', md: '40px' }} zIndex={2}>
            <CardContent className={classes.cardContent} classes={{ root: classes.cardContentRoot }}>
              <Box display="flex" alignItems="center" gap={1} mb={1} flexWrap="wrap">
                <Chip label="Featured Spotlight" size="small" color="error" sx={{ fontWeight: 700 }} />
                {releaseYear && (
                  <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
                    {releaseYear}
                  </Typography>
                )}
                {movie.vote_average > 0 && (
                  <Box display="flex" alignItems="center" gap={0.5} ml={1}>
                    <Rating readOnly value={movie.vote_average / 2} precision={0.1} size="small" />
                    <Typography variant="caption" sx={{ color: '#ffffff', fontWeight: 700 }}>
                      {movie.vote_average.toFixed(1)}/10
                    </Typography>
                  </Box>
                )}
              </Box>

              <Typography variant="h3" component="h2" className={classes.heroTitle}>
                {movie.title}
              </Typography>

              <Typography variant="body1" className={classes.heroOverview}>
                {movie.overview}
              </Typography>

              <Box display="flex" gap={2} mt={3} flexWrap="wrap">
                <Button
                  component={Link}
                  to={`/movie/${movie.id}`}
                  variant="contained"
                  color="error"
                  size="large"
                  startIcon={<InfoOutlined />}
                  sx={{ textTransform: 'none', fontWeight: 700, px: 3, borderRadius: 2 }}
                >
                  View Details
                </Button>

                {trailerVideo && (
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrow />}
                    onClick={() => setTrailerOpen(true)}
                    sx={{
                      textTransform: 'none',
                      fontWeight: 700,
                      px: 3,
                      borderRadius: 2,
                      color: '#ffffff',
                      borderColor: 'rgba(255,255,255,0.6)',
                      '&:hover': {
                        borderColor: '#ffffff',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    Watch Trailer
                  </Button>
                )}
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Box>

      {/* Official YouTube Trailer Modal */}
      {trailerVideo && (
        <Modal
          open={trailerOpen}
          onClose={() => setTrailerOpen(false)}
          className={classes.modal}
          closeAfterTransition
        >
          <Box className={classes.modalContent}>
            <iframe
              className={classes.videoFrame}
              src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1`}
              title={`${movie.title} Official Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Modal>
      )}
    </>
  );
}

export default FeaturedMovie;
