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
    maxWidth: '800px',
    fontSize: '1.05rem',
    lineHeight: 1.7,
  },
  guideCard: {
    textDecoration: 'none',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    borderRadius: '14px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.25s ease',
    '&:hover': {
      borderColor: '#e50914',
      transform: 'translateY(-4px)',
      boxShadow: theme.palette.mode === 'dark' ? '0 12px 28px rgba(0,0,0,0.5)' : '0 12px 28px rgba(0,0,0,0.08)',
    },
  },
  guideTitle: {
    color: `${theme.palette.text.primary} !important`,
    fontSize: '1.25rem',
    lineHeight: 1.35,
  },
  articleContainer: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  articleHeader: {
    marginBottom: '2rem',
  },
  articleTitle: {
    fontSize: '2.6rem',
    lineHeight: 1.2,
    letterSpacing: '-0.5px',
    color: theme.palette.text.primary,
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.85rem',
    },
  },
  articleSubtitle: {
    fontSize: '1.2rem',
    lineHeight: 1.5,
    marginBottom: '1rem',
  },
  keyTakeaways: {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(229, 9, 20, 0.06)' : '#fff5f5',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(229, 9, 20, 0.25)' : 'rgba(229, 9, 20, 0.2)'}`,
    borderRadius: '12px',
    padding: '1.75rem',
    marginBottom: '3rem',
  },
  takeawaysList: {
    margin: 0,
    paddingLeft: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  articleBody: {
    marginTop: '2rem',
  },
  sectionBlock: {
    marginBottom: '2.5rem',
  },
  sectionHeading: {
    fontSize: '1.65rem',
    letterSpacing: '-0.4px',
    marginTop: '1.5rem',
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },
  bodyParagraph: {
    fontSize: '1.05rem',
    lineHeight: 1.8,
    marginBottom: '1.25rem',
  },
  filmRecCard: {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    borderRadius: '12px',
    height: '100%',
  },
  relatedGuideCard: {
    textDecoration: 'none',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    borderRadius: '12px',
    height: '100%',
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: '#e50914',
      transform: 'translateY(-3px)',
    },
  },
  relatedGuideTitle: {
    color: `${theme.palette.text.primary} !important`,
    fontSize: '0.95rem',
    lineHeight: 1.4,
  },
}));
