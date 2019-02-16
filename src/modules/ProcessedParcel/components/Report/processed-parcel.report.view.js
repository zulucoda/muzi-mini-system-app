import React from 'react';
import {
  TextField,
  withStyles,
  Grid,
  Button,
  Paper,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';
import { InlineDatePicker } from 'material-ui-pickers';
import { styles } from './styles';

class ProcessedParcelReport extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._getMenuItemList = this._getMenuItemList.bind(this);
  }

  componentDidMount() {
    // reset search state
    this.props.processedParcelSearchResetAction();
  }

  _onChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    this.props.processedParcelOnChangeAction({ name, value });
  }

  _getMenuItemList(list, prefix) {
    return list.map((item, idx) => (
      <MenuItem key={`${prefix}-${idx}`} value={item.id}>
        {item.name}
      </MenuItem>
    ));
  }

  render() {
    const {
      classes,
      processedParcelReducer,
      tractorReducer,
      parcelReducer,
    } = this.props;
    return (
      <div className={classes.root}>
        <h1>Processed Parcels Report</h1>
        <div>
          <h3>Report Filters</h3>
          <form className={classes.container} noValidate autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="tractorId">Select a Tractor</InputLabel>
              <Select
                value={processedParcelReducer.processedParcel.tractorId}
                onChange={this._onChange}
                inputProps={{
                  name: 'tractorId',
                  id: 'tractorId',
                }}
              >
                {this._getMenuItemList(tractorReducer.list, 'tractor')}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="parcelId">Select a Parcel</InputLabel>
              <Select
                value={processedParcelReducer.processedParcel.parcelId}
                onChange={this._onChange}
                inputProps={{
                  name: 'parcelId',
                  id: 'parcelId',
                }}
              >
                {this._getMenuItemList(parcelReducer.list, 'parcel')}
              </Select>
            </FormControl>

            <InlineDatePicker
              label="Select a from date"
              name="dateProcessed"
              id="dateProcessed"
              value={processedParcelReducer.processedParcel.dateProcessed}
              onChange={date =>
                this._onChange({
                  target: { name: 'dateProcessed', value: date },
                })
              }
            />

            <InlineDatePicker
              label="Select a to date"
              name="dateProcessedTo"
              id="dateProcessedTo"
              value={processedParcelReducer.processedParcel.dateProcessedTo}
              onChange={date =>
                this._onChange({
                  target: { name: 'dateProcessedTo', value: date },
                })
              }
            />

            <TextField
              id="area"
              name="area"
              label="area"
              className={classes.textField}
              value={processedParcelReducer.processedParcel.area}
              onChange={this._onChange}
              margin="normal"
              type="number"
            />
            <TextField
              id="culture"
              name="culture"
              label="culture"
              className={classes.textField}
              value={processedParcelReducer.processedParcel.culture}
              onChange={this._onChange}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => this.props.processedParcelSearchAction()}
            >
              Search
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => this.props.processedParcelSearchResetAction()}
            >
              Clear Search
            </Button>
          </form>
        </div>
        <ul>
          {processedParcelReducer.list.map((processedParcel, i) => (
            <li key={i}>
              {processedParcel.parcelName} {processedParcel.tractorName}{' '}
              {processedParcel.culture} {processedParcel.area}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export const ProcessedParcelReportView = withStyles(styles)(
  ProcessedParcelReport,
);
