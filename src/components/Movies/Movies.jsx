import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography, Button, Chip } from '@mui/material';
import { SearchOff, ArrowBack, Whatshot, Star, Upcoming } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import { MovieList, Pagination } from '../index';
import SEO from '../SEO/SEO';
import AdBanner from '../AdSense/AdBanner';
import { useGetMoviesQuery, useGetGenresQuery } from '../../services/TMDB';
import { selectGenreOrCategory, searchMovie } from '../../features/currentGenreOrCategory';

function Movies() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const location = useLocation();

  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data: genresData } = useGetGenresQuery();

  // Sync with URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    const categoryParam = params.get('category');
    const genreParam = params.get('genre');

    if (searchParam) {
      dispatch(searchMovie(searchParam));
    } else if (categoryParam) {
      dispatch(selectGenreOrCategory(categoryParam));
    } else if (genreParam) {
      dispatch(selectGenreOrCategory(Number(genreParam)));
    }
    setPage(1);
  }, [location.search, dispatch]);

  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  // Determine active title
  let heading = 'Browse Movies';
  let subtext = 'Discover films from around the world. Filter by genre, rating, popularity, or search for your favorite titles.';

  if (searchQuery) {
    heading = `Search Results for "${searchQuery}"`;
    subtext = `Found ${data?.total_results || 0} movie matches for your search.`;
  } else if (typeof genreIdOrCategoryName === 'number') {
    const matchedGenre = genresData?.genres?.find((g) => g.id === genreIdOrCategoryName);
    if (matchedGenre) {
      heading = `${matchedGenre.name} Movies`;
      subtext = `Explore our curated selection of ${matchedGenre.name.toLowerCase()} cinema.`;
    }
  } else if (genreIdOrCategoryName === 'top_rated') {
    heading = 'Top Rated Movies';
    subtext = 'Browse highest-rated films based on global audience scores.';
  } else if (genreIdOrCategoryName === 'upcoming') {
    heading = 'Upcoming Releases';
    subtext = 'Preview anticipated theatrical and streaming debuts.';
  } else if (genreIdOrCategoryName === 'popular') {
    heading = 'Popular Movies';
    subtext = 'Explore movies currently captivating audiences worldwide.';
  }

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 0.5rem' }}>
      <SEO
        title={heading}
        description={subtext}
        canonicalUrl="/movies"
      />

      {/* Header & Filter Bar */}
      <Box mb={4} pb={2} borderBottom="1px solid rgba(255, 255, 255, 0.08)">
        <Typography variant="h3" component="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.3rem' } }}>
          {heading}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '750px' }}>
          {subtext}
        </Typography>

        {/* Quick Filter Categories */}
        <Box display="flex" flexWrap="wrap" gap={1} mt={2.5} alignItems="center">
          <Typography variant="caption" color="textSecondary" fontWeight={700}>
            Quick Filter:
          </Typography>
          <Chip
            icon={<Whatshot fontSize="small" />}
            label="Popular"
            clickable
            color={genreIdOrCategoryName === 'popular' && !searchQuery ? 'error' : 'default'}
            variant={genreIdOrCategoryName === 'popular' && !searchQuery ? 'filled' : 'outlined'}
            onClick={() => dispatch(selectGenreOrCategory('popular'))}
            size="small"
          />
          <Chip
            icon={<Star fontSize="small" />}
            label="Top Rated"
            clickable
            color={genreIdOrCategoryName === 'top_rated' && !searchQuery ? 'error' : 'default'}
            variant={genreIdOrCategoryName === 'top_rated' && !searchQuery ? 'filled' : 'outlined'}
            onClick={() => dispatch(selectGenreOrCategory('top_rated'))}
            size="small"
          />
          <Chip
            icon={<Upcoming fontSize="small" />}
            label="Upcoming"
            clickable
            color={genreIdOrCategoryName === 'upcoming' && !searchQuery ? 'error' : 'default'}
            variant={genreIdOrCategoryName === 'upcoming' && !searchQuery ? 'filled' : 'outlined'}
            onClick={() => dispatch(selectGenreOrCategory('upcoming'))}
            size="small"
          />
          <Chip
            label="All Genres Directory →"
            component={Link}
            to="/genres"
            clickable
            size="small"
            sx={{ ml: 'auto' }}
          />
        </Box>
      </Box>

      {/* Loading State */}
      {isFetching && (
        <Box display="flex" justifyContent="center" py={12}>
          <CircularProgress size="4rem" />
        </Box>
      )}

      {/* Error State */}
      {error && (
        <Box textAlign="center" py={8}>
          <Typography variant="h5" color="error" gutterBottom>
            Unable to load movies at this time.
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={3}>
            Please verify your network connection and try again.
          </Typography>
          <Button component={Link} to="/" variant="contained" color="error" startIcon={<ArrowBack />}>
            Back to Home
          </Button>
        </Box>
      )}

      {/* Empty State - AdSense rule: NO ADS ON EMPTY SCREENS */}
      {!isFetching && !error && (!data?.results || data.results.length === 0) && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          py={10}
          px={3}
          textAlign="center"
          sx={{ backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: 3, border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <SearchOff sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" fontWeight={700} gutterBottom>
            No movies found matching your criteria.
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ maxWidth: '500px', mb: 3 }}>
            We couldn’t find any movies matching your search query. Try checking your spelling, searching by an alternative title, or browse our curated categories.
          </Typography>
          <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                dispatch(selectGenreOrCategory('popular'));
                dispatch(searchMovie(''));
              }}
            >
              Browse Popular Movies
            </Button>
            <Button component={Link} to="/genres" variant="outlined" color="inherit">
              Explore Genres
            </Button>
          </Box>
        </Box>
      )}

      {/* Movies Grid */}
      {!isFetching && data?.results?.length > 0 && (
        <>
          <MovieList movies={data} numberOfMovies={20} />
          <Pagination currentPage={page} setPage={setPage} totalPages={data?.total_pages || 1} />

          {/* AdSense Placement below movie list */}
          <AdBanner slot="movies-list-bottom" showAds={true} />
        </>
      )}
    </div>
  );
}

export default Movies;
