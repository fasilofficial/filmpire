import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '0 1rem 4rem',
  },
  header: {
    marginBottom: '2.5rem',
    paddingBottom: '1.5rem',
    borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
  },
  h1: {
    fontSize: '2.5rem',
    fontWeight: 800,
    letterSpacing: '-0.5px',
    marginBottom: '0.75rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.85rem',
    },
  },
  introText: {
    fontSize: '1.1rem',
    lineHeight: 1.7,
  },
  section: {
    marginBottom: '3rem',
  },
  sectionHeading: {
    fontSize: '1.5rem',
    fontWeight: 800,
    letterSpacing: '-0.3px',
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },
  paragraph: {
    fontSize: '1.02rem',
    lineHeight: 1.8,
    marginBottom: '1.2rem',
  },
  cardBlock: {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    borderRadius: '12px',
    padding: '2rem',
    marginBottom: '2rem',
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
}));
