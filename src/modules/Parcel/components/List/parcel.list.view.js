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
            <h3>
              <Link to="/admin/parcel/add">
                <i className="fa fa-home" /> Add New Parcel
              </Link>
            </h3>
          </Grid>
          <Grid xs={12}>
            <ul>
              {parcelReducer.list.map((parcel, i) => (
                <li key={i}>
                  {parcel.name} {parcel.culture} {parcel.area}
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export const ParcelListView = withStyles(styles)(ParcelList);
