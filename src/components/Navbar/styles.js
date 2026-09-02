import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.mode === 'dark' ? '#0f172a !important' : '#ffffff !important',
    color: `${theme.palette.text.primary} !important`,
    borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
  },
  toolbar: {
    height: '70px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: drawerWidth,
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: `${theme.palette.mode === 'dark' ? '#0f172a' : '#ffffff'} !important`,
    borderRight: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'} !important`,
  },
  navButton: {
    textTransform: 'none',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#e50914 !important',
    },
  },
  linkButton: {
    textTransform: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));
