import React from 'react';

import useAPI from '../hooks/useAPI';
import '../assets/styles/_stats.scss';
import { formatPrice, numberWithCommas, percentage, intToString } from '../utils';
import Loading from './Loading';

function GlobalStats() {
    const { data, loading } = useAPI('https://api.coingecko.com/api/v3/global');

    if (loading || !data) return <Loading />;

    const {
        active_cryptocurrencies,
        total_market_cap,
        total_volume,
        market_cap_percentage,
        market_cap_change_percentage_24h_usd
    } = data.data;

    return (
        <div>
            <h1>Cryptocurrency Prices by Market Cap</h1>
            <p className="stats__description">{`The Global cryptocurrency market cap today is ${intToString(
                total_market_cap.usd
            )}, a ${percentage(
                market_cap_change_percentage_24h_usd
            )} change in the last 24 hours. Total cryptocurrency trading volume in the last day is at ${intToString(
                total_volume.usd
            )}. Bitcoin dominance is at ${percentage(
                market_cap_percentage.btc
            )} and Ethereum dominance is at ${percentage(
                market_cap_percentage.eth
            )}. CoinLizard is now tracking ${numberWithCommas(active_cryptocurrencies)} cryptocurrencies.`}</p>
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
                    <h1>{percentage(market_cap_percentage.btc)}</h1>
                    <h2>Bitcoin Market Cap Dominance</h2>
                </div>
                <div className="stats__coins">
                    <h1>{active_cryptocurrencies}</h1>
                    <h2># of Coins</h2>
                </div>
            </div>
        </div>
    );
}

export default GlobalStats;
