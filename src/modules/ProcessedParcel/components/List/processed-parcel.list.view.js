import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import { styles } from './styles';
import { ProcessedParcelTableView } from '../Table/processed-parcel.table.view';
import { FabLink } from '../../../../shared/components/FabLink/fab-link.view';

class ProcessedParcelList extends React.Component {
  componentDidMount() {
    this.props.processedParcelFetchRequestAction();
  }

  render() {
    const { classes, processedParcelReducer } = this.props;
    return (
      <div className={classes.root}>
        <Grid container xs={12}>
          <Grid xs={12}>
            <h1>Processed Parcels</h1>
          </Grid>
          <Grid xs={12}>
            <FabLink to="/admin/processed-parcel/add" />
          </Grid>
          <ProcessedParcelTableView list={processedParcelReducer.list} />
        </Grid>
      </div>
    );
  }
}

export const ProcessedParcelListView = withStyles(styles)(ProcessedParcelList);
