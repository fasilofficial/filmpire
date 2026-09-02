import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Button,
} from '@mui/material';
import { ArrowBack, MenuBook } from '@mui/icons-material';
import { useParams, Link } from 'react-router-dom';

import useStyles from './styles';
import { MovieList, Pagination } from '../index';
import SEO from '../SEO/SEO';
import AdBanner from '../AdSense/AdBanner';
import { useGetMoviesQuery } from '../../services/TMDB';
import { getGenreById, getGenreBySlug, ALL_GENRES_LIST } from '../../data/genreDetails';
import { getGuideBySlug } from '../../data/guidesData';
import genreIcons from '../../assets/genres';

export default function GenrePage() {
  const classes = useStyles();
  const { genreId, genreSlug } = useParams();
  const [page, setPage] = useState(1);

  // Match genre by either ID or slug
  const genre = getGenreById(genreId) || getGenreBySlug(genreSlug) || getGenreBySlug(genreId);
  const numericId = genre?.id || Number(genreId) || 28;

  const { data, isFetching, error } = useGetMoviesQuery({
    genreIdOrCategoryName: numericId,
    page,
  });

  const linkedGuide = genre?.guideSlug ? getGuideBySlug(genre.guideSlug) : null;
  const relatedGenres = genre?.relatedGenreIds
    ? genre.relatedGenreIds.map((id) => getGenreById(id)).filter(Boolean)
    : ALL_GENRES_LIST.filter((g) => g.id !== numericId).slice(0, 4);

  const iconSrc = genre?.name ? genreIcons[genre.name.toLowerCase()] : null;

  return (
    <div className={classes.container}>
      <SEO
        title={`${genre?.name || 'Genre'} Movies - Best Films & Recommendations`}
        description={`Discover top ${genre?.name || ''} movies on FilmPire. Read our comprehensive genre overview, key storytelling characteristics, ratings, and curated recommendations.`}
        canonicalUrl={`/genre/${numericId}`}
      />

      {/* Genre Header */}
      <Box className={classes.header}>
        <Box display="flex" alignItems="center" gap={2} mb={1.5}>
          {iconSrc && <img src={iconSrc} alt="" height={44} className={classes.genreIcon} />}
          <Box>
            <Typography variant="h3" component="h1" fontWeight={800} className={classes.h1}>
              {genre?.name || 'Movie'} Movies
            </Typography>
            {genre?.tagline && (
              <Typography variant="subtitle1" color="error.main" fontWeight={600} sx={{ mt: 0.5 }}>
                {genre.tagline}
              </Typography>
            )}
          </Box>
        </Box>

        <Typography variant="body1" color="textSecondary" className={classes.introText}>
          {genre?.description ||
            `Explore our curated selection of ${genre?.name || ''} cinema. Browse popular hits, top-rated crowd favorites, and acclaimed hidden gems.`}
        </Typography>

        {/* Subgenres / Themes Chips */}
        {genre?.subgenres?.length > 0 && (
          <Box display="flex" flexWrap="wrap" gap={1} mt={2.5} alignItems="center">
            <Typography variant="caption" color="textSecondary" fontWeight={600}>
              Key Subgenres:
            </Typography>
            {genre.subgenres.map((sub, i) => (
              <Chip key={i} label={sub} size="small" variant="outlined" sx={{ borderRadius: 1.5, fontSize: '0.78rem' }} />
            ))}
          </Box>
        )}
      </Box>

      {/* Movie Grid Section */}
      <Box my={4}>
        <Typography variant="h4" component="h2" fontWeight={800} gutterBottom className={classes.sectionTitle}>
          Popular {genre?.name || ''} Films
        </Typography>

        {isFetching && (
          <Box display="flex" justifyContent="center" py={8}>
            <CircularProgress size="4rem" />
          </Box>
        )}

        {error && (
          <Box textAlign="center" py={6}>
            <Typography variant="h6" color="error" gutterBottom>
              Failed to load movies for this genre.
            </Typography>
            <Button component={Link} to="/genres" variant="outlined" startIcon={<ArrowBack />} sx={{ mt: 1 }}>
              Browse All Genres
            </Button>
          </Box>
        )}

        {!isFetching && data?.results?.length > 0 && (
          <>
            <MovieList movies={data} numberOfMovies={20} />
            <Pagination currentPage={page} setPage={setPage} totalPages={data?.total_pages || 1} />
          </>
        )}
      </Box>

      {/* Mid-Page Editorial Ad */}
      <AdBanner slot="genre-middle-banner" showAds={true} />

      {/* Editorial Depth: About This Genre & Key Characteristics */}
      {genre && (
        <Box className={classes.editorialCard}>
          <Typography variant="h4" component="h2" fontWeight={800} gutterBottom className={classes.sectionTitle}>
            About {genre.name} Cinema
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph sx={{ lineHeight: 1.8 }}>
            {genre.description}
          </Typography>

          {genre.characteristics?.length > 0 && (
            <Box mt={3}>
              <Typography variant="h6" component="h3" fontWeight={700} gutterBottom>
                Hallmarks & Storytelling Characteristics
              </Typography>
              <Grid container spacing={2} mt={0.5}>
                {genre.characteristics.map((char, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box display="flex" gap={1.5} alignItems="flex-start">
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: '#e50914',
                          mt: 1,
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.6 }}>
                        {char}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {genre.viewingTips && (
            <Box mt={3} p={2} sx={{ backgroundColor: 'rgba(229, 9, 20, 0.08)', borderRadius: 2, borderLeft: '4px solid #e50914' }}>
              <Typography variant="subtitle2" fontWeight={700} color="error.main" gutterBottom>
                Viewing & Atmosphere Recommendation
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {genre.viewingTips}
              </Typography>
            </Box>
          )}
        </Box>
      )}

      {/* Related Editorial Guide Spotlight */}
      {linkedGuide && (
        <Box my={5}>
          <Typography variant="h5" component="h3" fontWeight={700} gutterBottom>
            Recommended Reading for {genre?.name} Fans
          </Typography>
          <Card className={classes.guideBannerCard} component={Link} to={`/guides/${linkedGuide.slug}`}>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <MenuBook color="error" fontSize="small" />
                <Typography variant="caption" color="error.main" fontWeight={700}>
                  FEATURED EDITORIAL GUIDE &bull; {linkedGuide.readingTime}
                </Typography>
              </Box>
              <Typography variant="h6" component="h4" fontWeight={700} gutterBottom>
                {linkedGuide.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1.5, maxWidth: '800px' }}>
                {linkedGuide.excerpt}
              </Typography>
              <Typography variant="body2" color="error.main" fontWeight={700}>
                Read Guide &rarr;
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* Related Genres Navigation */}
      {relatedGenres?.length > 0 && (
        <Box my={5}>
          <Typography variant="h5" component="h3" fontWeight={700} gutterBottom>
            Related Genres You Might Enjoy
          </Typography>
          <Grid container spacing={2} mt={0.5}>
            {relatedGenres.map((rel) => (
              <Grid item xs={6} sm={3} key={rel.id}>
                <Card component={Link} to={`/genre/${rel.id}`} className={classes.relatedGenreCard}>
                  <CardContent sx={{ p: 2, textAlign: 'center' }}>
                    {genreIcons[rel.name.toLowerCase()] && (
                      <img
                        src={genreIcons[rel.name.toLowerCase()]}
                        alt=""
                        height={32}
                        className={classes.genreIcon}
                      />
                    )}
                    <Typography variant="subtitle1" fontWeight={700} sx={{ mt: 1 }}>
                      {rel.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
}
