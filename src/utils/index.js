export function formatPrice(price, hideRemainder) {
    if (!price) return price;

    const remainder = price.toString().split('.')[1];
    const fractionalDigits = remainder && !hideRemainder ? price.toString().split('.')[1].length : 0;

    const maximumFractionDigits = fractionalDigits > 10 ? 10 : fractionalDigits;
    const minimumFractionDigits = fractionalDigits < 2 ? 0 : fractionalDigits;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits,
        maximumFractionDigits
    });

    return formatter.format(price);
}

export function numberWithCommas(x) {
    if (!x) return x;

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
