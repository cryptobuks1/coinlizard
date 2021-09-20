import React from 'react';

import useAPI from '../hooks/useAPI';
import '../assets/styles/_stats.scss';
import { formatPrice } from '../utils';

function GlobalStats() {
    const { data, loading } = useAPI('https://api.coingecko.com/api/v3/global');

    if (loading || !data) return 'loading';

    const { active_cryptocurrencies, total_market_cap, total_volume, market_cap_percentage } = data.data;

    return (
        <div className="stats__container">
            <div className="stats__cap">
                <h1>{formatPrice(total_market_cap.usd, true)}</h1>
                <h2>Market Capitalization</h2>
            </div>
            <div className="stats__volume">
                <h1>{formatPrice(total_volume.usd, true)}</h1>
                <h2>24h Trading Volume</h2>
            </div>
            <div className="stats__btc">
                <h1>{`${market_cap_percentage.btc.toFixed(2)}%`}</h1>
                <h2>Bitcoin Market Cap Dominance</h2>
            </div>
            <div className="stats__coins">
                <h1>{active_cryptocurrencies}</h1>
                <h2># of Coins</h2>
            </div>
        </div>
    );
}

export default GlobalStats;
