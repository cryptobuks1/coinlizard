import React from 'react';

import useAPI from '../hooks/useAPI';
import { formatPrice, numberWithCommas, percentage, intToString } from '../utils';
import Loading from './Loading';
import { Percent } from './Percent';

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

    const capBorderColor = market_cap_change_percentage_24h_usd >= 0 ? 'border-primary' : 'border-red-500';
    const volumeBorderColor = total_volume.usd >= 0 ? 'border-primary' : 'border-red-500';

    return (
        <div>
            <h1 className="text-xl mr-2 pb-0 mb-0 text-gray-700 font-bold dark:text-white md:text-2xl">
                Cryptocurrency Prices by Market Cap
            </h1>

            <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">
                {`The Global cryptocurrency market cap today is ${intToString(total_market_cap.usd)}, a `}
                <Percent p={market_cap_change_percentage_24h_usd} />{' '}
                {` change in the last 24 hours. Total cryptocurrency trading volume in the last day is at ${intToString(
                    total_volume.usd
                )}. Bitcoin dominance is at ${percentage(
                    market_cap_percentage.btc
                )} and Ethereum dominance is at ${percentage(
                    market_cap_percentage.eth
                )}. CoinLizard is now tracking ${numberWithCommas(active_cryptocurrencies)} cryptocurrencies.`}
            </p>

            <div className="lg:grid lg:grid-flow-col lg:grid-cols-4 my-4">
                <div
                    className={`border-l-8 ${capBorderColor} h-20 p-4 rounded shadow-md mt-3 lg:mt-0 lg:mr-4 dark:bg-white dark:bg-opacity-5`}
                >
                    <h1 className="text-xl">{formatPrice(total_market_cap.usd, true)}</h1>
                    <h2 className="text-sm text-gray-500">Market Capitalization</h2>
                </div>
                <div
                    className={`border-l-8 ${volumeBorderColor} h-20 p-4 rounded shadow-md mt-3 lg:mt-0 lg:mr-4 dark:bg-white dark:bg-opacity-5`}
                >
                    <h1 className="text-xl">{formatPrice(total_volume.usd, true)}</h1>
                    <h2 className="text-sm text-gray-500">24h Trading Volume</h2>
                </div>
                <div className="border-l-8 border-gray-500 h-20 p-4 rounded shadow-md mt-3 lg:mt-0 lg:mr-4 dark:bg-white dark:bg-opacity-5">
                    <h1 className="text-xl">{percentage(market_cap_percentage.btc)}</h1>
                    <h2 className="text-sm text-gray-500">Bitcoin Market Cap Dominance</h2>
                </div>
                <div className="border-l-8 border-gray-500 h-20 p-4 rounded shadow-md mt-3 lg:mt-0 dark:bg-white dark:bg-opacity-5">
                    <h1 className="text-xl">{active_cryptocurrencies}</h1>
                    <h2 className="text-sm text-gray-500"># of Coins</h2>
                </div>
            </div>
        </div>
    );
}

export default GlobalStats;
