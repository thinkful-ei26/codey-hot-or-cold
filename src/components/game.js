import React from 'react';

import Header from './header';
import GuessList from './guess-list';
import GuessSection from './guess-section';  
import GuessCount from './guess-count';


export default function Game() {
    return (
        <div>
            <Header />
            <GuessSection />
            <GuessCount />
            <GuessList />
        </div>
    );
}
