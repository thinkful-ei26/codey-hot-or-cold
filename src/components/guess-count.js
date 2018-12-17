import React from 'react';
import {connect} from 'react-redux';

import '../css/guess-count.css'

function GuessCount(props) {
    return (
        <div>Guesses: {props.count}</div>
    );
}

const mapStateToProps = state => ({
    count: state.count
})

export default connect(mapStateToProps)(GuessCount);