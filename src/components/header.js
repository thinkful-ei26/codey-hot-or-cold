import React from 'react';
import './css/header.css';

export default function Header() {
    return (
        <header>
            <h1><span className="red">HOT</span> or <span className="blue">COLD</span></h1>
            <hr></hr>
        </header>
    );
}