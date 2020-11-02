import {GAMES_GENERATE_PRIME_NUMBERS, GAMES_GET_FIRST_NUMBER, GAMES_GET_SECOND_NUMBER} from '../actions/gamesType';

const initialState = {
    numbers: [],
    firstNumber: null,
    secondNumber: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GAMES_GENERATE_PRIME_NUMBERS:
            return {
                ...state,
                numbers: action.payload
            }
        case GAMES_GET_FIRST_NUMBER:
            return {
                ...state,
                firstNumber: action.payload
            }
        case GAMES_GET_SECOND_NUMBER:
            return {
                ...state,
                secondNumber: action.payload
            }
        default:
            return state;
    }
}

export default reducer;