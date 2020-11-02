import {
    GAMES_GENERATE_PRIME_NUMBERS,
    GAMES_GET_FIRST_NUMBER,
    GAMES_GET_SECOND_NUMBER,
    GAMES_RESET_CHOICE,
    GAMES_SAVE_CHOICE
} from './gamesType';

export const generatePrimeNumbers = payload => ({
    type: GAMES_GENERATE_PRIME_NUMBERS,
    payload
});

export const getFirstNumber = payload => ({
    type: GAMES_GET_FIRST_NUMBER,
    payload
});

export const getSecondNumber = payload => ({
    type: GAMES_GET_SECOND_NUMBER,
    payload
});

export const resetChoice = payload => ({
    type: GAMES_RESET_CHOICE,
    payload
});

export const saveChoice = payload => ({
    type: GAMES_SAVE_CHOICE,
    payload
});