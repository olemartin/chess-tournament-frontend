import React, { Component, PropTypes } from 'react';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class NewTournamentPopup extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            engine: undefined,
        };

        this.onChangeEngine = this.onChangeEngine.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChangeEngine(e, i, value) {
        this.setState({ engine: value });
    }

    onChangeName(e) {
        this.setState({ name: e.target.value });
    }

    onSave() {
        this.props.onSave(this.state);
    }

    render() {
        const {
            onClose,
            open,
        } = this.props;

        const {
            name,
            engine,
        } = this.state;

        const dialogActions = [
            <RaisedButton
                label="Create"
                onTouchTap={this.onSave}
            />,
        ];

        return (
            <Dialog
                actions={dialogActions}
                onRequestClose={onClose}
                open={open}
            >
                <h2>Create a new tournament!</h2>
                <TextField
                    floatingLabelText="Tournament name"
                    onChange={this.onChangeName}
                    value={name}
                />
                <SelectField
                    floatingLabelText="Choose tournament engine"
                    onChange={this.onChangeEngine}
                    value={engine}
                >
                    <MenuItem value="Monrad" primaryText="Monrad" />
                    <MenuItem value="Round-robin" primaryText="Round-robin" />
                </SelectField>
            </Dialog>
        );
    }
}

NewTournamentPopup.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default NewTournamentPopup;
