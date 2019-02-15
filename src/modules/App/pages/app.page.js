import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { AppView } from '../components/Main/app.main.view';

export function mapStateToProps({ loginReducer }) {
  return {
    loginReducer,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export const AppPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppView);
