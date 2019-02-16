import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { LoginPageContainer } from '../../../Login/pages/login.page';
import { AdminPageContainer } from '../../../Admin/pages/admin.page';
import './app.main.css';
import { SpinnerView } from '../../../../shared/components/Spinner/spinner.view';

export class AppView extends Component {
  render() {
    const { loginReducer } = this.props;
    return (
      <BrowserRouter>
        <div>
          <Route path="/login" component={LoginPageContainer} />
          <Route path="/admin" component={AdminPageContainer} />
          <Route
            path="/"
            render={() =>
              loginReducer.token ? (
                <Redirect to="/admin/processed-parcel/report" />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <SpinnerView showSpinner={loginReducer.isLoading} />
        </div>
      </BrowserRouter>
    );
  }
}
