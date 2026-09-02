import React, { useState, useEffect, useContext } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  Box,
  useMediaQuery,
} from '@mui/material';
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { Search, Sidebar } from '../index';
import { setUser } from '../../features/auth';
import { fetchToken, createSessionId, moviesApi } from '../../utils/index';
import { ColorModeContext } from '../../utils/ToggleColorMode';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Movies', path: '/movies' },
  { label: 'Genres', path: '/genres' },
  { label: 'Top Rated', path: '/top-rated' },
  { label: 'Upcoming', path: '/upcoming' },
  { label: 'Guides', path: '/guides' },
];

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:960px)');
  const theme = useTheme();
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [mobileOpen, setMobileOpen] = useState(false);

  const colorMode = useContext(ColorModeContext);

  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  useEffect(() => {
    let isMounted = true;
    const logInUser = async () => {
      if (token) {
        try {
          if (sessionIdFromLocalStorage) {
            const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
            if (isMounted) dispatch(setUser(userData));
          } else {
            const sessionId = await createSessionId();
            if (sessionId) {
              const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
              if (isMounted) dispatch(setUser(userData));
            }
          }
        } catch (err) {
          // Token or session expired
        }
      }
    };

    logInUser();
    return () => {
      isMounted = false;
    };
  }, [token, sessionIdFromLocalStorage, dispatch]);

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} elevation={1}>
        <Toolbar className={classes.toolbar}>
          <Box display="flex" alignItems="center">
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                aria-label="Open navigation menu"
                onClick={() => setMobileOpen((prev) => !prev)}
                className={classes.menuButton}
              >
                <Menu />
              </IconButton>
            )}

            {/* Desktop Top Nav Bar Items */}
            {!isMobile && (
              <Box display="flex" alignItems="center" gap={0.5} ml={1}>
                {navLinks.map(({ label, path }) => {
                  const isActive = path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
                  return (
                    <Button
                      key={path}
                      component={Link}
                      to={path}
                      className={classes.navButton}
                      sx={{
                        color: isActive ? 'error.main' : 'text.primary',
                        fontWeight: isActive ? 700 : 500,
                        borderBottom: isActive ? '2px solid #e50914' : '2px solid transparent',
                        borderRadius: 0,
                        px: 1.5,
                      }}
                    >
                      {label}
                    </Button>
                  );
                })}
              </Box>
            )}
          </Box>

          <Box display="flex" alignItems="center" gap={1.5}>
            {!isMobile && <Search />}

            <IconButton
              color="inherit"
              aria-label="Toggle dark/light theme"
              onClick={colorMode.toggleColorMode}
            >
              {theme.palette.mode === 'dark' ? <Brightness7 fontSize="small" /> : <Brightness4 fontSize="small" />}
            </IconButton>

            <div>
              {!isAuthenticated ? (
                <Button color="inherit" onClick={fetchToken} sx={{ textTransform: 'none', fontWeight: 600 }}>
                  Login &nbsp; <AccountCircle fontSize="small" />
                </Button>
              ) : (
                <Button
                  color="inherit"
                  component={Link}
                  to={`/profile/${user.id}`}
                  className={classes.linkButton}
                >
                  {!isMobile && <span style={{ marginRight: '6px' }}>My Library</span>}
                  <Avatar
                    style={{ width: 30, height: 30 }}
                    alt={user.username || 'Profile'}
                    src={user?.avatar?.tmdb?.avatar?.avatar_path ? `https://www.themoviedb.org/t/p/w64_and_h64_face${user.avatar.tmdb.avatar.avatar_path}` : undefined}
                  />
                </Button>
              )}
            </div>
          </Box>
        </Toolbar>

        {/* Mobile Search strip if on mobile */}
        {isMobile && (
          <Box px={2} pb={1.5}>
            <Search />
          </Box>
        )}
      </AppBar>

      <nav className={classes.drawer} aria-label="FilmPire navigation sidebar">
        {isMobile ? (
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        ) : (
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        )}
      </nav>
    </>
  );
}

export default Navbar;
