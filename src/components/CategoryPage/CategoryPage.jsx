import React, { useState } from 'react';
import { Box, Typography, CircularProgress, Button, Chip } from '@mui/material';
import { ArrowBack, Whatshot, Star, Upcoming } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import { MovieList, Pagination } from '../index';
import SEO from '../SEO/SEO';
import AdBanner from '../AdSense/AdBanner';
import { useGetMoviesQuery } from '../../services/TMDB';
import { ALL_GENRES_LIST } from '../../data/genreDetails';

const CATEGORY_CONFIG = {
  popular: {
    categoryKey: 'popular',
    title: 'Popular Movies to Watch Now',
    h1: 'Popular Movies',
    description:
      'Explore movies currently attracting attention and discover what audiences are watching worldwide. Browse the collection to find trending blockbusters, streaming hits, and critical favorites.',
    icon: <Whatshot color="error" fontSize="large" />,
    metaTitle: 'Popular Movies to Watch Now - Trending Films',
    metaDesc:
      'Discover the most popular movies trending right now. Explore current box office hits, audience favorites, and new releases with ratings and trailers on FilmPire.',
  },
  top_rated: {
    categoryKey: 'top_rated',
    title: 'Top Rated Movies of All Time',
    h1: 'Top Rated Movies',
    description:
      'Browse highly rated movies based on verified audience scores. Use this collection to discover films that have earned strong viewer acclaim for storytelling, direction, and acting.',
    icon: <Star sx={{ color: '#f59e0b' }} fontSize="large" />,
    metaTitle: 'Top Rated Movies of All Time - Highest Audience Scores',
    metaDesc:
      'Explore the all-time highest-rated movies according to verified audience and viewer ratings. Find cinematic masterpieces, acclaimed classics, and top crowd-pleasers.',
  },
  upcoming: {
    categoryKey: 'upcoming',
    title: 'Upcoming Movies & Anticipated Releases',
    h1: 'Upcoming Movies',
    description:
      'Stay ahead of the cinema calendar. Browse upcoming theatrical premieres and streaming releases scheduled to debut over the coming weeks and months.',
    icon: <Upcoming color="info" fontSize="large" />,
    metaTitle: 'Upcoming Movies & Release Dates - Anticipated Films',
    metaDesc:
      'Check out upcoming movie releases, debut dates, official trailers, and cast details for the most anticipated films arriving soon in theaters and streaming.',
  },
};

export default function CategoryPage({ categoryType = 'popular' }) {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const config = CATEGORY_CONFIG[categoryType] || CATEGORY_CONFIG.popular;

  const { data, isFetching, error } = useGetMoviesQuery({
    genreIdOrCategoryName: config.categoryKey,
    page,
  });

  return (
    <div className={classes.container}>
      <SEO
        title={config.metaTitle}
        description={config.metaDesc}
        canonicalUrl={`/${categoryType.replace('_', '-')}`}
      />

      {/* Header Section */}
      <Box className={classes.header}>
        <Box display="flex" alignItems="center" gap={1.5} mb={1}>
          {config.icon}
          <Typography variant="h3" component="h1" fontWeight={800} className={classes.h1}>
            {config.h1}
          </Typography>
        </Box>
        <Typography variant="body1" color="textSecondary" className={classes.introText}>
          {config.description}
        </Typography>

        {/* Quick Genre Filter Chips */}
        <Box display="flex" flexWrap="wrap" gap={1} mt={2.5} alignItems="center">
          <Typography variant="caption" color="textSecondary" fontWeight={600} mr={0.5}>
            Filter by Genre:
          </Typography>
          {ALL_GENRES_LIST.slice(0, 8).map((genre) => (
            <Chip
              key={genre.id}
              label={genre.name}
              component={Link}
              to={`/genre/${genre.id}`}
              clickable
              size="small"
              variant="outlined"
              sx={{ borderRadius: 1.5, fontSize: '0.78rem' }}
            />
          ))}
          <Chip
            label="All Genres →"
            component={Link}
            to="/genres"
            clickable
            size="small"
            color="primary"
            sx={{ borderRadius: 1.5, fontSize: '0.78rem' }}
          />
        </Box>
      </Box>

      {/* Loading State */}
      {isFetching && (
        <Box display="flex" justifyContent="center" py={10}>
          <CircularProgress size="4rem" />
        </Box>
      )}

      {/* Error State */}
      {error && (
        <Box textAlign="center" py={8}>
          <Typography variant="h5" color="error" gutterBottom>
            Unable to load movies right now.
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={3}>
            Please check your internet connection or try again in a moment.
          </Typography>
          <Button component={Link} to="/" variant="contained" color="error" startIcon={<ArrowBack />}>
            Back to Home
          </Button>
        </Box>
      )}

      {/* Movie Grid */}
      {!isFetching && data?.results?.length > 0 && (
        <>
          <MovieList movies={data} numberOfMovies={20} />
          <Pagination currentPage={page} setPage={setPage} totalPages={data?.total_pages || 1} />

          {/* Ad Placement below grid */}
          <AdBanner slot="category-bottom-banner" showAds={true} />
        </>
      )}

      {/* Empty State */}
      {!isFetching && !error && (!data?.results || data.results.length === 0) && (
        <Box textAlign="center" py={8}>
          <Typography variant="h5" gutterBottom>
            No movies currently found in this category.
          </Typography>
          <Button component={Link} to="/movies" variant="contained" color="error" sx={{ mt: 2 }}>
            Explore All Movies
          </Button>
        </Box>
      )}
    </div>
  );
}
