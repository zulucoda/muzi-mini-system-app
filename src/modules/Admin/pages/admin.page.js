import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AdminView } from '../components/Main/admin.main.view';
import { logoutAction } from '../../Login/containers/redux/login.actions';

export function mapStateToProps() {
  return {};
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logoutAction,
    },
    dispatch,
  );
}

export const AdminPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminView);
