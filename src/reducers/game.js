import {
    GAMES_GENERATE_PRIME_NUMBERS,
    GAMES_GET_FIRST_NUMBER,
    GAMES_GET_SECOND_NUMBER,
    GAMES_RESET_CHOICE,
    GAMES_SAVE_CHOICE
} from '../actions/gamesType';

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
                firstNumber: action.payload,
                numbers: state.numbers.map((item, i) => {
                    if(i === action.payload.i){
                        item.state = 'show'
                    }
                    else {
                        item.state = 'hide'
                    }
                    return item;
                })
            }
        case GAMES_GET_SECOND_NUMBER:
            return {
                ...state,
                secondNumber: action.payload,
                numbers: state.numbers.map((item, i) => {
                    if(i === action.payload.i){
                        item.state = 'show'
                    }
                    if(state.firstNumber.count === action.payload.count && item.state === 'show'){
                        item.chosen = true
                    }
                    return item;
                })
            }
        case GAMES_RESET_CHOICE:
            return {
                ...state,
                firstNumber: null,
                secondNumber: null,
                numbers: state.numbers.map((item, i) => {
                    if(item.state === 'show' || i === state.secondNumber.i){
                        item.state = 'hide'
                    }
                    return item;
                })
            }
        case GAMES_SAVE_CHOICE:
            return {
                ...state,
                numbers: state.numbers.map(item => {
                    if(item.state === 'show'){
                        item.chosen = true
                    }
                    return item;
                })
            }
        default:
            return state;
    }
}

export default reducer;