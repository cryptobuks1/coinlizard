import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import Coin from './Coin';
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

    const TableHead = () => (
        <div className="w-min xl:w-full mx-auto flex items-center h-45 border-t bg-tableGray text-tableGray sticky top-0">
            <h1 className="w-[50px] py-3 text-sm text-center">#</h1>
            <h1 className="lg:w-[350px] w-[100px] py-3 text-sm text-left">Coin</h1>
            <h1 className="lg:w-[150px] w-[100px] py-3 text-sm text-left">Price</h1>
            <h1 className="w-[75px] py-3 text-sm text-center">1h</h1>
            <h1 className="w-[75px] py-3 text-sm text-center">24h</h1>
            <h1 className="w-[75px] py-3 text-sm text-center">7d</h1>
            <h1 className="w-[155px] py-3 text-sm text-center">24h Volume</h1>
            <h1 className="w-[155px] py-3 text-sm text-center">Mkt Cap</h1>
            <h1 className="w-[185px] py-3 text-sm text-center">Last 7 Days</h1>
        </div>
    );

    return (
        <div className="mt-5">
            <GlobalStats />
            <div className="mobile:overflow-auto mobile:h-[1000px]">
                <TableHead />
                <div>{loading || !data ? <Loading /> : data.map((coin) => <Coin {...coin} key={coin.id} />)}</div>
            </div>
            <div className="my-1 flex justify-between">
                <button
                    className="flex justify-between cursor-pointer rounded bg-dark border px-2 py-2 items-center hover:bg-primary hover:border-primary transition-all hover:text-primary disabled:text-[#6c757d] disabled:bg-white disabled:cursor-auto disabled:border-[#dee2e6]"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    <FontAwesomeIcon icon={solid('chevron-left')} size="xs" />
                    <div className="ml-2">Prev</div>
                </button>
                <button
                    className="flex justify-between cursor-pointer rounded bg-dark border px-2 py-2 items-center hover:bg-primary hover:border-primary transition-all hover:text-primary disabled:text-[#6c757d] disabled:bg-white disabled:cursor-auto disabled:border-[#dee2e6]"
                    onClick={() => setPage(page + 1)}
                >
                    <div className="mr-2">Next</div>
                    <FontAwesomeIcon icon={solid('chevron-right')} size="xs" />
                </button>
            </div>
        </div>
    );
}

export default Coins;
