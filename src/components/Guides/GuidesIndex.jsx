import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Chip, TextField, InputAdornment } from '@mui/material';
import { MenuBook, Search as SearchIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import SEO from '../SEO/SEO';
import AdBanner from '../AdSense/AdBanner';
import { GUIDES_DATA } from '../../data/guidesData';

const CATEGORIES = ['All', 'Movie Discovery', 'Film Education', 'Curated Recommendations', 'Genre Spotlight', 'Film Discovery & Tools'];

export default function GuidesIndex() {
  const classes = useStyles();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filterQuery, setFilterQuery] = useState('');

  const filteredGuides = GUIDES_DATA.filter((guide) => {
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    const matchesQuery =
      filterQuery === '' ||
      guide.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      guide.excerpt.toLowerCase().includes(filterQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className={classes.container}>
      <SEO
        title="Movie Guides & Cinema Editorial - Expert Film Analysis & Recommendations"
        description="Explore FilmPire's original editorial film guides. In-depth articles covering movie discovery strategies, genre breakdowns, rating mechanics, and curated film recommendations."
        canonicalUrl="/guides"
      />

      {/* Header */}
      <Box className={classes.header}>
        <Box display="flex" alignItems="center" gap={1.5} mb={1}>
          <MenuBook color="error" fontSize="large" />
          <Typography variant="h3" component="h1" fontWeight={800} className={classes.h1}>
            Movie Guides & Editorial
          </Typography>
        </Box>
        <Typography variant="body1" color="textSecondary" className={classes.introText}>
          Thoughtful, comprehensive cinema journalism crafted by the FilmPire editorial team. Designed to help you overcome streaming decision fatigue, understand film grammar, and discover extraordinary cinema.
        </Typography>

        {/* Filter Controls */}
        <Box display="flex" flexWrap="wrap" gap={2} mt={3} justifyContent="space-between" alignItems="center">
          <Box display="flex" flexWrap="wrap" gap={1}>
            {CATEGORIES.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                clickable
                color={selectedCategory === cat ? 'error' : 'default'}
                variant={selectedCategory === cat ? 'filled' : 'outlined'}
                onClick={() => setSelectedCategory(cat)}
                size="small"
                sx={{ borderRadius: 1.5, fontWeight: 600 }}
              />
            ))}
          </Box>

          <TextField
            placeholder="Search guides..."
            size="small"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{ width: { xs: '100%', sm: '260px' } }}
          />
        </Box>
      </Box>

      {/* Guides Grid */}
      <Grid container spacing={3}>
        {filteredGuides.map((guide) => (
          <Grid item xs={12} md={6} key={guide.slug}>
            <Card className={classes.guideCard} component={Link} to={`/guides/${guide.slug}`}>
              <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1.5}>
                  <Chip label={guide.category} size="small" color="primary" sx={{ fontSize: '0.75rem', fontWeight: 600 }} />
                  <Typography variant="caption" color="textSecondary">
                    {guide.readingTime} &bull; {guide.publishedDate}
                  </Typography>
                </Box>

                <Typography variant="h5" component="h2" fontWeight={800} gutterBottom className={classes.guideTitle}>
                  {guide.title}
                </Typography>

                <Typography variant="body2" color="textSecondary" sx={{ flexGrow: 1, mb: 2, lineHeight: 1.6 }}>
                  {guide.excerpt}
                </Typography>

                <Box display="flex" alignItems="center" justifyContent="space-between" mt="auto" pt={1}>
                  <Typography variant="caption" color="textSecondary" fontWeight={600}>
                    By {guide.author}
                  </Typography>
                  <Typography variant="body2" color="error.main" fontWeight={700}>
                    Read Article &rarr;
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Bottom AdBanner */}
      <AdBanner slot="guides-index-bottom" showAds={true} />
    </div>
  );
}
