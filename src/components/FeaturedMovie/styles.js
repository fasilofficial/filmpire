import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  featuredCardContainer: {
    marginBottom: '32px',
    display: 'flex',
    justifyContent: 'center',
    height: '460px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      height: '420px',
    },
  },
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    position: 'relative',
    border: 'none',
  },
  cardRoot: {
    position: 'relative',
  },
  cardMedia: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  overlayGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(15, 23, 42, 0.2) 100%)',
    zIndex: 1,
  },
  cardContent: {
    color: '#fff',
    width: '65%',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      width: '85%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '0 !important',
    },
  },
  cardContentRoot: {
    position: 'relative',
    backgroundColor: 'transparent',
    padding: '0 !important',
  },
  heroTitle: {
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '2.5rem',
    lineHeight: 1.15,
    marginBottom: '12px',
    textShadow: '0 2px 8px rgba(0,0,0,0.6)',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  heroOverview: {
    color: 'rgba(255, 255, 255, 0.88)',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    lineHeight: 1.6,
    fontSize: '1rem',
    textShadow: '0 1px 4px rgba(0,0,0,0.8)',
    [theme.breakpoints.down('sm')]: {
      WebkitLineClamp: 2,
      fontSize: '0.9rem',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(8px)',
  },
  modalContent: {
    width: '80%',
    maxWidth: '900px',
    height: '500px',
    backgroundColor: '#000',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 24px 48px rgba(0,0,0,0.8)',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      height: '300px',
    },
  },
  videoFrame: {
    width: '100%',
    height: '100%',
  },
}));
