import React from 'react';
import {
  TextField,
  withStyles,
  Grid,
  Button,
  Paper,
  Typography,
} from '@material-ui/core';
import { styles } from './styles';
import { Link } from 'react-router-dom';
import { ProcessedParcelTableView } from '../Table/processed-parcel.table.view';

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
            <h1>ProcessedParcels</h1>
          </Grid>
          <Grid xs={12}>
            <h3>
              <Link to="/admin/processed-parcel/add">
                <i className="fa fa-home" /> Add New ProcessedParcel
              </Link>
            </h3>
          </Grid>

          <ProcessedParcelTableView list={processedParcelReducer.list} />
        </Grid>
      </div>
    );
  }
}

export const ProcessedParcelListView = withStyles(styles)(ProcessedParcelList);
