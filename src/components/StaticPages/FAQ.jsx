import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import { ExpandMore, HelpOutline, ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import SEO from '../SEO/SEO';

const ALL_FAQS = [
  {
    category: 'General & Purpose',
    items: [
      {
        q: 'What is FilmPire?',
        a: 'FilmPire is an online cinema discovery, education, and cataloging platform. It helps movie lovers discover trending releases, explore 19 distinct storytelling genres, read in-depth editorial guides, and track personal watchlists.',
      },
      {
        q: 'Can I stream or download full movies on FilmPire?',
        a: 'No. FilmPire does not host, upload, stream, or distribute full copyrighted movie files. We provide verified film metadata, official studio trailers via YouTube, and direct links to official film homepages and IMDb.',
      },
      {
        q: 'Is FilmPire free to use?',
        a: 'Yes. All discovery features, genre directories, and editorial film guides on FilmPire are completely free to access.',
      },
    ],
  },
  {
    category: 'Movie Discovery & Navigation',
    items: [
      {
        q: 'How can I search for movies on FilmPire?',
        a: 'Type any movie title or keyword into the search bar at the top of the page and press Enter. The platform queries millions of indexed film records and returns relevant results matching your search terms.',
      },
      {
        q: 'How are movies categorized on the site?',
        a: 'Movies are organized across three primary discovery collections: Popular (current trending titles), Top Rated (films with the highest weighted audience scores), and Upcoming (releases scheduled for future theatrical or digital debuts). Additionally, all films are indexed across 19 standard TMDB genres.',
      },
      {
        q: 'How do I browse movies by genre?',
        a: 'You can navigate to our "Genres" directory from the top navigation bar or left sidebar. Clicking on any genre (such as Action, Sci-Fi, Mystery, or Animation) opens a dedicated page with an editorial overview, storytelling hallmarks, and a complete filtered movie grid.',
      },
      {
        q: 'How do I find upcoming movie releases?',
        a: 'Visit the "Upcoming" category page to see films scheduled for debut in coming weeks and months, complete with verified release dates, official trailers, and cast information.',
      },
    ],
  },
  {
    category: 'Ratings, Data & Editorial',
    items: [
      {
        q: 'How are movie ratings displayed and calculated?',
        a: 'Movie scores displayed on FilmPire reflect verified 1–10 weighted average ratings submitted by global cinema enthusiasts via The Movie Database (TMDB). A Bayesian weighting algorithm ensures scores are fair and resilient against vote manipulation.',
      },
      {
        q: 'Where do movie details and cast information come from?',
        a: 'All structured film details, release dates, runtime measurements, cast filmographies, and posters originate from The Movie Database (TMDB) API. Official trailers are embedded directly from official studio YouTube channels.',
      },
      {
        q: 'What are the FilmPire Editorial Guides?',
        a: 'Under the "Guides" section, our editorial team produces original, in-depth articles exploring cinema history, genre evolution, rating mechanics, and curated film recommendations. These articles are written to provide genuine educational context and overcome streaming decision fatigue.',
      },
    ],
  },
  {
    category: 'Watchlist, Accounts & Support',
    items: [
      {
        q: 'How does the Watchlist and Favorites feature work?',
        a: 'Click the "Login" button in the navigation bar to authenticate securely with your TMDB account. Once logged in, you can click "Watchlist" or "Favorite" on any movie page. Your saved library syncs directly with your profile across devices.',
      },
      {
        q: 'How can I report incorrect movie information?',
        a: 'If you spot an inaccurate release date, missing cast credit, or typo, please visit our Contact page and select "Report Incorrect Movie Information". Because our data syncs with TMDB, you can also contribute corrections directly to the global TMDB database.',
      },
      {
        q: 'How can I report a copyright or DMCA concern?',
        a: 'FilmPire strictly abides by intellectual property laws. If you believe any asset on our platform infringes on your copyright, please consult our Copyright & DMCA Notice page or send a notice through our Contact form.',
      },
    ],
  },
];

export default function FAQ() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SEO
        title="Frequently Asked Questions (FAQ) - FilmPire Movie Discovery"
        description="Find answers to common questions about FilmPire: how search and ratings work, how to use watchlists, our TMDB movie data sources, and copyright policies."
        canonicalUrl="/faq"
      />

      <Box className={classes.header}>
        <Box display="flex" alignItems="center" gap={1.5} mb={1}>
          <HelpOutline color="error" fontSize="large" />
          <Typography variant="h3" component="h1" className={classes.h1}>
            Frequently Asked Questions
          </Typography>
        </Box>
        <Typography variant="body1" color="textSecondary" className={classes.introText}>
          Everything you need to know about navigating FilmPire, understanding movie ratings, discovering cinema by genre, and managing your personal film watchlist.
        </Typography>
      </Box>

      {ALL_FAQS.map((group, gIdx) => (
        <section key={gIdx} className={classes.section}>
          <Typography variant="h5" component="h2" className={classes.sectionHeading}>
            {group.category}
          </Typography>
          {group.items.map((faq, iIdx) => (
            <Accordion key={iIdx} className={classes.accordion} elevation={0}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="subtitle1" fontWeight={700}>
                  {faq.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.75 }}>
                  {faq.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </section>
      ))}

      <Box textAlign="center" mt={6} p={4} sx={{ backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: 3, border: '1px solid rgba(255,255,255,0.08)' }}>
        <Typography variant="h5" fontWeight={800} gutterBottom>
          Still have questions?
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ maxWidth: '500px', mx: 'auto', mb: 2.5 }}>
          Our team is here to assist with technical issues, feedback, or editorial questions.
        </Typography>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          color="error"
          endIcon={<ArrowForward />}
          sx={{ textTransform: 'none', fontWeight: 700 }}
        >
          Contact Our Team
        </Button>
      </Box>
    </div>
  );
}
