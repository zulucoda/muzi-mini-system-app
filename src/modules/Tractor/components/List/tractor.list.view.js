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

class TractorList extends React.Component {
  componentDidMount() {
    this.props.tractorFetchRequestAction();
  }

  render() {
    const { classes, tractorReducer } = this.props;
    return (
      <div className={classes.root}>
        <h1>Tractors</h1>
        <h3>
          <Link to="/admin/tractor/add">
            <i className="fa fa-home" /> Add New Tractor
          </Link>
        </h3>
        <ul>
          {tractorReducer.list.map((tractor, i) => (
            <li key={i}>
              {tractor.id} {tractor.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export const TractorListView = withStyles(styles)(TractorList);
