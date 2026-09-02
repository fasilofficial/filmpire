import { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken } from '../utils/index';
import { selectGenreOrCategory, searchMovie } from '../features/currentGenreOrCategory';

function useAlan() {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!process.env.REACT_APP_ALAN_SDK_KEY) return;

    try {
      alanBtn({
        key: process.env.REACT_APP_ALAN_SDK_KEY,
        onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
          if (command === 'chooseGenre' && genres) {
            const foundGenre = genres.find((g) => g.name.toLowerCase() === genreOrCategory?.toLowerCase());
            if (foundGenre) {
              navigate(`/genre/${foundGenre.id}`);
              dispatch(selectGenreOrCategory(foundGenre.id));
            } else {
              const category = genreOrCategory?.startsWith('top') ? 'top_rated' : genreOrCategory;
              navigate(`/${category === 'top_rated' ? 'top-rated' : category}`);
              dispatch(selectGenreOrCategory(category));
            }
          } else if (command === 'changeMode') {
            if (mode === 'light') {
              setMode('light');
            } else {
              setMode('dark');
            }
          } else if (command === 'login') {
            fetchToken();
          } else if (command === 'logout') {
            localStorage.clear();
            navigate('/');
          } else if (command === 'search' && query) {
            dispatch(searchMovie(query));
            navigate(`/movies?search=${encodeURIComponent(query)}`);
          }
        },
      });
    } catch (e) {
      // Ignore Alan initialization errors
    }
  }, [dispatch, navigate, setMode]);
}

export default useAlan;
