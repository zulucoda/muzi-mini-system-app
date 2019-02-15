import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ProcessedParcelFormView } from '../../components/Form/processed-parcel.form.view';
import {
  processedParcelOnChangeAction,
  onProcessedParcelErrorAction,
  processedParcelSaveAction,
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
      processedParcelSaveAction,
    },
    dispatch,
  );
}

export const ProcessedParcelFormPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProcessedParcelFormView);
