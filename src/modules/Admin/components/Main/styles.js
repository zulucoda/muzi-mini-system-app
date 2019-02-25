const drawerWidth = 256;

export const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  icon: {
    marginLeft: -12,
    marginRight: 20,
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 200,
      flexShrink: 0,
    },
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  mainContent: {
    flex: 1,
    padding: '48px 36px 0',
    background: '#eaeff1',
  },
  drawerPaper: {
    width: drawerWidth,
  },
});
