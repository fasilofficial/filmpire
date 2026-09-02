import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Divider,
  Card,
  CardContent,
  Grid,
  Button,
  Breadcrumbs,
} from '@mui/material';
import {
  CalendarToday,
  AccessTime,
  Person,
  ArrowBack,
  BookmarkBorder,
} from '@mui/icons-material';
import { useParams, Link } from 'react-router-dom';

import useStyles from './styles';
import SEO from '../SEO/SEO';
import AdBanner from '../AdSense/AdBanner';
import { getGuideBySlug, GUIDES_DATA } from '../../data/guidesData';

export default function GuideDetail() {
  const classes = useStyles();
  const { slug } = useParams();
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return (
      <Box textAlign="center" py={12}>
        <Typography variant="h4" gutterBottom>
          Guide Not Found
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={3}>
          The movie guide you requested does not exist or may have been moved.
        </Typography>
        <Button component={Link} to="/guides" variant="contained" color="error" startIcon={<ArrowBack />}>
          Back to Guides Directory
        </Button>
      </Box>
    );
  }

  // Related Guides
  const relatedGuides = guide.relatedGuideSlugs
    ? guide.relatedGuideSlugs.map((s) => getGuideBySlug(s)).filter(Boolean)
    : GUIDES_DATA.filter((g) => g.slug !== guide.slug).slice(0, 3);

  // Article JSON-LD Structured Data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedDate,
    dateModified: guide.publishedDate,
    author: {
      '@type': 'Organization',
      name: guide.author,
      url: 'https://filmpire-page.vercel.app/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FilmPire',
      logo: {
        '@type': 'ImageObject',
        url: 'https://filmpire-page.vercel.app/logo.png',
      },
    },
    mainEntityOfPage: `https://filmpire-page.vercel.app/guides/${guide.slug}`,
  };

  return (
    <article className={classes.articleContainer}>
      <SEO
        title={guide.title}
        description={guide.excerpt}
        canonicalUrl={`/guides/${guide.slug}`}
        schema={articleSchema}
        schemaId={`article-${guide.slug}`}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Typography component={Link} to="/" color="inherit" sx={{ textDecoration: 'none', fontSize: '0.85rem' }}>
          Home
        </Typography>
        <Typography component={Link} to="/guides" color="inherit" sx={{ textDecoration: 'none', fontSize: '0.85rem' }}>
          Guides
        </Typography>
        <Typography color="textPrimary" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>
          {guide.category}
        </Typography>
      </Breadcrumbs>

      {/* Article Header */}
      <header className={classes.articleHeader}>
        <Chip label={guide.category} color="error" size="small" sx={{ fontWeight: 700, mb: 2 }} />
        <Typography variant="h3" component="h1" fontWeight={800} className={classes.articleTitle}>
          {guide.title}
        </Typography>
        <Typography variant="h6" color="textSecondary" fontWeight={400} className={classes.articleSubtitle}>
          {guide.subtitle}
        </Typography>

        {/* Metadata Strip */}
        <Box display="flex" flexWrap="wrap" gap={3} alignItems="center" my={3} color="text.secondary">
          <Box display="flex" alignItems="center" gap={0.5}>
            <Person fontSize="small" />
            <Typography variant="caption" fontWeight={600}>{guide.author}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <CalendarToday fontSize="small" />
            <Typography variant="caption">{guide.publishedDate}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <AccessTime fontSize="small" />
            <Typography variant="caption">{guide.readingTime}</Typography>
          </Box>
        </Box>
      </header>

      {/* Key Takeaways Box */}
      {guide.keyTakeaways?.length > 0 && (
        <Box className={classes.keyTakeaways}>
          <Box display="flex" alignItems="center" gap={1} mb={1.5}>
            <BookmarkBorder color="error" />
            <Typography variant="subtitle1" fontWeight={800} color="error.main" textTransform="uppercase" letterSpacing={0.5}>
              Key Insights & Summary
            </Typography>
          </Box>
          <ul className={classes.takeawaysList}>
            {guide.keyTakeaways.map((takeaway, idx) => (
              <li key={idx}>
                <Typography variant="body2" color="textPrimary" sx={{ lineHeight: 1.65 }}>
                  {takeaway}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      )}

      {/* Main Content Sections with Natural Formatting */}
      <div className={classes.articleBody}>
        {guide.sections.map((section, idx) => (
          <section key={idx} className={classes.sectionBlock}>
            <Typography variant="h4" component="h2" fontWeight={800} gutterBottom className={classes.sectionHeading}>
              {section.heading}
            </Typography>
            {section.content.split('\n\n').map((paragraph, pIdx) => (
              <Typography key={pIdx} variant="body1" color="textSecondary" paragraph className={classes.bodyParagraph}>
                {paragraph}
              </Typography>
            ))}

            {/* Natural Mid-Article Ad Placement (between section 1 and 2) */}
            {idx === 1 && <AdBanner slot="guide-detail-inline-banner" showAds={true} />}
          </section>
        ))}
      </div>

      {/* Curated Film Recommendations */}
      {guide.recommendedFilms?.length > 0 && (
        <Box my={5}>
          <Typography variant="h4" component="h2" fontWeight={800} gutterBottom className={classes.sectionHeading}>
            Essential Viewing Recommendations
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={3}>
            Films that exemplify the storytelling principles explored in this guide.
          </Typography>

          <Grid container spacing={2}>
            {guide.recommendedFilms.map((film, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card className={classes.filmRecCard}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="baseline" mb={1}>
                      <Typography variant="h6" fontWeight={800} color="textPrimary">
                        {film.title}
                      </Typography>
                      <Chip label={film.year} size="small" variant="outlined" sx={{ fontSize: '0.72rem' }} />
                    </Box>
                    <Chip label={film.genre} size="small" color="primary" sx={{ fontSize: '0.7rem', mb: 1.5 }} />
                    <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.6 }}>
                      {film.reason}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Article FAQ */}
      {guide.faq?.length > 0 && (
        <Box my={5}>
          <Typography variant="h4" component="h2" fontWeight={800} gutterBottom className={classes.sectionHeading}>
            Frequently Asked Questions
          </Typography>
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
            {guide.faq.map((item, idx) => (
              <Box key={idx} p={2.5} sx={{ backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.08)' }}>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                  {item.q}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.65 }}>
                  {item.a}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      <Divider sx={{ my: 5, opacity: 0.15 }} />

      {/* Internal Cross-Linking to Discovery & Genres */}
      <Box p={3} sx={{ backgroundColor: 'rgba(229, 9, 20, 0.05)', borderRadius: 3, border: '1px solid rgba(229, 9, 20, 0.2)', textAlign: 'center' }}>
        <Typography variant="h6" fontWeight={800} gutterBottom>
          Ready to put these insights into practice?
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ maxWidth: '600px', mx: 'auto', mb: 2 }}>
          Explore our complete catalog of popular titles, top-rated masterpieces, and comprehensive genre directories.
        </Typography>
        <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
          <Button component={Link} to="/movies" variant="contained" color="error" sx={{ textTransform: 'none', fontWeight: 700 }}>
            Browse Movies
          </Button>
          <Button component={Link} to="/genres" variant="outlined" color="inherit" sx={{ textTransform: 'none' }}>
            Explore All Genres
          </Button>
        </Box>
      </Box>

      {/* Related Guides Carousel / Grid */}
      {relatedGuides.length > 0 && (
        <Box my={6}>
          <Typography variant="h5" component="h3" fontWeight={800} gutterBottom>
            Related Cinema Guides
          </Typography>
          <Grid container spacing={3} mt={0.5}>
            {relatedGuides.map((rel) => (
              <Grid item xs={12} sm={4} key={rel.slug}>
                <Card className={classes.relatedGuideCard} component={Link} to={`/guides/${rel.slug}`}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Chip label={rel.category} size="small" color="primary" sx={{ fontSize: '0.7rem', mb: 1 }} />
                    <Typography variant="subtitle1" fontWeight={700} gutterBottom className={classes.relatedGuideTitle}>
                      {rel.title}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {rel.readingTime} &bull; Read &rarr;
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Bottom AdBanner */}
      <AdBanner slot="guide-detail-bottom-banner" showAds={true} />
    </article>
  );
}
