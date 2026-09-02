import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import useStyles from './styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

function Search() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const [query, setQuery] = useState(searchQuery || '');

  useEffect(() => {
    // If URL has search query parameter, sync with it
    const searchParams = new URLSearchParams(location.search);
    const q = searchParams.get('search');
    if (q !== null) {
      setQuery((prev) => {
        if (prev !== q) {
          dispatch(searchMovie(q));
          return q;
        }
        return prev;
      });
    }
  }, [location.search, dispatch]);

  const handleSearch = () => {
    const trimmed = query.trim();
    dispatch(searchMovie(trimmed));
    if (location.pathname !== '/movies') {
      navigate(`/movies?search=${encodeURIComponent(trimmed)}`);
    } else {
      navigate(`/movies?search=${encodeURIComponent(trimmed)}`, { replace: true });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setQuery('');
    dispatch(searchMovie(''));
    if (location.pathname === '/movies') {
      navigate('/movies', { replace: true });
    }
  };

  return (
    <div className={classes.searchContainer}>
      <TextField
        placeholder="Search movies by title..."
        onKeyDown={handleKeyDown}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        inputProps={{ 'aria-label': 'Search movies by title' }}
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <IconButton size="small" onClick={handleSearch} aria-label="Submit search" edge="start">
                <SearchIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: query ? (
            <InputAdornment position="end">
              <IconButton size="small" onClick={handleClear} aria-label="Clear search" edge="end">
                <ClearIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
      />
    </div>
  );
}

export default Search;
