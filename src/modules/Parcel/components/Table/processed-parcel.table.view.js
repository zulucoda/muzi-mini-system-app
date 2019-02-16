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

class ParcelTable extends React.Component {
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
                  <TableCell>Culture</TableCell>
                  <TableCell align="right">Area</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {list.map(row => (
                  <TableRow key={row.id} className={classes.row}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.culture}</TableCell>
                    <TableCell align="right">{row.area}</TableCell>
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

export const ParcelTableView = withStyles(styles)(ParcelTable);
