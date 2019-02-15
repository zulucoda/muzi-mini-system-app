import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TractorFormView } from '../../components/Form/tractor.form.view';
import {
  tractorOnChangeAction,
  onTractorErrorAction,
  tractorSaveAction,
} from '../../containers/redux/tractor.actions';

export function mapStateToProps({ tractorReducer }) {
  return {
    tractorReducer,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      tractorOnChangeAction,
      onTractorErrorAction,
      tractorSaveAction,
    },
    dispatch,
  );
}

export const TractorFormPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TractorFormView);
