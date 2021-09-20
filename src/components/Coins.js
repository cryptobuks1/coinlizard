import React, { useEffect, useState } from 'react';

import Coin from './Coin';
import '../assets/styles/_coins.scss';

function Coins() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    async function getCoins() {
        const response = await fetch(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=1h,24h,7d'
        );
        const coins = response.json();

        return coins;
    }

    useEffect(async () => {
        getCoins().then((coins) => {
            console.log(coins);
            setLoading(false);
            if (coins) setCoins(coins);
        });
    }, []);

    return (
        <div className="coins__container">
            <div className="coins__table">
                <div className="coins__header">
                    <h1 className="coins__header--rank">#</h1>
                    <h1 className="coins__header--name">Coin</h1>
                    <h1 className="coins__header--price">Price</h1>
                    <h1 className="coins__header--hour">1h</h1>
                    <h1 className="coins__header--day">24h</h1>
                    <h1 className="coins__header--week">7d</h1>
                    <h1 className="coins__header--volume">24h Volume</h1>
                    <h1 className="coins__header--cap">Mkt Cap</h1>
                    <h1 className="coins__header--lastweek">Last 7 Days</h1>
                </div>
                {loading ? 'loading' : coins.map((coin) => <Coin {...coin} key={coin.id} />)}
            </div>
        </div>
    );
}

export default Coins;
