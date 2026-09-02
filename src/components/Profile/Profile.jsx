import React, { useEffect } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { ExitToApp, BookmarkBorder, MovieCreation, AccountCircle } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useGetListQuery } from '../../services/TMDB';
import { RatedCards } from '../index';
import SEO from '../SEO/SEO';
import { fetchToken } from '../../utils/index';

function Profile() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const sessionId = localStorage.getItem('session_id');

  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery(
    { listName: 'favorite/movies', accountId: user?.id, sessionId, page: 1 },
    { skip: !user?.id || !sessionId }
  );
  const { data: watchlistMovies, refetch: refetchWatchlisted } = useGetListQuery(
    { listName: 'watchlist/movies', accountId: user?.id, sessionId, page: 1 },
    { skip: !user?.id || !sessionId }
  );

  useEffect(() => {
    if (refetchFavorites) refetchFavorites();
    if (refetchWatchlisted) refetchWatchlisted();
  }, [refetchFavorites, refetchWatchlisted]);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  if (!isAuthenticated && !sessionId) {
    return (
      <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
        <SEO title="My Library & Watchlist" noindex={true} />
        <BookmarkBorder sx={{ fontSize: 72, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h4" fontWeight={800} gutterBottom>
          Log in to View Your Library
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '500px', mx: 'auto', mb: 3 }}>
          Connect your TMDB account to save your favorite movies, manage your personal cinema queue, and access your watchlist from any device.
        </Typography>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={fetchToken}
          startIcon={<AccountCircle />}
          sx={{ textTransform: 'none', fontWeight: 700, px: 4, borderRadius: 2 }}
        >
          Authenticate with TMDB
        </Button>
      </Container>
    );
  }

  const hasFavorites = favoriteMovies?.results?.length > 0;
  const hasWatchlist = watchlistMovies?.results?.length > 0;

  return (
    <Box sx={{ maxWidth: '1280px', margin: '0 auto', padding: '0 0.5rem' }}>
      <SEO title={`${user.username || 'User'} Library - FilmPire`} noindex={true} />

      <Box display="flex" justifyContent="space-between" alignItems="center" pb={3} mb={4} borderBottom="1px solid rgba(255, 255, 255, 0.08)">
        <Box>
          <Typography variant="h4" fontWeight={800} gutterBottom>
            My Cinema Library
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Manage your personal watchlist and saved favorite titles.
          </Typography>
        </Box>
        <Button color="inherit" variant="outlined" size="small" onClick={logout} endIcon={<ExitToApp />}>
          Log Out
        </Button>
      </Box>

      {!hasFavorites && !hasWatchlist ? (
        <Box
          textAlign="center"
          py={8}
          px={3}
          sx={{ backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: 3, border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <MovieCreation sx={{ fontSize: 56, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Your Watchlist Is Empty
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ maxWidth: '480px', mx: 'auto', mb: 3 }}>
            Save movies to your watchlist or favorites when browsing so you can easily find something worth watching later.
          </Typography>
          <Button component={Link} to="/movies" variant="contained" color="error" sx={{ textTransform: 'none', fontWeight: 700 }}>
            Explore Popular Movies
          </Button>
        </Box>
      ) : (
        <Box>
          {hasFavorites && (
            <Box mb={6}>
              <RatedCards title="Favorite Movies" movies={favoriteMovies} />
            </Box>
          )}
          {hasWatchlist && (
            <Box mb={6}>
              <RatedCards title="My Watchlist" movies={watchlistMovies} />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

export default Profile;
