import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  homeContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
  section: {
    marginTop: '3.5rem',
    marginBottom: '2rem',
  },
  sectionTitle: {
    fontSize: '1.85rem',
    letterSpacing: '-0.5px',
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.45rem',
    },
  },
  genreCard: {
    textDecoration: 'none',
    borderRadius: '12px',
    transition: 'all 0.25s ease',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.palette.mode === 'dark' ? '0 12px 24px rgba(0,0,0,0.5)' : '0 12px 24px rgba(0,0,0,0.08)',
      borderColor: '#e50914',
    },
  },
  genreCardIcon: {
    filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
    transition: 'transform 0.2s ease',
  },
  guideCard: {
    textDecoration: 'none',
    borderRadius: '14px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.25s ease',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.palette.mode === 'dark' ? '0 12px 28px rgba(0,0,0,0.5)' : '0 12px 28px rgba(0,0,0,0.1)',
      borderColor: '#e50914',
    },
  },
  guideTitle: {
    color: `${theme.palette.text.primary} !important`,
    fontSize: '1.15rem',
    lineHeight: 1.35,
  },
  accordion: {
    backgroundColor: `${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff'} !important`,
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    borderRadius: '10px !important',
    marginBottom: '10px',
    '&:before': {
      display: 'none',
    },
  },
  ctaBox: {
    marginTop: '4.5rem',
    marginBottom: '2rem',
    padding: '3rem 2rem',
    borderRadius: '16px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
  },
}));
