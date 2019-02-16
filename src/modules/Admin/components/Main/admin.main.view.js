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
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Work,
  LocalShipping,
  TrackChanges,
  TableChart,
} from '@material-ui/icons';
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

const ListItemLink = props => {
  return <ListItem button component={Link} {...props} />;
};

class Admin extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container xs={12} spacing={24}>
          <Grid container xs={12}>
            <AppBar position="static" color="primary">
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
                  <ListItemLink to="/admin/parcel/list">
                    <ListItemIcon>
                      <Work />
                    </ListItemIcon>
                    <ListItemText inset primary="Parcels" />
                  </ListItemLink>
                </ListItem>
                <ListItem>
                  <ListItemLink to="/admin/tractor/list">
                    <ListItemIcon>
                      <LocalShipping />
                    </ListItemIcon>
                    <ListItemText inset primary="Tractors" />
                  </ListItemLink>
                </ListItem>
                <ListItem>
                  <ListItemLink to="/admin/processed-parcel/list">
                    <ListItemIcon>
                      <TrackChanges />
                    </ListItemIcon>
                    <ListItemText inset primary="Processed Parcel" />
                  </ListItemLink>
                </ListItem>
                <ListItem>
                  <ListItemLink to="/admin/processed-parcel/report">
                    <ListItemIcon>
                      <TableChart />
                    </ListItemIcon>
                    <ListItemText inset primary="Report PP" />
                  </ListItemLink>
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
