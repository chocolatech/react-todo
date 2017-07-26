import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectAction from './select-action.component.jsx';
import SelectResource from './select-resource.component.jsx';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

let myStorage = window.localStorage;
export default class TDialog extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false,
            selectAction: '',
            selectResource: '',
            startDate: new Date(),
            endDate: new Date(),
            comment: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    submitForm = ()=>{
        console.log(this.state);
        myStorage.setItem('myState', JSON.stringify(this.state));
        //test
        this.handleClose();
    };

    handleInputChange(event) {
        console.log(event);
        const target = event.target;
        const value = target.type === target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleStartDate = (e, date) => {
        this.setState({
            startDate: date,
        });
    }

    handleEndtDate = (e, date) => {
        this.setState({
            endDate: date,
        });
    }

    handleComment = (e, s) => {
        this.setState({
            comment: s,
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
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    Only actions can close this dialog.
          <form action="">
                        <SelectAction name="selectAction" onChange={this.handleInputChange} value={this.state.selectAction} />
                        <SelectResource name="selectResource" onChange={this.handleInputChange} value={this.state.selectResource} />
                        <DatePicker hintText="Start Date" name="startDate" onChange={this.handleStartDate} value={this.state.startDate} />
                        <DatePicker hintText="End Date" name="endDate" onChange={this.handleEndtDate} value={this.state.endDate} />
                        <TextField floatingLabelText="Comment" name="comment" onChange={this.handleComment} value={this.state.comment} />
                    </form>
                </Dialog>
            </div>
        );
    }
}