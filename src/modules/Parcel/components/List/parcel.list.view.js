import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import { styles } from './styles';
import { ParcelTableView } from '../Table/processed-parcel.table.view';
import { FabLink } from '../../../../shared/components/FabLink/fab-link.view';

class ParcelList extends React.Component {
  componentDidMount() {
    this.props.parcelFetchRequestAction();
  }

  render() {
    const { classes, parcelReducer } = this.props;
    return (
      <div className={classes.root}>
        <Grid container xs={12}>
          <Grid xs={12}>
            <h1>Parcels</h1>
          </Grid>
          <Grid xs={12}>
            <FabLink to="/admin/parcel/add" />
          </Grid>
          <ParcelTableView list={parcelReducer.list} />
        </Grid>
      </div>
    );
  }
}

export const ParcelListView = withStyles(styles)(ParcelList);
