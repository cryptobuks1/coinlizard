import React, { useEffect, useState } from 'react';

import Coin from './Coin';
import '../assets/styles/_coins.scss';
import GlobalStats from './GlobalStats';
import useAPI from '../hooks/useAPI';
import Loading from './Loading';

function Coins() {
    const [page, setPage] = useState(1);
    const [url, setUrl] = useState(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=1h,24h,7d&page=${page}`
    );
    const { data, loading } = useAPI(url);

    useEffect(() => {
        setUrl(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=1h,24h,7d&page=${page}`
        );
    }, [page]);

    return (
        <div className="coins__container">
            <GlobalStats />
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
                {loading || !data ? <Loading /> : data.map((coin) => <Coin {...coin} key={coin.id} />)}
                <div className="coins__controls">
                    <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                        &#8249; Previous
                    </button>
                    <button onClick={() => setPage(page + 1)}>Next &#8250;</button>
                </div>
            </div>
        </div>
    );
}

export default Coins;
