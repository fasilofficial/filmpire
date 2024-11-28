import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px 0',
  },
  button: {
    minWidth: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    margin: '0 5px',
    boxShadow: 'none',
    '&:disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.action.disabled,
    },
  },
  pageNumbers: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  page: {
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '14px',
    backgroundColor: '#f5f5f5',
    color: theme.palette.text.primary,
    fontWeight: 400,
  },
  activePage: {
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '14px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
  },
}));
