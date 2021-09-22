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

    function PercentChange({ n, name }) {
        return (
            <div className={`${n >= 0 ? 'text-primary' : 'text-danger'} flex items-center justify-center w-[75px]`}>
                {n ? `${n.toFixed(1)}%` : 0}
            </div>
        );
    }

    return (
        <div className="flex justify-left border-t h-[60px] text-sm align-middle text-center">
            <div className="w-[50px] px-5 flex items-center">
                <div>{market_cap_rank}</div>
            </div>
            <div className="flex items-center self-center justify-left w-[350px] h-30">
                <img className="mr-5" width="18" src={image} alt={name} />

                <div className="font-bold items-center w-[115px] text-left">{name}</div>
                <div className="font-normal text-3x ml-2">{symbol ? symbol.toUpperCase() : ''}</div>
            </div>
            <div className="flex items-center w-[150px]">{formatPrice(current_price)}</div>
            <PercentChange n={price_change_percentage_1h_in_currency} name="coin__hr" />
            <PercentChange n={price_change_percentage_24h_in_currency} name="coin__24hr" />
            <PercentChange n={price_change_percentage_7d_in_currency} name="coin__week" />
            <div className="flex items-center justify-center w-[155px]">
                {total_volume ? `$${numberWithCommas(total_volume)}` : 0}
            </div>
            <div className="flex items-center justify-center w-[155px]">
                {market_cap ? `$${numberWithCommas(market_cap)}` : 0}
            </div>
            <div className="flex items-center m-auto">
                <img src={`https://www.coingecko.com/coins/${coinChartID}/sparkline`} />
            </div>
        </div>
    );
}

export default Coin;
