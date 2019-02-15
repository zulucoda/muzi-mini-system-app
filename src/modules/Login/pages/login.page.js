import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { LoginView } from '../components/Main/login.main.view';
import {
  loginOnChangeAction,
  onLoginErrorAction,
  loginFetchRequestAction,
} from '../containers/redux/login.actions';

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
      loginFetchRequestAction,
    },
    dispatch,
  );
}

export const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView);
