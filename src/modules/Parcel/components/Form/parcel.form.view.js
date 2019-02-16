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
import { isString } from '../../../../shared/utils/String/string.util';
import { isNumber } from '../../../../shared/utils/Number/number.util';

class ParcelForm extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._validate = this._validate.bind(this);
  }

  _onChange(evt) {
    const name = evt.target.id;
    const value = evt.target.value;
    const error = null;
    this.props.parcelOnChangeAction({ name, value, error });
  }

  _validate() {
    const { parcelReducer } = this.props;

    let isFormValid = true;

    if (!isString(parcelReducer.parcel.name)) {
      this.props.parcelOnChangeAction({
        name: 'name',
        value: parcelReducer.parcel.name,
        error: 'Parcel name required',
      });
      isFormValid = false;
    }

    if (!isString(parcelReducer.parcel.culture)) {
      this.props.parcelOnChangeAction({
        name: 'culture',
        value: parcelReducer.parcel.culture,
        error: 'Parcel culture required',
      });
      isFormValid = false;
    }

    if (!isNumber(parcelReducer.parcel.area)) {
      this.props.parcelOnChangeAction({
        name: 'area',
        value: parcelReducer.parcel.area,
        error: 'Area must be a number greater than 0.',
      });
      isFormValid = false;
    }

    if (isFormValid) {
      return this.props.parcelSaveAction();
    }

    return isFormValid;
  }

  render() {
    const { classes, parcelReducer } = this.props;
    return (
      <div className={classes.root}>
        <Grid container xs={12} spacing={24}>
          <h1>Parcel Form</h1>
          <Grid xs={12}>
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="h5" component="h3">
                Error Message
              </Typography>
              <Typography component="p">
                {parcelReducer.errorMessage}
              </Typography>
            </Paper>
          </Grid>

          <Grid xs={12}>
            <form className={classes.container} noValidate autoComplete="off">
              <Grid xs={12}>
                <TextField
                  id="name"
                  label="name"
                  className={classes.textField}
                  value={parcelReducer.parcel.name}
                  onChange={this._onChange}
                  margin="normal"
                  helperText={parcelReducer.error.name}
                  error={isString(parcelReducer.error.name)}
                  require={true}
                  fullWidth={true}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  id="culture"
                  label="culture"
                  className={classes.textField}
                  value={parcelReducer.parcel.culture}
                  onChange={this._onChange}
                  margin="normal"
                  helperText={parcelReducer.error.culture}
                  error={isString(parcelReducer.error.culture)}
                  fullWidth={true}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  id="area"
                  label="area"
                  className={classes.textField}
                  value={parcelReducer.parcel.area}
                  onChange={this._onChange}
                  margin="normal"
                  type="number"
                  helperText={parcelReducer.error.area}
                  error={isString(parcelReducer.error.area)}
                  fullWidth={true}
                />
              </Grid>
              <Grid xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={() => this._validate()}
                >
                  Save
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export const ParcelFormView = withStyles(styles)(ParcelForm);
