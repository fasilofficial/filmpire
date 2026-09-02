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
    maxWidth: '750px',
    fontSize: '1.05rem',
    lineHeight: 1.6,
  },
}));
