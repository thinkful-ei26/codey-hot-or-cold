import React from 'react';
import {connect} from 'react-redux';
import {addGuess} from '../actions';

import '../css/guess-form.css';

class GuessForm extends React.Component {
   render() {
        return (
            <form onSubmit={event => event.preventDefault()}>
                <input ref={input => (this.userGuess = input)} type="text" id="userGuess" maxLength="3" autoComplete="off" required />
                <button type="button" onClick={() => this.props.dispatch(addGuess(this.userGuess.value))}>Guess</button>
            </form>
        );
   }
    
    
}

export default connect()(GuessForm);