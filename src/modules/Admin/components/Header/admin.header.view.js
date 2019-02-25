import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import { Business } from '@material-ui/icons';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

class Header extends React.Component {
  render() {
    const { classes, onDrawerToggle } = this.props;
    return (
      <React.Fragment>
        <AppBar
          component="div"
          className={classes.secondaryBar}
          color="primary"
          position="static"
          elevation={0}
        >
          <Toolbar>
            <Grid container alignItems="center" spacing={8}>
              <Hidden smUp>
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={onDrawerToggle}
                    className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Hidden>
              <Grid item xs>
                <Grid container>
                  <Grid item>
                    <Icon color="inherit" aria-label="Menu">
                      <Business />
                    </Icon>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      color="inherit"
                      className={classes.grow}
                    >
                      Muzi mini-system app
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  className={classes.button}
                  variant="outlined"
                  color="inherit"
                  size="small"
                  onClick={() => this.props.logoutAction()}
                >
                  Logout
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export const HeaderView = withStyles(styles)(Header);
