import React from 'react';
import WorkIcon from '@material-ui/icons/Work';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import TableChartIcon from '@material-ui/icons/TableChart';

const REPORT = 'Report';
const MANAGE = 'Manage';

export const navigationLinks = [
  {
    id: `${MANAGE}`,
    children: [
      {
        id: 'Parcels',
        title: 'Parcels',
        icon: <WorkIcon />,
        to: '/admin/parcel/list',
      },
      {
        id: 'Tractors',
        title: 'Tractors',
        icon: <LocalShippingIcon />,
        to: '/admin/tractor/list',
      },
      {
        id: 'Processed Parcel',
        title: 'Processed Parcel',
        icon: <TrackChangesIcon />,
        to: '/admin/processed-parcel/list',
      },
    ],
  },
  {
    id: `${REPORT}`,
    children: [
      {
        id: 'Report PP',
        title: 'Processed Parcel Report',
        icon: <TableChartIcon />,
        to: '/admin/processed-parcel/report',
      },
    ],
  },
];
