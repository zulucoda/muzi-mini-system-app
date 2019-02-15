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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  _onChange(evt) {
    const name = evt.target.id;
    const value = evt.target.value;
    this.props.loginOnChangeAction({ name, value });
  }

  render() {
    const { classes, loginReducer } = this.props;
    return (
      <div>
        <h1>Login Form</h1>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="h5" component="h3">
            Error Message
          </Typography>
          <Typography component="p">{loginReducer.errorMessage}</Typography>
        </Paper>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="email"
            label="email"
            className={classes.textField}
            value={loginReducer.login.email}
            onChange={this._onChange}
            margin="normal"
          />
          <TextField
            id="password"
            label="password"
            className={classes.textField}
            value={loginReducer.login.password}
            onChange={this._onChange}
            margin="normal"
            type="password"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => this.props.loginFetchRequestAction()}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export const LoginView = withStyles(styles)(Login);
