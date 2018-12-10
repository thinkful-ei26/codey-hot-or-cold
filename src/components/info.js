import React from 'react';
import GuessList from './guess-list';

export default function Info() {
    return (
        <section>
            <h3>Previous tries:</h3>
            <GuessList />
        </section>
        
    );
    
}