import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { LoginPageContainer } from '../../../Login/pages/login.page';
import { AdminPageContainer } from '../../../Admin/pages/admin.page';
import './app.main.css';

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
        </div>
      </BrowserRouter>
    );
  }
}
