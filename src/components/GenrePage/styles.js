import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 0.5rem',
  },
  header: {
    marginBottom: '2.5rem',
    paddingBottom: '1.5rem',
    borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
  },
  h1: {
    fontSize: '2.2rem',
    letterSpacing: '-0.5px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6rem',
    },
  },
  introText: {
    maxWidth: '800px',
    fontSize: '1.05rem',
    lineHeight: 1.7,
  },
  genreIcon: {
    filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
  },
  sectionTitle: {
    fontSize: '1.75rem',
    letterSpacing: '-0.5px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  editorialCard: {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    borderRadius: '16px',
    padding: '2.5rem',
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  guideBannerCard: {
    textDecoration: 'none',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(229, 9, 20, 0.05)' : '#fff5f5',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(229, 9, 20, 0.25)' : 'rgba(229, 9, 20, 0.2)'}`,
    borderRadius: '14px',
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: '#e50914',
      transform: 'translateY(-2px)',
    },
  },
  relatedGenreCard: {
    textDecoration: 'none',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    borderRadius: '12px',
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: '#e50914',
      transform: 'translateY(-3px)',
    },
  },
  genreDirectoryCard: {
    textDecoration: 'none',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    borderRadius: '14px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.25s ease',
    '&:hover': {
      borderColor: '#e50914',
      transform: 'translateY(-4px)',
      boxShadow: theme.palette.mode === 'dark' ? '0 12px 28px rgba(0,0,0,0.5)' : '0 12px 28px rgba(0,0,0,0.08)',
    },
  },
  genreName: {
    color: `${theme.palette.text.primary} !important`,
    fontSize: '1.25rem',
  },
}));
