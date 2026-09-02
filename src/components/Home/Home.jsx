import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import {
  ExpandMore,
  ArrowForward,
  MenuBook,
  Whatshot,
  Star,
  Upcoming,
  MovieFilter,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import { MovieList, FeaturedMovie } from '../index';
import SEO from '../SEO/SEO';
import AdBanner from '../AdSense/AdBanner';
import { useGetMoviesQuery } from '../../services/TMDB';
import { ALL_GENRES_LIST } from '../../data/genreDetails';
import { GUIDES_DATA } from '../../data/guidesData';
import genreIcons from '../../assets/genres';

const HOME_FAQS = [
  {
    q: 'How does FilmPire discover and curate movie information?',
    a: 'FilmPire integrates with The Movie Database (TMDB) API to retrieve verified film metadata, release dates, high-resolution artwork, and cast filmographies. Our editorial team pairs this data with original analysis, genre guides, and viewing recommendations.',
  },
  {
    q: 'How are movie ratings calculated on FilmPire?',
    a: 'Ratings reflect weighted audience scores submitted by millions of global cinema enthusiasts via TMDB. Our editorial guides also provide context on why audience scores and critical metascores frequently diverge.',
  },
  {
    q: 'Can I watch full movies directly on FilmPire?',
    a: 'No. FilmPire is strictly a movie discovery, educational, and cataloging platform. We do not host, stream, or distribute full copyrighted movie files. We provide official studio trailers via YouTube and direct links to official film websites and IMDb.',
  },
  {
    q: 'How do I add movies to my personal watchlist or favorites?',
    a: 'Click the "Login" button in the navigation bar to authenticate with your TMDB account. Once authenticated, click the "Watchlist" or "Favorite" button on any movie detail page to save it to your library.',
  },
  {
    q: 'How can I discover movies by genre or mood?',
    a: 'Explore our dedicated "Genres" directory or browse our original editorial guides under "Guides" to discover curated selections tailored for family nights, high-octane action, or mind-bending science fiction.',
  },
];

function Home() {
  const classes = useStyles();
  const { data: popularData, isFetching: loadingPopular } = useGetMoviesQuery({
    genreIdOrCategoryName: 'popular',
    page: 1,
  });
  const { data: topRatedData, isFetching: loadingTopRated } = useGetMoviesQuery({
    genreIdOrCategoryName: 'top_rated',
    page: 1,
  });
  const { data: upcomingData, isFetching: loadingUpcoming } = useGetMoviesQuery({
    genreIdOrCategoryName: 'upcoming',
    page: 1,
  });

  const featuredMovie = popularData?.results?.[0];
  const popularPreview = popularData?.results?.slice(1, 11) || [];
  const topRatedPreview = topRatedData?.results?.slice(0, 5) || [];
  const upcomingPreview = upcomingData?.results?.slice(0, 5) || [];

  return (
    <div className={classes.homeContainer}>
      <SEO
        title="Discover Movies, Explore Genres & Cinema Guides"
        description="FilmPire is an authoritative movie discovery website featuring trending titles, top-rated cinema, upcoming releases, in-depth film guides, and genre deep-dives."
        canonicalUrl="/"
      />

      {/* Hero Featured Movie */}
      {loadingPopular ? (
        <Box display="flex" justifyContent="center" py={8}>
          <CircularProgress size="4rem" />
        </Box>
      ) : (
        featuredMovie && <FeaturedMovie movie={featuredMovie} />
      )}

      {/* Popular Movies Section */}
      <section className={classes.section}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-end" mb={2} flexWrap="wrap">
          <Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Whatshot color="error" />
              <Typography variant="h4" component="h2" fontWeight={800} className={classes.sectionTitle}>
                Popular Movies
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5, maxWidth: '650px' }}>
              Explore the films currently capturing audience attention worldwide. Discover trending box office hits and buzzworthy streaming premieres.
            </Typography>
          </Box>
          <Button
            component={Link}
            to="/popular"
            endIcon={<ArrowForward />}
            color="error"
            sx={{ textTransform: 'none', fontWeight: 700 }}
          >
            View All Popular
          </Button>
        </Box>

        <MovieList movies={{ results: popularPreview }} numberOfMovies={10} />
      </section>

      {/* Mid-Page Editorial Ad Placement */}
      <AdBanner slot="home-mid-banner" showAds={true} />

      {/* Top Rated Section */}
      <section className={classes.section}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-end" mb={2} flexWrap="wrap">
          <Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Star sx={{ color: '#f59e0b' }} />
              <Typography variant="h4" component="h2" fontWeight={800} className={classes.sectionTitle}>
                Highest Rated of All Time
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5, maxWidth: '650px' }}>
              Timeless cinema celebrated by global audiences. Films with enduring artistic merit, profound storytelling, and exceptional craftsmanship.
            </Typography>
          </Box>
          <Button
            component={Link}
            to="/top-rated"
            endIcon={<ArrowForward />}
            color="error"
            sx={{ textTransform: 'none', fontWeight: 700 }}
          >
            View Top Rated
          </Button>
        </Box>

        {loadingTopRated ? (
          <CircularProgress size="2rem" />
        ) : (
          <MovieList movies={{ results: topRatedPreview }} numberOfMovies={5} />
        )}
      </section>

      {/* Upcoming Releases Section */}
      <section className={classes.section}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-end" mb={2} flexWrap="wrap">
          <Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Upcoming color="info" />
              <Typography variant="h4" component="h2" fontWeight={800} className={classes.sectionTitle}>
                Upcoming Releases
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5, maxWidth: '650px' }}>
              Anticipated theatrical spectacles and digital premieres arriving in coming weeks. Plan your upcoming cinema calendar.
            </Typography>
          </Box>
          <Button
            component={Link}
            to="/upcoming"
            endIcon={<ArrowForward />}
            color="error"
            sx={{ textTransform: 'none', fontWeight: 700 }}
          >
            View All Upcoming
          </Button>
        </Box>

        {loadingUpcoming ? (
          <CircularProgress size="2rem" />
        ) : (
          <MovieList movies={{ results: upcomingPreview }} numberOfMovies={5} />
        )}
      </section>

      {/* Explore by Genre Showcase */}
      <section className={classes.section}>
        <Box mb={3}>
          <Box display="flex" alignItems="center" gap={1}>
            <MovieFilter color="error" />
            <Typography variant="h4" component="h2" fontWeight={800} className={classes.sectionTitle}>
              Explore by Genre
            </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
            Navigate films by emotional tone, narrative conventions, and storytelling style across 19 distinct film categories.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {ALL_GENRES_LIST.slice(0, 12).map((genre) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={genre.id}>
              <Card
                component={Link}
                to={`/genre/${genre.id}`}
                className={classes.genreCard}
              >
                <CardContent sx={{ p: 2, textAlign: 'center' }}>
                  {genreIcons[genre.name.toLowerCase()] && (
                    <img
                      src={genreIcons[genre.name.toLowerCase()]}
                      alt=""
                      className={classes.genreCardIcon}
                      height={36}
                    />
                  )}
                  <Typography variant="subtitle1" fontWeight={700} sx={{ mt: 1 }}>
                    {genre.name}
                  </Typography>
                  <Typography variant="caption" color="textSecondary" sx={{ display: 'block', mt: 0.5, lineHeight: 1.3 }}>
                    {genre.subgenres?.[0]} &bull; {genre.subgenres?.[1]}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" mt={3}>
          <Button
            component={Link}
            to="/genres"
            variant="outlined"
            color="inherit"
            endIcon={<ArrowForward />}
            sx={{ textTransform: 'none', fontWeight: 600, borderRadius: 2 }}
          >
            Browse All 19 Film Genres
          </Button>
        </Box>
      </section>

      {/* Featured Editorial Guides Section */}
      <section className={classes.section}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-end" mb={3} flexWrap="wrap">
          <Box>
            <Box display="flex" alignItems="center" gap={1}>
              <MenuBook color="error" />
              <Typography variant="h4" component="h2" fontWeight={800} className={classes.sectionTitle}>
                Movie Guides & Editorial
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
              Expert film analysis, genre explanations, curated cinema recommendations, and practical viewing advice.
            </Typography>
          </Box>
          <Button
            component={Link}
            to="/guides"
            endIcon={<ArrowForward />}
            color="error"
            sx={{ textTransform: 'none', fontWeight: 700 }}
          >
            View All Guides ({GUIDES_DATA.length})
          </Button>
        </Box>

        <Grid container spacing={3}>
          {GUIDES_DATA.slice(0, 3).map((guide) => (
            <Grid item xs={12} md={4} key={guide.slug}>
              <Card className={classes.guideCard} component={Link} to={`/guides/${guide.slug}`}>
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1.5}>
                    <Chip label={guide.category} size="small" color="primary" sx={{ fontSize: '0.75rem', fontWeight: 600 }} />
                    <Typography variant="caption" color="textSecondary">
                      {guide.readingTime}
                    </Typography>
                  </Box>
                  <Typography variant="h6" component="h3" fontWeight={700} gutterBottom className={classes.guideTitle}>
                    {guide.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2, flexGrow: 1, lineHeight: 1.6 }}>
                    {guide.excerpt}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1} color="error.main" fontWeight={700} fontSize="0.85rem">
                    Read Full Guide &rarr;
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Frequently Asked Questions */}
      <section className={classes.section}>
        <Box mb={3}>
          <Typography variant="h4" component="h2" fontWeight={800} className={classes.sectionTitle}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
            Common questions about FilmPire, our movie data sources, ratings, and discovery features.
          </Typography>
        </Box>

        {HOME_FAQS.map((faq, idx) => (
          <Accordion key={idx} className={classes.accordion} elevation={0}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="subtitle1" fontWeight={700}>
                {faq.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.7 }}>
                {faq.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </section>

      {/* Final Call to Action */}
      <Box className={classes.ctaBox}>
        <Typography variant="h4" component="h2" fontWeight={800} gutterBottom>
          Find Your Next Great Film
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', mb: 3, opacity: 0.9 }}>
          Explore movies by genre, ratings, popularity, or release date. Curate your personal watchlist and dive into editorial guides.
        </Typography>
        <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
          <Button
            component={Link}
            to="/movies"
            variant="contained"
            color="error"
            size="large"
            sx={{ textTransform: 'none', fontWeight: 700, px: 4, borderRadius: 2 }}
          >
            Explore All Movies
          </Button>
          <Button
            component={Link}
            to="/guides"
            variant="outlined"
            sx={{
              textTransform: 'none',
              fontWeight: 700,
              px: 4,
              borderRadius: 2,
              color: '#ffffff',
              borderColor: 'rgba(255,255,255,0.6)',
              '&:hover': { borderColor: '#ffffff', backgroundColor: 'rgba(255,255,255,0.1)' },
            }}
          >
            Read Movie Guides
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
