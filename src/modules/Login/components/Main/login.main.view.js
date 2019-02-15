import React from 'react';
import { TextField, withStyles, Grid, Button } from '@material-ui/core';
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
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="email"
            label="email"
            className={classes.textField}
            value={loginReducer.email}
            onChange={this._onChange}
            margin="normal"
          />
          <TextField
            id="password"
            label="password"
            className={classes.textField}
            value={loginReducer.password}
            onChange={this._onChange}
            margin="normal"
            type="password"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export const LoginView = withStyles(styles)(Login);
