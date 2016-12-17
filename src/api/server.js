import { get, post } from 'fetchutils';

const API_ROOT = 'http://localhost:9000/rest';

export function getTournaments() {
    return get(`${API_ROOT}/tournament`);
}

export function addTournament(tournament) {
    return post(`${API_ROOT}/tournament/new`, tournament);
}

export function verifyLogin(authString) {
    return get(`${API_ROOT}/user/verify`, {}, {
        headers: { Authentication: `Basic ${authString}` },
    });
}
