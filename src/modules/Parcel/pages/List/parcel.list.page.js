import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ParcelListView } from '../../components/List/parcel.list.view';
import {
  parcelOnChangeAction,
  onParcelErrorAction,
  parcelFetchRequestAction,
} from '../../containers/redux/parcel.actions';

export function mapStateToProps({ parcelReducer }) {
  return {
    parcelReducer,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      parcelOnChangeAction,
      onParcelErrorAction,
      parcelFetchRequestAction,
    },
    dispatch,
  );
}

export const ParcelListPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ParcelListView);
