import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ProcessedParcelReportView } from '../../components/Report/processed-parcel.report.view';
import {
  processedParcelOnChangeAction,
  onProcessedParcelErrorAction,
  processedParcelFetchRequestAction,
  processedParcelSearchResetAction,
  processedParcelSearchAction,
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
      parcelFetchRequestAction,
      tractorFetchRequestAction,
      processedParcelFetchRequestAction,
      processedParcelSearchResetAction,
      processedParcelSearchAction,
    },
    dispatch,
  );
}

export const ProcessedParcelReportPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProcessedParcelReportView);
