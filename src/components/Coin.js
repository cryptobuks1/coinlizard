import React from 'react';
import { formatPrice, numberWithCommas } from '../utils';

function Coin({
    market_cap_rank,
    market_cap,
    name,
    symbol,
    current_price,
    image,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    total_volume
}) {
    // parse image path to get unique coin ID that gives us access to the 7 day chart
    const coinChartID = image.split('images/')[1].split('/large')[0];

    return (
        <div className="coin__container">
            <div className="coin__rank">
                <div>{market_cap_rank}</div>
            </div>
            <div className="coin__name">
                <img src={image} alt={name} />
                <div>{name}</div>
                <div>{symbol ? symbol.toUpperCase() : ''}</div>
            </div>
            <div className="coin__price">{formatPrice(current_price)}</div>
            <div className={`${price_change_percentage_1h_in_currency >= 0 ? 'positive' : 'negative'} coin__hr`}>
                {price_change_percentage_1h_in_currency ? `${price_change_percentage_1h_in_currency.toFixed(1)}%` : 0}
            </div>
            <div className={`${price_change_percentage_24h_in_currency >= 0 ? 'positive' : 'negative'} coin__24hr`}>
                {price_change_percentage_24h_in_currency ? `${price_change_percentage_24h_in_currency.toFixed(1)}%` : 0}
            </div>
            <div className={`${price_change_percentage_7d_in_currency >= 0 ? 'positive' : 'negative'} coin__week`}>
                {price_change_percentage_7d_in_currency ? `${price_change_percentage_7d_in_currency.toFixed(1)}%` : 0}
            </div>
            <div className="coin__volume">{total_volume ? numberWithCommas(total_volume) : 0}</div>
            <div className="coin__cap">{market_cap ? numberWithCommas(market_cap) : 0}</div>
            <div className="coin__chart">
                <img src={`https://www.coingecko.com/coins/${coinChartID}/sparkline`} />
            </div>
        </div>
    );
}

export default Coin;
