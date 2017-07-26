import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class SelectAction extends Component {

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Priority"
          value={this.props.value}
          onChange={this.props.onChange}
        >
          <MenuItem value={1} primaryText="Normal" />
          <MenuItem value={2} primaryText="High" />
          <MenuItem value={3} primaryText="Low" />

        </SelectField>
      </div>
    );
  }
}