import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  mainWrapper: {
    display: 'flex',
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: '5.5rem 1.5rem 2rem',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    overflowX: 'hidden',
    [theme.breakpoints.down('md')]: {
      padding: '7rem 1rem 2rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '7.5rem 0.75rem 2rem',
    },
  },
  toolbar: {
    height: '10px',
  },
}));
