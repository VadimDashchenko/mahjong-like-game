import {GAMES_GENERATE_PRIME_NUMBERS, GAMES_GET_FIRST_NUMBER, GAMES_GET_SECOND_NUMBER} from './gamesType';

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