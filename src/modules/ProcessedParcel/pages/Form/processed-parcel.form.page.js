import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ProcessedParcelFormView } from '../../components/Form/processed-parcel.form.view';
import {
  processedParcelOnChangeAction,
  onProcessedParcelErrorAction,
  processedParcelSaveAction,
} from '../../containers/redux/processed-parcel.actions';
import { parcelFetchRequestAction } from '../../../Parcel/containers/redux/parcel.actions';
import { tractorFetchRequestAction } from '../../../Tractor/containers/redux/tractor.actions';

export function mapStateToProps({
  processedParcelReducer,
  parcelReducer,
  tractorReducer,
}) {
  return {
    processedParcelReducer,
    parcelReducer,
    tractorReducer,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      processedParcelOnChangeAction,
      onProcessedParcelErrorAction,
      processedParcelSaveAction,
      parcelFetchRequestAction,
      tractorFetchRequestAction,
    },
    dispatch,
  );
}

export const ProcessedParcelFormPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProcessedParcelFormView);
