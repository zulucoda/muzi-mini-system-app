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

class ParcelForm extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  _onChange(evt) {
    const name = evt.target.id;
    const value = evt.target.value;
    this.props.parcelOnChangeAction({ name, value });
  }

  render() {
    const { classes, parcelReducer } = this.props;
    console.log('{parcelReducer.name}:', parcelReducer.parcel.name);
    return (
      <div>
        <h1>Parcel Form</h1>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="h5" component="h3">
            Error Message
          </Typography>
          <Typography component="p">{parcelReducer.errorMessage}</Typography>
        </Paper>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="name"
            className={classes.textField}
            value={parcelReducer.parcel.name}
            onChange={this._onChange}
            margin="normal"
          />
          <TextField
            id="culture"
            label="culture"
            className={classes.textField}
            value={parcelReducer.parcel.culture}
            onChange={this._onChange}
            margin="normal"
          />
          <TextField
            id="area"
            label="area"
            className={classes.textField}
            value={parcelReducer.parcel.area}
            onChange={this._onChange}
            margin="normal"
            type="number"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => this.props.parcelSaveAction()}
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

export const ParcelFormView = withStyles(styles)(ParcelForm);
