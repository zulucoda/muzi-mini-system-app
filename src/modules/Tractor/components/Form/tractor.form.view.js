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

class TractorForm extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._validate = this._validate.bind(this);
  }

  _onChange(evt) {
    const name = evt.target.id;
    const value = evt.target.value;
    const error = null;
    this.props.tractorOnChangeAction({ name, value, error });
  }

  _validate() {
    const { tractorReducer } = this.props;

    let isFormValid = true;

    if (!isString(tractorReducer.tractor.name)) {
      this.props.tractorOnChangeAction({
        name: 'name',
        value: tractorReducer.tractor.name,
        error: 'Tractor name required',
      });
      isFormValid = false;
    }

    if (isFormValid) {
      return this.props.tractorSaveAction();
    }

    return isFormValid;
  }

  render() {
    const { classes, tractorReducer } = this.props;
    return (
      <div className={classes.root}>
        <Grid container xs={12}>
          <Grid xs={12}>
            <h1>Add Tractor</h1>
          </Grid>

          {tractorReducer.errorMessage ? (
            <Grid xs={12}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="h5" component="h3">
                  Error Message
                </Typography>
                <Typography component="p">
                  {tractorReducer.errorMessage}
                </Typography>
              </Paper>
            </Grid>
          ) : null}

          <Grid xs={12}>
            <h3>Form</h3>
            <form className={classes.container} noValidate autoComplete="off">
              <Grid xs={12}>
                <TextField
                  id="name"
                  label="name"
                  className={classes.textField}
                  value={tractorReducer.tractor.name}
                  onChange={this._onChange}
                  margin="normal"
                  helperText={tractorReducer.error.name}
                  error={isString(tractorReducer.error.name)}
                  require={true}
                />
              </Grid>
              <Grid xs={6}>
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

export const TractorFormView = withStyles(styles)(TractorForm);
