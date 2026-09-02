import React, { useState, useEffect } from 'react';
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  Rating,
  Chip,
  Divider,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
  ExpandMore,
  VerifiedUserOutlined,
} from '@mui/icons-material';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import useStyles from './styles';
import { MovieList } from '../index';
import SEO from '../SEO/SEO';
import AdBanner from '../AdSense/AdBanner';
import { useGetMovieQuery, useGetRecommendationsQuery, useGetListQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import genreIcons from '../../assets/genres';

const POSTER_PLACEHOLDER =
  'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450"%3E%3Crect width="100%25" height="100%25" fill="%231e293b"/%3E%3Cpath d="M110 180 L190 180 L190 270 L110 270 Z" fill="%23334155"/%3E%3Cpolygon points="135,200 170,225 135,250" fill="%2394a3b8"/%3E%3Ctext x="50%25" y="320" font-family="sans-serif" font-size="14" font-weight="600" fill="%2394a3b8" text-anchor="middle"%3ENo Poster Available%3C/text%3E%3C/svg%3E';

function formatCurrency(amount) {
  if (!amount || amount === 0) return 'Undisclosed';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
}

function MovieInfo() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();

  const { data, error, isFetching } = useGetMovieQuery(id);
  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery(
    { listName: 'favorite/movies', accountId: user?.id, sessionId: localStorage.getItem('session_id'), page: 1 },
    { skip: !user?.id }
  );
  const { data: watchlistMovies, refetch: refetchWatchlist } = useGetListQuery(
    { listName: 'watchlist/movies', accountId: user?.id, sessionId: localStorage.getItem('session_id'), page: 1 },
    { skip: !user?.id }
  );
  const { data: recommendations } = useGetRecommendationsQuery({ list: '/recommendations', movie_id: id });

  const [open, setOpen] = useState(false);
  const [isMovieFavorited, setIsMovieFavorited] = useState(false);
  const [isMovieWatchlisted, setIsMovieWatchlisted] = useState(false);

  useEffect(() => {
    if (favoriteMovies?.results) {
      setIsMovieFavorited(!!favoriteMovies.results.find((movie) => movie?.id === data?.id));
    }
  }, [favoriteMovies, data]);

  useEffect(() => {
    if (watchlistMovies?.results) {
      setIsMovieWatchlisted(!!watchlistMovies.results.find((movie) => movie?.id === data?.id));
    }
  }, [watchlistMovies, data]);

  const addToFavorites = async () => {
    if (!user?.id) {
      alert('Please log in with your TMDB account to save favorites.');
      return;
    }
    try {
      await axios.post(
        `https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${localStorage.getItem('session_id')}`,
        {
          media_type: 'movie',
          media_id: id,
          favorite: !isMovieFavorited,
        }
      );
      setIsMovieFavorited((prev) => !prev);
      if (refetchFavorites) refetchFavorites();
    } catch (e) {
      console.error('Favorite toggle failed', e);
    }
  };

  const addToWatchList = async () => {
    if (!user?.id) {
      alert('Please log in with your TMDB account to add movies to your watchlist.');
      return;
    }
    try {
      await axios.post(
        `https://api.themoviedb.org/3/account/${user.id}/watchlist?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${localStorage.getItem('session_id')}`,
        {
          media_type: 'movie',
          media_id: id,
          watchlist: !isMovieWatchlisted,
        }
      );
      setIsMovieWatchlisted((prev) => !prev);
      if (refetchWatchlist) refetchWatchlist();
    } catch (e) {
      console.error('Watchlist toggle failed', e);
    }
  };

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
          Movie Details Unavailable
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={3}>
          We couldn’t retrieve the details for this film. It may have been removed or the movie ID is invalid.
        </Typography>
        <Button component={Link} to="/movies" variant="contained" color="error" startIcon={<ArrowBack />}>
          Browse All Movies
        </Button>
      </Box>
    );
  }

  // Safe extractions
  const releaseYear = data?.release_date ? data.release_date.split('-')[0] : '';
  const director = data?.credits?.crew?.find((c) => c.job === 'Director')?.name;
  const writers = data?.credits?.crew
    ?.filter((c) => c.job === 'Screenplay' || c.job === 'Writer')
    ?.map((w) => w.name)
    ?.slice(0, 2)
    ?.join(', ');

  const officialTrailer = data?.videos?.results?.find(
    (v) => v.type === 'Trailer' && v.site === 'YouTube'
  ) || data?.videos?.results?.find((v) => v.site === 'YouTube');

  const posterUrl = data?.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : POSTER_PLACEHOLDER;

  // JSON-LD structured data
  const movieSchema = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    name: data.title,
    image: posterUrl,
    description: data.overview,
    datePublished: data.release_date,
    duration: data.runtime ? `PT${data.runtime}M` : undefined,
    director: director ? { '@type': 'Person', name: director } : undefined,
    aggregateRating:
      data.vote_count > 0
        ? {
            '@type': 'AggregateRating',
            ratingValue: data.vote_average,
            bestRating: 10,
            ratingCount: data.vote_count,
          }
        : undefined,
  };

  // Editorial reasoning for "Why You Might Like This Movie"
  const primaryGenre = data.genres?.[0]?.name || 'Film';
  const editorialContext = (
    <>
      <Typography variant="body1" color="textSecondary" paragraph sx={{ lineHeight: 1.75 }}>
        {data.title} stands out primarily as a compelling {primaryGenre.toLowerCase()} entry
        {releaseYear ? ` from ${releaseYear}` : ''}.
        {data.vote_average >= 7.5
          ? ` With a strong audience score of ${data.vote_average.toFixed(1)}/10, it is widely recommended for viewers who appreciate thoughtful pacing, memorable character dynamics, and confident storytelling.`
          : ` Ideal for audiences who enjoy ${primaryGenre.toLowerCase()} cinema with distinct stylistic choices and high entertainment value.`}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.7 }}>
        {director ? `Helmed by director ${director}, the production emphasizes thematic atmosphere and narrative momentum.` : ''} If you are drawn to stories exploring {data.genres?.map((g) => g.name.toLowerCase()).join(' and ')}, this feature delivers an engrossing {data.runtime ? `${data.runtime}-minute` : ''} cinematic journey.
      </Typography>
    </>
  );

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 0.5rem' }}>
      <SEO
        title={`${data.title}${releaseYear ? ` (${releaseYear})` : ''} - Cast, Story, Ratings & Details`}
        description={`Read about ${data.title}${releaseYear ? ` (${releaseYear})` : ''}: overview, cast information, official trailers, audience ratings, runtime, and curated editorial recommendations on FilmPire.`}
        ogImage={posterUrl}
        canonicalUrl={`/movie/${id}`}
        schema={movieSchema}
        schemaId={`movie-${id}`}
      />

      {/* Main Grid: Poster and Information */}
      <Grid container spacing={4} className={classes.containerSpaceAround}>
        {/* Poster Column */}
        <Grid item xs={12} md={4} textAlign="center">
          <img
            src={posterUrl}
            className={classes.poster}
            alt={`${data.title} movie poster`}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = POSTER_PLACEHOLDER;
            }}
          />
        </Grid>

        {/* Content Column */}
        <Grid item xs={12} md={8}>
          <Box display="flex" flexWrap="wrap" alignItems="baseline" gap={1.5} mb={0.5}>
            <Typography variant="h3" component="h1" fontWeight={800} className={classes.movieTitle}>
              {data.title}
            </Typography>
            {releaseYear && (
              <Typography variant="h4" component="span" color="textSecondary" fontWeight={400}>
                ({releaseYear})
              </Typography>
            )}
          </Box>

          {data.tagline && (
            <Typography variant="subtitle1" color="error.main" fontStyle="italic" fontWeight={600} gutterBottom>
              "{data.tagline}"
            </Typography>
          )}

          {/* Ratings & Runtime Row */}
          <Box display="flex" alignItems="center" gap={3} my={2} flexWrap="wrap">
            {data.vote_average > 0 && (
              <Box display="flex" alignItems="center" gap={1}>
                <Rating readOnly value={data.vote_average / 2} precision={0.1} />
                <Typography variant="subtitle1" fontWeight={700}>
                  {data.vote_average.toFixed(1)} / 10
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  ({data.vote_count?.toLocaleString()} votes)
                </Typography>
              </Box>
            )}

            {data.runtime > 0 && (
              <Typography variant="subtitle2" color="textSecondary" sx={{ backgroundColor: 'rgba(255,255,255,0.06)', px: 1.5, py: 0.5, borderRadius: 1 }}>
                {Math.floor(data.runtime / 60)}h {data.runtime % 60}m ({data.runtime} min)
              </Typography>
            )}

            {data.status && (
              <Chip label={data.status} size="small" variant="outlined" sx={{ fontSize: '0.75rem' }} />
            )}
          </Box>

          {/* Genres Chips */}
          <Box display="flex" flexWrap="wrap" gap={1} mb={3}>
            {data.genres?.map((genre) => (
              <Chip
                key={genre.id}
                label={genre.name}
                component={Link}
                to={`/genre/${genre.id}`}
                clickable
                color="primary"
                variant="outlined"
                icon={
                  genreIcons[genre.name.toLowerCase()] ? (
                    <img src={genreIcons[genre.name.toLowerCase()]} alt="" height={18} style={{ filter: 'invert(1)' }} />
                  ) : undefined
                }
                onClick={() => dispatch(selectGenreOrCategory(genre.id))}
                sx={{ borderRadius: 1.5, px: 0.5 }}
              />
            ))}
          </Box>

          {/* Overview */}
          <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
            About {data.title}
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary" sx={{ lineHeight: 1.8 }}>
            {data.overview || 'Detailed overview currently unavailable for this title.'}
          </Typography>

          {/* Action Buttons: Only show when legitimate data exists */}
          <Box className={classes.buttonContainer} mt={3}>
            <ButtonGroup size="medium" variant="outlined" sx={{ flexWrap: 'wrap', gap: 1 }}>
              {officialTrailer && (
                <Button
                  onClick={() => setOpen(true)}
                  startIcon={<Theaters />}
                  variant="contained"
                  color="error"
                  sx={{ textTransform: 'none', fontWeight: 700 }}
                >
                  Official Trailer
                </Button>
              )}

              {data.homepage && (
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.homepage}
                  startIcon={<Language />}
                  sx={{ textTransform: 'none' }}
                >
                  Official Website
                </Button>
              )}

              {data.imdb_id && (
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.imdb.com/title/${data.imdb_id}`}
                  startIcon={<MovieIcon />}
                  sx={{ textTransform: 'none' }}
                >
                  IMDb
                </Button>
              )}

              <Button
                onClick={addToFavorites}
                startIcon={isMovieFavorited ? <FavoriteBorderOutlined /> : <Favorite />}
                color={isMovieFavorited ? 'error' : 'inherit'}
                sx={{ textTransform: 'none' }}
              >
                {isMovieFavorited ? 'Favorited' : 'Favorite'}
              </Button>

              <Button
                onClick={addToWatchList}
                startIcon={isMovieWatchlisted ? <Remove /> : <PlusOne />}
                color={isMovieWatchlisted ? 'primary' : 'inherit'}
                sx={{ textTransform: 'none' }}
              >
                {isMovieWatchlisted ? 'In Watchlist' : 'Watchlist'}
              </Button>

              <Button
                startIcon={<ArrowBack />}
                onClick={() => navigate(-1)}
                sx={{ textTransform: 'none' }}
              >
                Back
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 5, opacity: 0.1 }} />

      {/* Structured Movie Details Grid */}
      <Box mb={5}>
        <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
          Film Metadata & Production Details
        </Typography>
        <Grid container spacing={2} mt={0.5}>
          <Grid item xs={6} sm={4} md={2.4}>
            <Card className={classes.metaCard}>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="caption" color="textSecondary" display="block">Release Date</Typography>
                <Typography variant="subtitle2" fontWeight={700}>{data.release_date || 'N/A'}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={2.4}>
            <Card className={classes.metaCard}>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="caption" color="textSecondary" display="block">Director</Typography>
                <Typography variant="subtitle2" fontWeight={700}>{director || 'Not listed'}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={2.4}>
            <Card className={classes.metaCard}>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="caption" color="textSecondary" display="block">Screenplay</Typography>
                <Typography variant="subtitle2" fontWeight={700}>{writers || 'Not listed'}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={2.4}>
            <Card className={classes.metaCard}>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="caption" color="textSecondary" display="block">Original Language</Typography>
                <Typography variant="subtitle2" fontWeight={700}>{data.original_language?.toUpperCase() || 'EN'}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={2.4}>
            <Card className={classes.metaCard}>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="caption" color="textSecondary" display="block">Budget</Typography>
                <Typography variant="subtitle2" fontWeight={700}>{formatCurrency(data.budget)}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Top Cast Section */}
      {data?.credits?.cast?.length > 0 && (
        <Box mb={5}>
          <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
            Top Billed Cast
          </Typography>
          <Grid container spacing={2} mt={0.5}>
            {data.credits.cast.slice(0, 6).map((character) => (
              <Grid
                key={character.id}
                item
                xs={6}
                sm={4}
                md={2}
                component={Link}
                to={`/actors/${character.id}`}
                sx={{ textDecoration: 'none' }}
              >
                <Box className={classes.castCard}>
                  <img
                    className={classes.castImage}
                    src={
                      character.profile_path
                        ? `https://image.tmdb.org/t/p/w300/${character.profile_path}`
                        : POSTER_PLACEHOLDER
                    }
                    alt={character.name}
                    loading="lazy"
                  />
                  <Typography variant="subtitle2" color="textPrimary" fontWeight={700} mt={1} noWrap>
                    {character.name}
                  </Typography>
                  <Typography variant="caption" color="textSecondary" display="block" noWrap>
                    {character.character || 'Role unspecified'}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Original Editorial Context */}
      <Box className={classes.editorialSection} mb={5}>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <VerifiedUserOutlined color="error" />
          <Typography variant="h5" component="h2" fontWeight={800}>
            Why You Might Like {data.title}
          </Typography>
        </Box>
        <Typography variant="caption" color="textSecondary" display="block" mb={2}>
          FILMPIRE EDITORIAL PERSPECTIVE &bull; GENRE & THEME SYNTHESIS
        </Typography>
        {editorialContext}
      </Box>

      {/* Policy-Safe AdBanner */}
      <AdBanner slot="movie-detail-mid-banner" showAds={true} />

      {/* Movie-Specific FAQ Section based on verified data */}
      <Box mb={5}>
        <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
          Frequently Asked Questions About {data.title}
        </Typography>
        <Accordion className={classes.accordion} elevation={0}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle2" fontWeight={700}>
              What is the runtime of {data.title}?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="textSecondary">
              {data.runtime ? `${data.title} runs for ${data.runtime} minutes (approximately ${Math.floor(data.runtime / 60)} hour${Math.floor(data.runtime / 60) === 1 ? '' : 's'} and ${data.runtime % 60} minutes).` : 'The exact runtime has not been specified.'}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion} elevation={0}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle2" fontWeight={700}>
              Who directed and wrote {data.title}?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="textSecondary">
              {director ? `${data.title} was directed by ${director}.` : 'Director information is not listed.'}{' '}
              {writers ? `The screenplay was written by ${writers}.` : ''}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion} elevation={0}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle2" fontWeight={700}>
              What are the main genres of {data.title}?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="textSecondary">
              {data.title} is categorized under {data.genres?.map((g) => g.name).join(', ') || 'unspecified genres'}. You can explore similar titles in our dedicated genre directories.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Similar Movies / Recommendations */}
      <Box mt={6} mb={4}>
        <Typography variant="h4" component="h2" fontWeight={800} gutterBottom>
          You Might Also Like
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={3}>
          Discover movies with similar storytelling themes, genres, and audience appeal.
        </Typography>

        {recommendations?.results?.length > 0 ? (
          <MovieList movies={recommendations} numberOfMovies={10} />
        ) : (
          <Box py={4} textAlign="center">
            <Typography variant="body2" color="textSecondary">
              No direct recommendations found for this movie. Explore popular titles in the same genre!
            </Typography>
          </Box>
        )}
      </Box>

      {/* Official YouTube Trailer Modal */}
      {officialTrailer && (
        <Modal
          closeAfterTransition
          className={classes.modal}
          open={open}
          onClose={() => setOpen(false)}
        >
          <Box className={classes.modalContent}>
            <iframe
              className={classes.video}
              frameBorder="0"
              title={`${data.title} Official Trailer`}
              src={`https://www.youtube.com/embed/${officialTrailer.key}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Modal>
      )}
    </div>
  );
}

export default MovieInfo;
