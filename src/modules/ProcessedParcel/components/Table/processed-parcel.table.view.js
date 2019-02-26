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
  TableFooter,
} from '@material-ui/core';
import { styles } from './styles';
import moment from 'moment';

class ProcessedParcelTable extends React.Component {
  static _subTotal(list) {
    return list.map(i => i.area).reduce((total, l) => total + l, 0);
  }

  render() {
    const { classes, list } = this.props;

    const areaSubtotal = ProcessedParcelTable._subTotal(list);

    return (
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Name of the Parcel</TableCell>
                  <TableCell>Culture</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Name of the Tractor</TableCell>
                  <TableCell align="right">Area</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {list.map(row => (
                  <TableRow key={row.id} className={classes.row}>
                    <TableCell>{row.parcelName}</TableCell>
                    <TableCell>{row.culture}</TableCell>
                    <TableCell>
                      {moment(row.date).format('YYYY-MMM-DD')}
                    </TableCell>
                    <TableCell>{row.tractorName}</TableCell>
                    <TableCell align="right">{row.area}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell align="right">{areaSubtotal}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export const ProcessedParcelTableView = withStyles(styles)(
  ProcessedParcelTable,
);
