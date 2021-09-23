import React from 'react';
import '../assets/styles/main.scss';
import 'tailwindcss/tailwind.css';
import Coins from './Coins';
import Header from './Header';
import ScrollTop from './ScrollTop';
import MarketCapInfo from './MarketCapInfo';
import TrendingCoins from './TrendingCoins';

const App = () => (
    <div className="xl:w-[1300px] lg:w-[1000px] md:w-[768px] sm:w-[540px] w-full my-6 px-4 mx-auto">
        <Header />
        <Coins />
        <TrendingCoins />
        <MarketCapInfo />
        <ScrollTop />
    </div>
);

export default App;
