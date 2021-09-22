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
        <div className="mt-5">
            <GlobalStats />
            <div className="overflow-auto">
                <div className="flex items-center h-45 border-t w-min md:w-full">
                    <h1 className="w-[50px] py-3 text-sm text-center">#</h1>
                    <h1 className="lg:w-[350px] w-[100px] py-3 text-sm text-left">Coin</h1>
                    <h1 className="lg:w-[150px] w-[100px] py-3  text-sm text-left">Price</h1>
                    <h1 className="w-[75px] py-3 text-sm text-center">1h</h1>
                    <h1 className="w-[75px] py-3 text-sm text-center">24h</h1>
                    <h1 className="w-[75px] py-3 text-sm text-center">7d</h1>
                    <h1 className="w-[155px] py-3  text-sm text-center">24h Volume</h1>
                    <h1 className="w-[155px] py-3 text-sm text-center">Mkt Cap</h1>
                    <h1 className="w-[185px] py-3 text-sm text-center">Last 7 Days</h1>
                </div>
                {loading || !data ? <Loading /> : data.map((coin) => <Coin {...coin} key={coin.id} />)}
            </div>
            <div className="my-1 flex justify-between">
                <button className="pagination" onClick={() => setPage(page - 1)} disabled={page === 1}>
                    &#8249; Prev
                </button>
                <button className="pagination" onClick={() => setPage(page + 1)}>
                    Next &#8250;
                </button>
            </div>
        </div>
    );
}

export default Coins;
