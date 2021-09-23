import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import useAPI from '../hooks/useAPI';
import Loading from './Loading';

const Coin = ({ name, small, price_btc }) => (
    <div className="rounded-md shadow-md py-4 mb-2 h-20 bg-white dark:bg-opacity-5 px-4 flex flex-row items-center flex-1 mr-2 max-w-[275px] mobile:max-w-none mobile:mx-0">
        <div className="mr-3">
            <img loading="lazy" className="h-9 w-9" src={small} alt={name} />
        </div>
        <div>
            <div className="text-base font-medium">{name}</div>
            <div className="text-gray-500 dark:text-gray-400 text-base">{price_btc.toFixed(2)}</div>
        </div>
    </div>
);

export default function TrendingCoins() {
    const { data, loading, error } = useAPI('https://api.coingecko.com/api/v3/search/trending');
    const [page, setPage] = useState(1);
    const [visibleCoins, setVisibleCoins] = useState([]);

    useEffect(() => {
        if (!data) return;
        const coins = data.coins;

        if (page === 1) {
            setVisibleCoins(coins.slice(0, 5));
        } else {
            setVisibleCoins(coins.slice(5));
        }
    }, [data, page]);

    if (!data || loading || error) return <Loading />;

    return (
        <div className="mb-16">
            <div class="py-4 mb-4 flex flex-row justify-between self-center tailwind-reset">
                <div class="text-2xl font-medium">Trending Coins</div>
                <div>
                    <span className="mr-5">{page}/2</span>
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(1)}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-full h-8 w-8 text-gray-700 bg-transparent hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-primary-500 focus:border-opacity-0 dark:text-white mr-1 dark:hover:bg-white dark:hover:bg-opacity-10 dark:border-white dark:border-opacity-10"
                    >
                        <FontAwesomeIcon icon={solid('angle-left')} size="xs" />
                    </button>
                    <button
                        disabled={page === 2}
                        onClick={() => setPage(2)}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-full h-8 w-8 text-gray-700 bg-transparent hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-primary-500 focus:border-opacity-0 dark:text-white mr-1 dark:hover:bg-white dark:hover:bg-opacity-10 dark:border-white dark:border-opacity-10"
                    >
                        <FontAwesomeIcon icon={solid('angle-right')} size="xs" />
                    </button>
                </div>
            </div>
            <div className="flex mobile:block">
                {visibleCoins.map((coin) => (
                    <Coin {...coin.item} key={coin.item.id} />
                ))}
            </div>
        </div>
    );
}
