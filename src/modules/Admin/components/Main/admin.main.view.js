import React from 'react';
import { Link, Route } from 'react-router-dom';
import { ParcelListPageContainer } from '../../../Parcel/pages/List/parcel.list.page';
import { ParcelFormPageContainer } from '../../../Parcel/pages/Form/parcel.form.page';
import { TractorListPageContainer } from '../../../Tractor/pages/List/tractor.list.page';
import { TractorFormPageContainer } from '../../../Tractor/pages/Form/tractor.form.page';

export class AdminView extends React.Component {
  render() {
    return (
      <div>
        <header>Dashboard</header>
        <div className="container">
          <div className="nav">
            <h3>Side Links</h3>
            <Link to="/admin/">
              <i className="fa fa-home" /> Dashboard
            </Link>
            <Link to="/admin/parcel/list">
              <i className="fa fa-home" /> Parcel
            </Link>
            <Link to="/admin/tractor/list">
              <i className="fa fa-home" /> Tractor
            </Link>
            <Link to="/admin/processed-parcel/list">
              <i className="fa fa-home" /> Processed Parcel
            </Link>
            <Link to="/admin/processed-parcel/report">
              <i className="fa fa-home" /> Report Processed Parcel
            </Link>
          </div>
          <div className="content">
            <Route
              path="/admin/parcel/list"
              component={ParcelListPageContainer}
            />
            <Route
              path="/admin/parcel/add"
              component={ParcelFormPageContainer}
            />

            <Route
              path="/admin/tractor/list"
              component={TractorListPageContainer}
            />
            <Route
              path="/admin/tractor/add"
              component={TractorFormPageContainer}
            />

            <Route
              path="/admin/processed-parcel/list"
              component={() => <div>I am a fake Processed Parcel list</div>}
            />
            <Route
              path="/admin/processed-parcel/add"
              component={() => <div>I am a fake Processed Parcel Add</div>}
            />
            <Route
              path="/admin/processed-parcel/report"
              component={() => <div>I am a fake Processed Parcel Report</div>}
            />
          </div>
        </div>
      </div>
    );
  }
}
