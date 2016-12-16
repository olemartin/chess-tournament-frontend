import { get } from 'fetchutils';

const API_ROOT = 'http://localhost:9000/rest';

export function getTournaments() {
    return get(`${API_ROOT}/tournament`);
}
