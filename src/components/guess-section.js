import React from 'react';
import {connect} from 'react-redux';
import {restart} from '../actions';
import GuessForm from './guess-form';

function GuessSection(props) {
    if(props.playing) {
        return (
            <div>
                <h3>{props.feedback}</h3>
                <GuessForm />
            </div>
        );
    }
    if(!props.playing) {
        return(
            <div>
                <h3>{props.feedback}</h3>
                <button onClick={() => props.dispatch(restart())}>Restart</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    playing: state.playing,
    feedback: state.feedback,
})

export default connect(mapStateToProps)(GuessSection);