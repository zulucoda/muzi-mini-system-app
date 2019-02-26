import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { styles } from './styles';
import { Link } from 'react-router-dom';
import { navigationLinks } from './utils/navigator.util';

const ListItemLink = props => {
  return <ListItem button component={Link} {...props} />;
};

class Navigator extends React.Component {
  render() {
    const { classes, location, ...other } = this.props;
    return (
      <Drawer {...other}>
        <List disablePadding>
          {navigationLinks.map(({ id, children }) => (
            <React.Fragment key={id}>
              <ListItem className={classes.categoryHeader}>
                <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary,
                  }}
                >
                  {id}
                </ListItemText>
              </ListItem>
              {children.map(({ id: childId, icon, active, to }) => (
                <ListItemLink
                  button
                  dense
                  key={childId}
                  className={classNames(
                    classes.item,
                    classes.itemActionable,
                    location.pathname === to && classes.itemActiveItem,
                  )}
                  to={to}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                      textDense: classes.textDense,
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItemLink>
              ))}
              <Divider className={classes.divider} />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    );
  }
}

export const NavigatorView = withStyles(styles)(Navigator);
