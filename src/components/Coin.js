import React from 'react';
import { formatPrice, numberWithCommas } from '../utils';

function PercentChange({ n }) {
    return (
        <div
            className={`${
                n >= 0 ? 'text-primary' : 'text-danger'
            } flex items-center flex-shrink-0 justify-center w-[75px]`}
        >
            {n ? `${n.toFixed(1)}%` : 0}
        </div>
    );
}

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
    // parse image path to get unique coin ID that gives access to the 7 day chart
    const coinChartID = image.split('images/')[1].split('/large')[0];

    return (
        <div className="flex justify-left border-t h-[60px] text-sm align-middle text-center w-min lg:w-full">
            <div className="w-[50px] px-5 flex items-center flex-shrink-0">
                <div>{market_cap_rank}</div>
            </div>
            <div className="flex items-center self-center justify-left lg:w-[350px] w-[100px] h-30 flex-shrink-0">
                <img className="sm:mr-5 mr-2" width="18" height="18" src={image} alt={name} />

                <div className="font-bold items-center w-[115px] text-left hidden lg:block">{name}</div>
                <div className="font-normal text-3x ml-2">{symbol ? symbol.toUpperCase() : ''}</div>
            </div>
            <div className="flex items-center lg:w-[150px] w-[100px] flex-shrink-0">{formatPrice(current_price)}</div>
            <PercentChange n={price_change_percentage_1h_in_currency} />
            <PercentChange n={price_change_percentage_24h_in_currency} />
            <PercentChange n={price_change_percentage_7d_in_currency} />
            <div className="flex items-center justify-center w-[155px] flex-shrink-0">
                {total_volume ? `$${numberWithCommas(total_volume)}` : 0}
            </div>
            <div className="flex items-center justify-center w-[155px] flex-shrink-0">
                {market_cap ? `$${numberWithCommas(market_cap)}` : 0}
            </div>
            <div className="flex items-center m-auto justify-center w-[185px] flex-shrink-0">
                <img src={`https://www.coingecko.com/coins/${coinChartID}/sparkline`} alt={`7 day ${name} chart`} />
            </div>
        </div>
    );
}

export default Coin;
