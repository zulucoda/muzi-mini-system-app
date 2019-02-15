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

class ProcessedParcelList extends React.Component {
  componentDidMount() {
    this.props.processedParcelFetchRequestAction();
  }

  render() {
    const { classes, processedParcelReducer } = this.props;
    return (
      <div className={classes.root}>
        <h1>ProcessedParcels</h1>
        <h3>
          <Link to="/admin/processed-parcel/add">
            <i className="fa fa-home" /> Add New ProcessedParcel
          </Link>
        </h3>
        <ul>
          {processedParcelReducer.list.map((processedParcel, i) => (
            <li key={i}>
              {processedParcel.name} {processedParcel.culture}{' '}
              {processedParcel.area}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export const ProcessedParcelListView = withStyles(styles)(ProcessedParcelList);
