import React from 'react';
import '../assets/styles/main.scss';
import 'tailwindcss/tailwind.css';
import Coins from './Coins';
import Header from './Header';
import ScrollTop from './ScrollTop';

const App = () => (
    <div className="xl:w-[1300px] lg:w-[960px] md:w-[768px] sm:w-[540px] sm:px-0 w-full my-6 px-4 mx-auto">
        <Header />
        <Coins />
        <ScrollTop />
    </div>
);

export default App;
