import React from 'react';
import {
  withStyles,
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { styles } from './styles';

class TractorTable extends React.Component {
  render() {
    const { classes, list } = this.props;
    return (
      <Grid container xs={12}>
        <Grid xs={12}>
          <Paper className={classes.paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {list.map(row => (
                  <TableRow key={row.id} className={classes.row}>
                    <TableCell>{row.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export const TractorTableView = withStyles(styles)(TractorTable);
