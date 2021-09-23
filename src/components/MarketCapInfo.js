import React from 'react';

export default function MarketCapInfo() {
    return (
        <div className="mt-16">
            <h3 className="text-2xl font-medium mb-1">What is cryptocurrency market cap?</h3>
            <p className="my-4">
                Market cap is one of the most popular metric in the industry that is used to gauge the value of an
                asset. The market cap of a cryptocurrency is calculated based on the coin's total circulating supply
                multipled by the current price.
            </p>

            <h3 className="text-2xl font-medium mb-1">How can I use market cap?</h3>
            <p className="my-4">
                As a financial metric, market cap allows you to compare the total value of one cryptocurrency with
                another. Large-cap cryptocurrencies such as Bitcoin and Ethereum have a market cap of over $10 billion.
                They typically consists of projects that have demonstrated track record, have higher liquidity across
                exchanges, and less volatile when compared against mid and small cap cryptocurrencies.
            </p>
            <p className="my-4">
                While market cap is a simple and intuitive comparison metric, it does have its major drawbacks. Some
                cryptocurrency projects may appear to have inflated market cap through price swings and the tokenomics
                of their supply. As such, it is best to use this metric as a reference alongside other metrics such as
                trading volume, liquidity, fully diluted valuation, and fundamental during your research process.
            </p>
        </div>
    );
}
