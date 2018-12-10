import React from 'react';

import Header from './header';
import Guess from './guess';
import Info from './info'

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correctNumber: Math.floor(Math.random() * 100) + 1
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Guess />
                <Info />
            </div>
        )
    }
}
