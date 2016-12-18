import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CircularProgress from 'material-ui/CircularProgress';
import SectionWrapper from '~/components/section-wrapper';
import ContentContainer from '~/components/content-container';
import ResultsTable from '~/components/results-table';

import * as dispatchers from '~/dispatchers';

class TournamentPage extends Component {
    componentWillMount() {
        const {
            getPlayersForTournament,
            getTournaments,
            params,
            tournaments,
        } = this.props;

        if (!tournaments.length) {
            getTournaments();
        }

        getPlayersForTournament(params.id);
    }

    render() {
        const {
            params,
            playersById,
            tournaments,
            tournamentsLoading,
        } = this.props;

        const id = Number(params.id);
        const currentTournament = tournaments
            .find(t => t.id === id);

        const currentPlayers = playersById[id] || [];

        return (
            <div>
                <SectionWrapper>
                    <ContentContainer>
                        {tournamentsLoading &&
                            <CircularProgress />
                        }
                        {!tournamentsLoading && !currentTournament &&
                            <div>
                                <h2>{'I don\' know of that tournament'}</h2>
                                <p>
                                    Sorry, I {'couldn\'t'} find that tournament
                                    for you. It might have been deleted, or you
                                    clicked a faulty link.
                                </p>
                            </div>
                        }
                        {!tournamentsLoading && currentTournament &&
                            <div>
                                <h2>{`${currentTournament.name}'s players`}</h2>
                                <ResultsTable
                                    loading={false}
                                    players={currentPlayers}
                                />
                            </div>
                        }
                    </ContentContainer>
                </SectionWrapper>
            </div>
        );
    }
}

TournamentPage.propTypes = {
    getPlayersForTournament: PropTypes.func.isRequired,
    getTournaments: PropTypes.func.isRequired,
    params: PropTypes.shape({
        id: PropTypes.string.isRequired,
    }),
    playersById: PropTypes.shape({}),
    tournaments: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
        }),
    ).isRequired,
    tournamentsLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    playersById: state.tournaments.playersById,
    tournaments: state.tournaments.tournaments,
    tournamentsLoading: state.tournaments.metadata.pending,
});

export default connect(mapStateToProps, dispatchers)(TournamentPage);
