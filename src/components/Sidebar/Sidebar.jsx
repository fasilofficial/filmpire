import React, { useEffect } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  Typography,
} from '@mui/material';
import {
  MenuBook,
  InfoOutlined,
  HelpOutline,
  ContactMailOutlined,
  CategoryOutlined,
  Whatshot,
  StarBorder,
  Upcoming,
  LocalCafe,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import genreIcons from '../../assets/genres';

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const categories = [
  { label: 'Popular', value: 'popular', path: '/popular', icon: <Whatshot fontSize="small" /> },
  { label: 'Top Rated', value: 'top_rated', path: '/top-rated', icon: <StarBorder fontSize="small" /> },
  { label: 'Upcoming', value: 'upcoming', path: '/upcoming', icon: <Upcoming fontSize="small" /> },
];

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const { data, isFetching } = useGetGenresQuery();
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);

  useEffect(() => {
    if (setMobileOpen) {
      setMobileOpen(false);
    }
  }, [location.pathname, genreIdOrCategoryName, setMobileOpen]);

  const isCurrentCategory = (val, path) => location.pathname === path || (location.pathname === '/' && genreIdOrCategoryName === val);

  const isCurrentGenre = (id) => location.pathname === `/genre/${id}` || (location.pathname === '/' && Number(genreIdOrCategoryName) === Number(id));

  return (
    <>
      <Link to="/" className={classes.imageLink} aria-label="FilmPire Home">
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="FilmPire Logo"
        />
      </Link>
      <Divider />

      {/* Main Discover Categories */}
      <List>
        <ListSubheader component="div">Discover</ListSubheader>
        {categories.map(({ label, value, path, icon }) => {
          const active = isCurrentCategory(value, path);
          return (
            <Link key={value} className={classes.links} to={path}>
              <ListItem
                button
                selected={active}
                onClick={() => dispatch(selectGenreOrCategory(value))}
              >
                <ListItemIcon sx={{ minWidth: 38, color: active ? 'error.main' : 'inherit' }}>
                  {genreIcons[label.toLowerCase()] ? (
                    <img
                      src={genreIcons[label.toLowerCase()]}
                      className={classes.genreImages}
                      height={24}
                      alt=""
                    />
                  ) : (
                    icon
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    fontWeight: active ? 700 : 500,
                    color: active ? 'error.main' : 'inherit',
                    fontSize: '0.92rem',
                  }}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
      <Divider />

      {/* Movie Genres */}
      <List>
        <Box display="flex" justifyContent="space-between" alignItems="center" pr={2}>
          <ListSubheader component="div">Movie Genres</ListSubheader>
          <Typography
            component={Link}
            to="/genres"
            variant="caption"
            sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'error.main' } }}
          >
            All
          </Typography>
        </Box>
        {isFetching ? (
          <Box display="flex" justifyContent="center" py={2}>
            <CircularProgress size="2rem" />
          </Box>
        ) : (
          data?.genres?.map(({ name, id }) => {
            const active = isCurrentGenre(id);
            const iconKey = name.toLowerCase();
            return (
              <Link key={id} className={classes.links} to={`/genre/${id}`}>
                <ListItem
                  button
                  selected={active}
                  onClick={() => dispatch(selectGenreOrCategory(id))}
                >
                  <ListItemIcon sx={{ minWidth: 38 }}>
                    {genreIcons[iconKey] ? (
                      <img
                        src={genreIcons[iconKey]}
                        className={classes.genreImages}
                        height={24}
                        alt=""
                      />
                    ) : (
                      <CategoryOutlined fontSize="small" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={name}
                    primaryTypographyProps={{
                      fontWeight: active ? 700 : 400,
                      color: active ? 'error.main' : 'inherit',
                      fontSize: '0.88rem',
                    }}
                  />
                </ListItem>
              </Link>
            );
          })
        )}
      </List>
      <Divider />

      {/* Editorial & Information */}
      <List>
        <ListSubheader component="div">Editorial & Info</ListSubheader>
        <Link className={classes.links} to="/guides">
          <ListItem button selected={location.pathname.startsWith('/guides')}>
            <ListItemIcon sx={{ minWidth: 38 }}>
              <MenuBook fontSize="small" color={location.pathname.startsWith('/guides') ? 'error' : 'inherit'} />
            </ListItemIcon>
            <ListItemText
              primary="Movie Guides"
              primaryTypographyProps={{
                fontWeight: location.pathname.startsWith('/guides') ? 700 : 500,
                color: location.pathname.startsWith('/guides') ? 'error.main' : 'inherit',
                fontSize: '0.9rem',
              }}
            />
          </ListItem>
        </Link>
        <Link className={classes.links} to="/about">
          <ListItem button selected={location.pathname === '/about'}>
            <ListItemIcon sx={{ minWidth: 38 }}>
              <InfoOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="About FilmPire" primaryTypographyProps={{ fontSize: '0.88rem' }} />
          </ListItem>
        </Link>
        <Link className={classes.links} to="/faq">
          <ListItem button selected={location.pathname === '/faq'}>
            <ListItemIcon sx={{ minWidth: 38 }}>
              <HelpOutline fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="FAQ" primaryTypographyProps={{ fontSize: '0.88rem' }} />
          </ListItem>
        </Link>
        <Link className={classes.links} to="/contact">
          <ListItem button selected={location.pathname === '/contact'}>
            <ListItemIcon sx={{ minWidth: 38 }}>
              <ContactMailOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Contact Us" primaryTypographyProps={{ fontSize: '0.88rem' }} />
          </ListItem>
        </Link>
        <ListItem
          button
          component="a"
          href="https://buymeacoffee.com/mfasilofficial"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            mt: 1,
            mx: 1,
            borderRadius: '8px',
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 221, 0, 0.08)' : 'rgba(255, 221, 0, 0.15)',
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 221, 0, 0.18)' : 'rgba(255, 221, 0, 0.28)',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            <LocalCafe fontSize="small" sx={{ color: '#FFDD00' }} />
          </ListItemIcon>
          <ListItemText
            primary="Buy Me a Coffee"
            primaryTypographyProps={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: theme.palette.mode === 'dark' ? '#FFDD00' : '#b45309',
            }}
          />
        </ListItem>
      </List>
    </>
  );
}

export default Sidebar;
