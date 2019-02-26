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
import { withRoot } from '../../../../shared/components/RootTheme/root-theme';
import { MfbView } from '../../../../shared/components/Mfb/mfb.view';

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
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={1}>
          <div className={classes.container}>
            <Grid container xs={12} spacing={24}>
              <Grid xs={12}>
                <h1>Welcome to Muzi mini-system app</h1>
              </Grid>

              {loginReducer.errorMessage ? (
                <Grid xs={12}>
                  <Paper className={classes.paperError} elevation={1}>
                    <Typography variant="h5" component="strong">
                      Error Message
                    </Typography>
                    <Typography component="p">
                      {loginReducer.errorMessage}
                    </Typography>
                  </Paper>
                </Grid>
              ) : null}

              <Grid xs={12}>
                <h3>Login Form</h3>
                <form className={classes.form} noValidate autoComplete="off">
                  <Grid xs={12}>
                    <TextField
                      id="email"
                      label="email"
                      className={classes.textField}
                      value={loginReducer.login.email}
                      onChange={this._onChange}
                      margin="normal"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <TextField
                      id="password"
                      label="password"
                      className={classes.textField}
                      value={loginReducer.login.password}
                      onChange={this._onChange}
                      margin="normal"
                      type="password"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={() => this.props.loginFetchRequestAction()}
                    >
                      Login
                    </Button>
                  </Grid>
                </form>
              </Grid>
              <Grid xs={12}>
                <MfbView />
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>
    );
  }
}

export const LoginStyles = withStyles(styles)(Login);
export const LoginView = withRoot(LoginStyles);
