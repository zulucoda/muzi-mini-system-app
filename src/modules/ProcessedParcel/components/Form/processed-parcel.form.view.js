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

class ProcessedParcelForm extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._getMenuItemList = this._getMenuItemList.bind(this);
  }

  componentDidMount() {
    // fetch data for form usage
    this.props.parcelFetchRequestAction();
    this.props.tractorFetchRequestAction();
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
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Select a Tractor</InputLabel>
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
            <InputLabel htmlFor="age-simple">Select a Parcel</InputLabel>
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
            label="Select a date"
            name="dateProcessed"
            id="dateProcessed"
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
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => this.props.processedParcelSaveAction()}
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

export const ProcessedParcelFormView = withStyles(styles)(ProcessedParcelForm);
