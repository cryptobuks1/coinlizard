import React from 'react';
import '../assets/styles/main.scss';
import 'tailwindcss/tailwind.css';
import Coins from './Coins';
import Header from './Header';

const App = () => (
    <div className="app__container">
        <Header />
        <Coins />
    </div>
);

export default App;
