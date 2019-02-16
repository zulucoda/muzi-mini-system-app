import React from 'react';
import {
  TextField,
  withStyles,
  Grid,
  Button,
  Paper,
  Typography,
  ListItem,
  List,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { styles } from './styles';
import { Link, Route } from 'react-router-dom';
import { ParcelListPageContainer } from '../../../Parcel/pages/List/parcel.list.page';
import { ParcelFormPageContainer } from '../../../Parcel/pages/Form/parcel.form.page';
import { TractorListPageContainer } from '../../../Tractor/pages/List/tractor.list.page';
import { TractorFormPageContainer } from '../../../Tractor/pages/Form/tractor.form.page';
import { ProcessedParcelFormPageContainer } from '../../../ProcessedParcel/pages/Form/processed-parcel.form.page';
import { ProcessedParcelListPageContainer } from '../../../ProcessedParcel/pages/List/processed-parcel.list.page';
import { ProcessedParcelReportPageContainer } from '../../../ProcessedParcel/pages/Report/processed-parcel.report.page';
import { withRoot } from '../../../../shared/components/RootTheme/root-theme';

class Admin extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container xs={12} spacing={24}>
          <Grid container xs={12}>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="h6" color="inherit">
                  Muzi mini-system
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>

          <Grid container xs={12}>
            <Grid container xs={4} sm={2}>
              <List component="nav" className={classes.navList}>
                <ListItem>
                  <Link to="/admin/">
                    <i className="fa fa-home" /> Dashboard
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/admin/parcel/list">
                    <i className="fa fa-home" /> Parcel
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/admin/tractor/list">
                    <i className="fa fa-home" /> Tractor
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/admin/processed-parcel/list">
                    <i className="fa fa-home" /> Processed Parcel
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/admin/processed-parcel/report">
                    <i className="fa fa-home" /> Report Processed Parcel
                  </Link>
                </ListItem>
              </List>
            </Grid>

            <Grid container xs={8} sm={10} className="content">
              <Route
                path="/admin/parcel/list"
                component={ParcelListPageContainer}
              />
              <Route
                path="/admin/parcel/add"
                component={ParcelFormPageContainer}
              />

              <Route
                path="/admin/tractor/list"
                component={TractorListPageContainer}
              />
              <Route
                path="/admin/tractor/add"
                component={TractorFormPageContainer}
              />

              <Route
                path="/admin/processed-parcel/list"
                component={ProcessedParcelListPageContainer}
              />
              <Route
                path="/admin/processed-parcel/add"
                component={ProcessedParcelFormPageContainer}
              />
              <Route
                path="/admin/processed-parcel/report"
                component={ProcessedParcelReportPageContainer}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const AdminStyles = withStyles(styles)(Admin);
export const AdminView = withRoot(AdminStyles);
