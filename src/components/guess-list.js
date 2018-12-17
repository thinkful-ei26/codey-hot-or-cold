import React from 'react';
import {connect} from 'react-redux';

import '../css/guess-list.css';

function GuessList(props) {
    const guesses = props.guesses.map((guess,index) => {
        return (
            <li className="guess" key={index}>
                {guess}
            </li>
        );
    });
    return <ul className="guess-list">{guesses}</ul>
}

const mapStateToProps = state => ({
    guesses: state.guesses
});

export default connect(mapStateToProps)(GuessList);