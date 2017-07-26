import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectPriority from './select-priority.component.jsx';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

let myStorage = window.localStorage;
export default class TDialog extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false,
            selectPriority: 1,
            endDate: new Date(),
            item: '',
        };
    }

    submitForm = () => {
        console.log(this.state);
        myStorage.setItem('myState', JSON.stringify(this.state));
        this.handleClose();
    };

    handleChange = (event, index, value) => this.setState({ selectPriority: value });

    handleEndtDate = (e, date) => {
        this.setState({
            endDate: date,
        });
    }

    handleItem = (e, s) => {
        this.setState({
            item: s,
        });
    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
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
                onTouchTap={this.submitForm}
            />,
        ];

        return (
            <div>
                <RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen} />
                <Dialog
                    title="Add todo"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <form>
                        <TextField floatingLabelText="To do" name="todo" onChange={this.handleItem} value={this.state.item} />
                        <SelectPriority name="SelectPriority" onChange={this.handleChange} value={this.state.selectPriority} />
                        <DatePicker floatingLabelText="End date" name="endDate" onChange={this.handleEndtDate} value={this.state.endDate} />
                    </form>
                </Dialog>
            </div>
        );
    }
}