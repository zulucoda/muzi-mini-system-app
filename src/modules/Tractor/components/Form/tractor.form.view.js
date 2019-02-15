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

class TractorForm extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  _onChange(evt) {
    const name = evt.target.id;
    const value = evt.target.value;
    this.props.tractorOnChangeAction({ name, value });
  }

  render() {
    const { classes, tractorReducer } = this.props;
    console.log('{tractorReducer.name}:', tractorReducer.tractor.name);
    return (
      <div>
        <h1>Tractor Form</h1>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="h5" component="h3">
            Error Message
          </Typography>
          <Typography component="p">{tractorReducer.errorMessage}</Typography>
        </Paper>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="name"
            className={classes.textField}
            value={tractorReducer.tractor.name}
            onChange={this._onChange}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => this.props.tractorSaveAction()}
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

export const TractorFormView = withStyles(styles)(TractorForm);
