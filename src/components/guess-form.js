import React from 'react';
import './css/guess-form.css';

export default function GuessForm() {
    return (
        <form>
            <input type="text" name="guess" placeholder="" />
            <input type="submit" value="Guess" />
        </form>
    );
}