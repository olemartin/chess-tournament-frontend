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
    return (dispatch, getState) => {
        const { authString } = getState().user;
        server.addTournament({ tournament: { name, engine }, authString })
            .then(() => {
                dispatch(actions.showSnackbarMessage(
                    `Great! "${name}" was created successfully.`,
                ));
                getTournaments()(dispatch);
            });
    };
}

export function deleteTournament({ id }) {
    return (dispatch, getState) => {
        const { authString } = getState().user;
        server.deleteTournament({ authString, id })
            .then(() => {
                dispatch(actions.showSnackbarMessage(
                    'Tournament was removed successfully',
                ));
                getTournaments()(dispatch);
            });
    };
}
