import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import CenteredWrapper from '~/components/centered-wrapper';

class OverviewPage extends Component {
    constructor() {
        super();

        this.state = {
            newTournamentDialogOpen: false,
        };

        this.onOpenDialog = this.onOpenDialog.bind(this);
        this.onCreateNewTournament = this.onCreateNewTournament.bind(this);
    }

    onOpenDialog() {
        this.setState({
            newTournamentDialogOpen: true,
        });
    }

    onCreateNewTournament() {
        // TODO: Create a new tournament

        this.setState({
            newTournamentDialogOpen: false,
        });
    }

    render() {
        const {
            tournaments,
        } = this.props;

        const {
            newTournamentDialogOpen,
        } = this.state;

        const dialogActions = [
            <RaisedButton
                label="Create"
                onTouchTap={this.onCreateNewTournament}
            />,
        ];

        return (
            <CenteredWrapper>
                <h1>Registered tournaments</h1>
                {!tournaments.length &&
                    <p>No registered tournaments yet</p>
                }
                {tournaments.length > 0 &&
                    <List>
                        {tournaments.map((tournament, index) =>
                            <ListItem
                                key={index}
                                primaryText={tournament.title}
                                rightIcon={<DeleteIcon />}
                            />,
                        )}
                    </List>
                }
                <RaisedButton
                    label="New tournament"
                    onTouchTap={this.onOpenDialog}
                    primary
                />
                <Dialog open={newTournamentDialogOpen} actions={dialogActions}>
                    <h2>Create a new tournament!</h2>
                    <TextField floatingLabelText="Tournament name" />
                </Dialog>
            </CenteredWrapper>
        );
    }
}

OverviewPage.propTypes = {
    tournaments: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
    ),
};

const mapStateToProps = state => ({
    tournaments: state.tournaments.tournaments,
});

export default connect(mapStateToProps)(OverviewPage);
