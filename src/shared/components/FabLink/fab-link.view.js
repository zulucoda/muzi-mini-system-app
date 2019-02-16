import React from 'react';
import { Add } from '@material-ui/icons';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const FabLink = props => {
  return (
    <Fab button component={Link} {...props} color="primary" aria-label="Add">
      {' '}
      <Add />
    </Fab>
  );
};
