export const TOURNAMENTS_REQUESTED = 'TOURNAMENTS_REQUESTED';
export const tournamentsRequested = () => ({
    type: TOURNAMENTS_REQUESTED,
});

export const TOURNAMENTS_RESPONDED = 'TOURNAMENTS_RESPONDED';
export const tournamentsResponded = tournaments => ({
    tournaments,
    type: TOURNAMENTS_RESPONDED,
});

export const PLAYERS_FOR_TOURNAMENT_REQUESTED = 'PLAYERS_FOR_TOURNAMENT_REQUESTED';
export const playersForTournamentRequested = () => ({
    type: PLAYERS_FOR_TOURNAMENT_REQUESTED,
});

export const PLAYERS_FOR_TOURNAMENT_RECEIVED = 'PLAYERS_FOR_TOURNAMENT_RECEIVED';
export const playersForTournamentReceived = ({ players, tournamentId }) => ({
    players,
    tournamentId,
    type: PLAYERS_FOR_TOURNAMENT_RECEIVED,
});
