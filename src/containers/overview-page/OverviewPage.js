import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter, routerShape } from 'react-router';

import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import SectionWrapper from '~/components/section-wrapper';
import ContentContainer from '~/components/content-container';
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

    onTournamentClick({ id }) {
        this.props.router.push(`/tournament/${id}`);
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
            <div>
                <SectionWrapper>
                    <ContentContainer>
                        <h1>Registered tournaments</h1>
                    </ContentContainer>
                </SectionWrapper>
                <SectionWrapper>
                    <ContentContainer>
                        {loadingTournaments &&
                            <CircularProgress />
                        }
                        {!loadingTournaments && !tournaments.length &&
                            <p>No registered tournaments yet</p>
                        }
                        {tournaments.length > 0 &&
                            <List>
                                {tournaments.map((tournament, index) =>
                                    <ListItem
                                        key={index}
                                        onTouchTap={
                                            () => this.onTournamentClick(tournament)
                                        }
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
                    </ContentContainer>
                </SectionWrapper>
            </div>
        );
    }
}

OverviewPage.propTypes = {
    addTournament: PropTypes.func.isRequired,
    deleteTournament: PropTypes.func.isRequired,
    getTournaments: PropTypes.func.isRequired,
    loadingTournaments: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    router: routerShape,
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

export default connect(mapStateToProps, dispatchers)(
    withRouter(OverviewPage),
);
