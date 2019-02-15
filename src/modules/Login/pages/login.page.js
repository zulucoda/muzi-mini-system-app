import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { LoginView } from '../components/Main/login.main.view';
import {
  loginOnChangeAction,
  onLoginErrorAction,
} from '../containers/redux/login.reducer';

export function mapStateToProps({ loginReducer }) {
  return {
    loginReducer,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      loginOnChangeAction,
      onLoginErrorAction,
    },
    dispatch,
  );
}

export const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView);
