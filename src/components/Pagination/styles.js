import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5rem'
  },
  button: {
    margin: '30px 2px',
  },
  pageNumber: {
    margin: '0 30px !important',
    color: theme.palette.text.primary,
  },
}));
