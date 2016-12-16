import * as actions from '~/actions';

const initialState = {
    metadata: {
        pending: false,
    },
    tournaments: [],
};

export default function tournamentsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.TOURNAMENTS_REQUESTED: {
            return {
                ...state,
                metadata: { pending: true },
            };
        }
        case actions.TOURNAMENTS_RESPONDED: {
            return {
                ...state,
                metadata: { pending: false },
                tournaments: action.tournaments,
            };
        }
        default: {
            return state;
        }
    }
}
