import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movie: {
    padding: '12px',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    borderRadius: '12px',
    padding: '8px',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
      transform: 'translateY(-4px)',
    },
    '&:focus-visible': {
      outline: '2px solid #e50914',
      outlineOffset: '2px',
    },
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '220px',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: theme.palette.mode === 'dark' ? '0 8px 24px rgba(0,0,0,0.5)' : '0 8px 20px rgba(0,0,0,0.12)',
  },
  image: {
    width: '100%',
    height: '310px',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
  yearBadge: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    backdropFilter: 'blur(4px)',
    color: '#ffffff',
    fontSize: '0.72rem',
    fontWeight: 700,
    padding: '2px 6px',
    borderRadius: '4px',
    letterSpacing: '0.5px',
  },
  title: {
    color: `${theme.palette.text.primary} !important`,
    fontSize: '0.95rem',
    fontWeight: 600,
    width: '100%',
    maxWidth: '210px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginTop: '10px',
    textAlign: 'center',
  },
}));
