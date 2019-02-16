import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { LoginPageContainer } from '../../../Login/pages/login.page';
import './app.main.css';
import { AdminView } from '../../../Admin/components/Main/admin.main.view';

export class AppView extends Component {
  render() {
    const { loginReducer } = this.props;
    return (
      <BrowserRouter>
        <div>
          <Route path="/login" component={LoginPageContainer} />
          <Route path="/admin" component={AdminView} />
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
