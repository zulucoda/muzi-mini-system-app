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
  FormHelperText,
} from '@material-ui/core';
import { InlineDatePicker } from 'material-ui-pickers';
import { styles } from './styles';
import { isNumber } from '../../../../shared/utils/Number/number.util';
import moment from 'moment';
import { isString } from '../../../../shared/utils/String/string.util';

class ProcessedParcelForm extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._getMenuItemList = this._getMenuItemList.bind(this);
    this._validate = this._validate.bind(this);
  }

  componentDidMount() {
    // fetch data for form usage
    this.props.parcelFetchRequestAction();
    this.props.tractorFetchRequestAction();
  }

  _onChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    const error = null;
    this.props.processedParcelOnChangeAction({ name, value, error });
  }

  _getMenuItemList(list, prefix) {
    return list.map((item, idx) => (
      <MenuItem key={`${prefix}-${idx}`} value={item.id}>
        {item.name}
      </MenuItem>
    ));
  }

  _validate() {
    const { processedParcelReducer } = this.props;

    let isFormValid = true;

    if (!isNumber(processedParcelReducer.processedParcel.tractorId)) {
      this.props.processedParcelOnChangeAction({
        name: 'tractorId',
        value: processedParcelReducer.processedParcel.tractorId,
        error: 'Tractor required',
      });
      isFormValid = false;
    }

    if (!isNumber(processedParcelReducer.processedParcel.parcelId)) {
      this.props.processedParcelOnChangeAction({
        name: 'parcelId',
        value: processedParcelReducer.processedParcel.parcelId,
        error: 'Parcel required',
      });
      isFormValid = false;
    }

    if (
      !moment(processedParcelReducer.processedParcel.dateProcessed).isValid()
    ) {
      this.props.processedParcelOnChangeAction({
        name: 'dateProcessed',
        value: processedParcelReducer.processedParcel.dateProcessed,
        error: 'Date required',
      });
      isFormValid = false;
    }

    if (!isNumber(processedParcelReducer.processedParcel.area)) {
      this.props.processedParcelOnChangeAction({
        name: 'area',
        value: processedParcelReducer.processedParcel.area,
        error: 'Area required',
      });
      isFormValid = false;
    } else if (
      isNumber(processedParcelReducer.processedParcel.area) &&
      isNumber(processedParcelReducer.processedParcel.parcelId)
    ) {
      // check if area is not bigger than selected parcel area
      const ppArea = processedParcelReducer.processedParcel.area;
      const parcelArea = this.props.parcelReducer.list
        .filter(
          item => item.id === processedParcelReducer.processedParcel.parcelId,
        )
        .map(item => item.area)
        .reduce(i => i);

      if (ppArea > parcelArea) {
        this.props.processedParcelOnChangeAction({
          name: 'area',
          value: processedParcelReducer.processedParcel.area,
          error: `Area should not exceed the area of the selected parcel. The parcel is area: ${parcelArea}`,
        });
        isFormValid = false;
      }
    }

    if (isFormValid) {
      return this.props.processedParcelSaveAction();
    }

    return isFormValid;
  }

  render() {
    const {
      classes,
      processedParcelReducer,
      parcelReducer,
      tractorReducer,
    } = this.props;
    console.log(
      '{processedParcelReducer.name}:',
      processedParcelReducer.processedParcel.name,
    );
    return (
      <div>
        <h1>ProcessedParcel Form</h1>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="h5" component="h3">
            Error Message
          </Typography>
          <Typography component="p">
            {processedParcelReducer.errorMessage}
          </Typography>
        </Paper>
        <form className={classes.container} noValidate autoComplete="off">
          <FormControl
            className={classes.formControl}
            require={true}
            error={isString(processedParcelReducer.error.tractorId)}
          >
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
            <FormHelperText>
              {processedParcelReducer.error.tractorId}
            </FormHelperText>
          </FormControl>
          <FormControl
            className={classes.formControl}
            require={true}
            error={isString(processedParcelReducer.error.parcelId)}
          >
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
            <FormHelperText>
              {processedParcelReducer.error.parcelId}
            </FormHelperText>
          </FormControl>
          <InlineDatePicker
            label="Select a date"
            name="dateProcessed"
            id="dateProcessed"
            emptyLabel="Select a date"
            helperText={processedParcelReducer.error.dateProcessed}
            error={isString(processedParcelReducer.error.dateProcessed)}
            require={true}
            value={processedParcelReducer.processedParcel.dateProcessed}
            onChange={date =>
              this._onChange({
                target: { name: 'dateProcessed', value: date },
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
            require={true}
            helperText={processedParcelReducer.error.area}
            error={isString(processedParcelReducer.error.area)}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => this._validate()}
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

export const ProcessedParcelFormView = withStyles(styles)(ProcessedParcelForm);
