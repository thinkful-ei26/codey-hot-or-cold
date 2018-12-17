import {ADD_GUESS, RESTART} from '../actions/index';

const initialState = {
    correctNumber: Math.floor(Math.random() * 100) + 1,
    guesses: [],
    feedback: 'Make a guess!',
    playing: true,
    count: 0
}

export const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_GUESS:
            let message;
            let isPlaying = true;
            if(state.guesses) {
                message = action.guess + ' is Hotter!';
            }
            if(Math.abs(state.correctNumber - action.guess) < Math.abs(state.correctNumber - state.guesses[0])) {
                message = action.guess + ' is Hotter!';
            }
            if(Math.abs(state.correctNumber - action.guess) > Math.abs(state.correctNumber - state.guesses[0])) {
                message = action.guess + ' is Colder!';
            }
            if(state.correctNumber == action.guess) {
                message= action.guess + ' was the number!!!';
                isPlaying = false;
            }
            return Object.assign({}, state, {
                guesses: [action.guess, ...state.guesses],
                count: state.count + 1,
                feedback: message,
                playing: isPlaying
            });
        case RESTART:
            return Object.assign({}, state, {
                correctNumber: Math.floor(Math.random() * 100) + 1,
                guesses: [],
                feedback: 'Make a guess!',
                playing: true,
                count: 0
            });
        default:
            return state
    }
}