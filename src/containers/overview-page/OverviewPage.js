import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import CenteredWrapper from '~/components/centered-wrapper';
import NewTournamentPopup from '~/components/new-tournament-popup';

import * as dispatchers from '~/dispatchers';

class OverviewPage extends Component {
    constructor() {
        super();

        this.state = {
            newTournamentDialogOpen: false,
        };

        this.onOpenDialog = this.onOpenDialog.bind(this);
        this.onCreateNewTournament = this.onCreateNewTournament.bind(this);
    }

    componentWillMount() {
        this.props.getTournaments();
    }

    onOpenDialog() {
        this.setState({
            newTournamentDialogOpen: true,
        });
    }

    onCreateNewTournament(tournament) {
        this.props.addTournament(tournament);

        this.setState({
            newTournamentDialogOpen: false,
        });
    }

    render() {
        const {
            loadingTournaments,
            tournaments,
        } = this.props;

        const {
            newTournamentDialogOpen,
        } = this.state;

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
                <NewTournamentPopup
                    open={newTournamentDialogOpen}
                    onSave={this.onCreateNewTournament}
                />
            </CenteredWrapper>
        );
    }
}

OverviewPage.propTypes = {
    addTournament: PropTypes.func.isRequired,
    getTournaments: PropTypes.func.isRequired,
    loadingTournaments: PropTypes.bool.isRequired,
    tournaments: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
    ),
};

const mapStateToProps = state => ({
    loadingTournaments: state.tournaments.metadata.pending,
    tournaments: state.tournaments.tournaments,
});

export default connect(mapStateToProps, dispatchers)(OverviewPage);
