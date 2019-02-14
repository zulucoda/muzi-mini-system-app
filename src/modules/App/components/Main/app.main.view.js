import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { LoginView } from '../../../Login/components/Main/login.main.view';
import './app.main.css';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/login" component={LoginView} />
          <Route
            path="/admin"
            component={() => <div>I am a fake Admin, please implement me.</div>}
          />
          <Route
            path="/"
            render={() =>
              this.props.loggedIn ? (
                <Redirect to="/admin/dashboard" />
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
