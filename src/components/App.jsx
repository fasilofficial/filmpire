import React, { useRef, useEffect } from 'react';
import { CssBaseline, Box } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';

import useStyles from './styles';
import useAlan from './Alan';

import {
  Home,
  Movies,
  CategoryPage,
  GenrePage,
  GenresList,
  Actors,
  MovieInfo,
  Navbar,
  Profile,
  GuidesIndex,
  GuideDetail,
  About,
  Contact,
  FAQ,
  Privacy,
  Terms,
  Copyright,
  NotFound,
  Footer,
} from './index';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, search]);

  return null;
}

function App() {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ScrollToTop />
      <Navbar />

      <div className={classes.mainWrapper}>
        <main className={classes.content}>
          <Box sx={{ flexGrow: 1 }}>
            <div className={classes.toolbar} />
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<Home />} />
              <Route path="/approved" element={<Movies />} />

              {/* Discovery & Listings */}
              <Route path="/movies" element={<Movies />} />
              <Route path="/popular" element={<CategoryPage categoryType="popular" />} />
              <Route path="/top-rated" element={<CategoryPage categoryType="top_rated" />} />
              <Route path="/upcoming" element={<CategoryPage categoryType="upcoming" />} />

              {/* Genre Directories & Pages */}
              <Route path="/genres" element={<GenresList />} />
              <Route path="/genre/:genreId" element={<GenrePage />} />
              <Route path="/genre/:genreId/:genreSlug" element={<GenrePage />} />

              {/* Movie & Actor Details */}
              <Route path="/movie/:id" element={<MovieInfo />} />
              <Route path="/actors/:id" element={<Actors />} />

              {/* Profile & Library */}
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/watchlist" element={<Profile />} />
              <Route path="/favorites" element={<Profile />} />

              {/* Editorial Guides */}
              <Route path="/guides" element={<GuidesIndex />} />
              <Route path="/guides/:slug" element={<GuideDetail />} />

              {/* Trust, Support & Compliance Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/copyright" element={<Copyright />} />
              <Route path="/dmca" element={<Copyright />} />

              {/* 404 Error Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>

          {/* Sticky Authoritative Site Footer */}
          <Footer />
        </main>
      </div>

      <div ref={alanBtnContainer} />
    </div>
  );
}

export default App;
