import * as actions from '~/actions';
import * as server from '~/api/server';

export function getTournaments() {
    return (dispatch) => {
        dispatch(actions.tournamentsRequested());

        return server.getTournaments()
            .then(tournaments => dispatch(actions.tournamentsResponded(tournaments)));
    };
}

export function addTournament({ name, engine }) {
    return () => server.addTournament({ name, engine })
        .then(getTournaments());
}
