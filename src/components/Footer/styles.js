import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.mode === 'dark' ? '#0b0f19' : '#f8fafc',
    padding: '3rem 1.5rem 1.5rem',
    marginTop: '5rem',
    borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
  },
  brandTitle: {
    fontWeight: 800,
    textDecoration: 'none',
    color: theme.palette.text.primary,
    letterSpacing: '-0.5px',
  },
  brandAccent: {
    color: '#e50914',
  },
  columnTitle: {
    color: theme.palette.text.primary,
    fontSize: '0.95rem',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    marginBottom: '1rem',
  },
  footerLink: {
    color: `${theme.palette.text.secondary} !important`,
    fontSize: '0.88rem',
    textDecoration: 'none !important',
    transition: 'color 0.2s ease, transform 0.2s ease',
    '&:hover': {
      color: `${theme.palette.mode === 'dark' ? '#ffffff' : '#e50914'} !important`,
      transform: 'translateX(3px)',
    },
  },
}));
