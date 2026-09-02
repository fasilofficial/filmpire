import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  containerSpaceAround: {
    margin: '20px 0 !important',
  },
  poster: {
    borderRadius: '16px',
    boxShadow: theme.palette.mode === 'dark' ? '0 16px 36px rgba(0, 0, 0, 0.6)' : '0 16px 32px rgba(0, 0, 0, 0.15)',
    width: '100%',
    maxWidth: '340px',
    height: 'auto',
    objectFit: 'cover',
  },
  movieTitle: {
    fontSize: '2.5rem',
    letterSpacing: '-0.5px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  metaCard: {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    borderRadius: '10px',
    height: '100%',
  },
  castCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '8px',
    borderRadius: '10px',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
      transform: 'translateY(-2px)',
    },
  },
  castImage: {
    width: '100%',
    maxWidth: '100px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
  editorialSection: {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(229, 9, 20, 0.04)' : '#fff5f5',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(229, 9, 20, 0.2)' : 'rgba(229, 9, 20, 0.15)'}`,
    borderRadius: '14px',
    padding: '2rem',
  },
  accordion: {
    backgroundColor: `${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff'} !important`,
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    borderRadius: '10px !important',
    marginBottom: '8px',
    '&:before': {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(8px)',
  },
  modalContent: {
    width: '85%',
    maxWidth: '900px',
    height: '520px',
    backgroundColor: '#000000',
    borderRadius: '14px',
    overflow: 'hidden',
    boxShadow: '0 24px 48px rgba(0, 0, 0, 0.8)',
    [theme.breakpoints.down('sm')]: {
      width: '96%',
      height: '320px',
    },
  },
  video: {
    width: '100%',
    height: '100%',
  },
}));
