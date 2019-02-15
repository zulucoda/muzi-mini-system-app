import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ParcelFormView } from '../../components/Form/parcel.form.view';
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

export const ParcelFormPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ParcelFormView);
