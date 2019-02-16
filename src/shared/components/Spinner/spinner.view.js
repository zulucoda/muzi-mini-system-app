import React, { Component } from 'react';
import './spinner.css';

export class SpinnerView extends Component {
  render() {
    if (this.props.showSpinner) {
      return <div className="loading">Loading&#8230;</div>;
    }
    return null;
  }
}
