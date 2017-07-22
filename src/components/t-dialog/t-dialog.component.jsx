import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectAction from './select-action.component.jsx';
import SelectResource from './select-resource.component.jsx';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class TDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Only actions can close this dialog.
          <SelectAction />
          <SelectResource />
          <DatePicker hintText="Start Date" />
          <DatePicker hintText="End Date" />
          <TextField floatingLabelText="Comment" />
        </Dialog>
      </div>
    );
  }
}