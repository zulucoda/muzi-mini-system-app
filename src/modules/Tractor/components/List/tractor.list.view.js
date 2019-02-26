import React from 'react';
import { withStyles, Grid } from '@material-ui/core';

import { styles } from './styles';
import { TractorTableView } from '../Table/processed-parcel.table.view';
import { FabLink } from '../../../../shared/components/FabLink/fab-link.view';

class TractorList extends React.Component {
  componentDidMount() {
    this.props.tractorFetchRequestAction();
  }

  render() {
    const { classes, tractorReducer } = this.props;
    return (
      <div className={classes.root}>
        <Grid container xs={12}>
          <Grid xs={12}>
            <h2>Tractors</h2>
          </Grid>
          <Grid xs={12}>
            <FabLink to="/admin/tractor/add" />
          </Grid>
          <TractorTableView list={tractorReducer.list} />
        </Grid>
      </div>
    );
  }
}

export const TractorListView = withStyles(styles)(TractorList);
