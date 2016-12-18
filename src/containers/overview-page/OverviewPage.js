import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import CenteredWrapper from '~/components/centered-wrapper';
import NewTournamentPopup from '~/components/new-tournament-popup';
import IconButton from 'material-ui/IconButton';

import * as dispatchers from '~/dispatchers';

class OverviewPage extends Component {
    constructor() {
        super();

        this.state = {
            newTournamentDialogOpen: false,
        };

        this.onToggleDialog = this.onToggleDialog.bind(this);
        this.onCreateNewTournament = this.onCreateNewTournament.bind(this);
    }

    componentWillMount() {
        this.props.getTournaments();
    }


    onCreateNewTournament(tournament) {
        this.props.addTournament(tournament);

        this.setState({
            newTournamentDialogOpen: false,
        });
    }

    onDeleteTournament(tournament) {
        this.props.deleteTournament(tournament);
    }

    onToggleDialog() {
        this.setState({
            newTournamentDialogOpen: !this.state.newTournamentDialogOpen,
        });
    }

    render() {
        const {
            loadingTournaments,
            loggedIn,
            tournaments,
        } = this.props;

        const {
            newTournamentDialogOpen,
        } = this.state;

        const getRightIconButton = tournament => (
            <IconButton onTouchTap={() => this.onDeleteTournament(tournament)}>
                <DeleteIcon />
            </IconButton>
        );

        return (
            <CenteredWrapper>
                <h1>Registered tournaments</h1>
                {loadingTournaments &&
                    <CenteredWrapper>
                        <CircularProgress />
                    </CenteredWrapper>
                }
                {!loadingTournaments && !tournaments.length &&
                    <p>No registered tournaments yet</p>
                }
                {tournaments.length > 0 &&
                    <List>
                        {tournaments.map((tournament, index) =>
                            <ListItem
                                key={index}
                                primaryText={tournament.name}
                                rightIconButton={
                                    loggedIn ?
                                        getRightIconButton(tournament) : null
                                    }
                            />,
                        )}
                    </List>
                }
                {loggedIn &&
                    <div>
                        <RaisedButton
                            label="New tournament"
                            onTouchTap={this.onToggleDialog}
                            primary
                        />
                        <NewTournamentPopup
                            open={newTournamentDialogOpen}
                            onSave={this.onCreateNewTournament}
                            onClose={this.onToggleDialog}
                        />
                    </div>
                }
            </CenteredWrapper>
        );
    }
}

OverviewPage.propTypes = {
    addTournament: PropTypes.func.isRequired,
    deleteTournament: PropTypes.func.isRequired,
    getTournaments: PropTypes.func.isRequired,
    loadingTournaments: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    tournaments: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
    ),
};

const mapStateToProps = state => ({
    loadingTournaments: state.tournaments.metadata.pending,
    loggedIn: state.user.loggedIn,
    tournaments: state.tournaments.tournaments,
});

export default connect(mapStateToProps, dispatchers)(OverviewPage);
