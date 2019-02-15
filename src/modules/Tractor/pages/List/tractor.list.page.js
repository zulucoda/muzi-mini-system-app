import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TractorListView } from '../../components/List/tractor.list.view';
import {
  tractorOnChangeAction,
  onTractorErrorAction,
  tractorFetchRequestAction,
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
      tractorFetchRequestAction,
    },
    dispatch,
  );
}

export const TractorListPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TractorListView);
