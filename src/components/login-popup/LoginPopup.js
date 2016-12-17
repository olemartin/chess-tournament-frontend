import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginPopup extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onLogin() {
        this.props.onLogin({
            username: this.state.username,
            password: this.state.password,
        });
        this.props.onClose();
    }

    render() {
        const actions = [
            <RaisedButton label="Log in" primary onTouchTap={this.onLogin} />,
        ];

        return (
            <Dialog
                actions={actions}
                title="Log in"
                open={this.props.open}
                onRequestClose={this.props.onClose}
            >
                <h2>We need to know who you are</h2>

                <div>
                    <TextField
                        floatingLabelText="Username"
                        name="username"
                        onChange={this.onChange}
                        value={this.state.username}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Password"
                        name="password"
                        onChange={this.onChange}
                        value={this.state.password}
                    />
                </div>
            </Dialog>
        );
    }
}

LoginPopup.propTypes = {
    onClose: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default LoginPopup;
