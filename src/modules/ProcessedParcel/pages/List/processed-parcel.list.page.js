import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ProcessedParcelListView } from '../../components/List/processed-parcel.list.view';
import {
  processedParcelOnChangeAction,
  onProcessedParcelErrorAction,
  processedParcelFetchRequestAction,
} from '../../containers/redux/processed-parcel.actions';

export function mapStateToProps({ processedParcelReducer }) {
  return {
    processedParcelReducer,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      processedParcelOnChangeAction,
      onProcessedParcelErrorAction,
      processedParcelFetchRequestAction,
    },
    dispatch,
  );
}

export const ProcessedParcelListPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProcessedParcelListView);
