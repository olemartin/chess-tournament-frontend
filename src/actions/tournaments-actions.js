export const TOURNAMENTS_REQUESTED = 'TOURNAMENTS_REQUESTED';
export const tournamentsRequested = () => ({
    type: TOURNAMENTS_REQUESTED,
});

export const TOURNAMENTS_RESPONDED = 'TOURNAMENTS_RESPONDED';
export const tournamentsResponded = tournaments => ({
    tournaments,
    type: TOURNAMENTS_RESPONDED,
});
