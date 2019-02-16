export const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    height: '100vh',
    backgroundColor: '#08AEEA',
    backgroundImage: 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)',
  },
  container: {
    maxWidth: '650px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '300px',
      margin: '10px',
      padding: '10px',
    },
  },
  paper: {
    backgroundColor: '#FFE53B',
    backgroundImage: 'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)',
  },
});
