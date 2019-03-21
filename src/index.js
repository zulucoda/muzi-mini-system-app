import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppPageContainer } from './modules/App/pages/app.page';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './config/store';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <AppPageContainer />
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
