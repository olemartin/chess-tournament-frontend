import { get, post, del } from 'fetchutils';

const API_ROOT = 'http://localhost:9000/rest'; // TODO: Make environment specific

const withAuthHeaders = authString => ({
    headers: { Authorization: `Basic ${authString}` },
});

export function getTournaments() {
    return get(`${API_ROOT}/tournament`);
}

export function addTournament({ authString, tournament }) {
    return post(
        `${API_ROOT}/tournament/new`,
        tournament,
        withAuthHeaders(authString),
    );
}

export function getPlayersForTournament(id) {
    return get(`${API_ROOT}/tournament/${id}/players`);
}

export function deleteTournament({ authString, id }) {
    return del(`${API_ROOT}/tournament/${id}`, {}, withAuthHeaders(authString));
}

export function verifyLogin(authString) {
    return get(`${API_ROOT}/user/verify`, {}, withAuthHeaders(authString));
}
