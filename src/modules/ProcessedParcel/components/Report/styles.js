export const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    [theme.breakpoints.up('md')]: {
      minWidth: 700,
    },
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
});
