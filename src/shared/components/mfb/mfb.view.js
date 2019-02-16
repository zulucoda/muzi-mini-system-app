import React, { Component } from 'react';
import './style.css';

export class MfbView extends Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <ul className="nav">
          <li className="mfb-project-01">
            <a href="https://blog.mfbproject.co.za" target="_blank">
              <img src="/assets/images/mfbprojectlogog_new_project_2014_144.png" />{' '}
              created by mfb project
            </a>
          </li>
        </ul>
        <ul className="nav">
          <li>Copyright &copy; 2019 Muzikayise Flynn Buthelezi (zuluCoda)</li>
        </ul>
      </footer>
    );
  }
}
