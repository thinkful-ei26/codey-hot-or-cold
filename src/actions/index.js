export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
    type: ADD_GUESS,
    guess
})

export const RESTART = 'RESTART'
export const restart = () => ({
    type: RESTART,
})
