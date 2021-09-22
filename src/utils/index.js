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

export function percentage(p, hideRemainder) {
    if (!p) return p;
    if (hideRemainder) return `${Math.round(p)}%`;

    return `${p.toFixed(2)}%`;
}

export function intToString(labelValue) {
    if (Math.abs(Number(labelValue)) >= 1.0e12) {
        return `$${(Math.abs(Number(labelValue)) / 1.0e12).toFixed(2)} Trillion`;
    } else if (Math.abs(Number(labelValue)) >= 1.0e9) {
        return `$${(Math.abs(Number(labelValue)) / 1.0e9).toFixed(2)} Billion`;
    } else if (Math.abs(Number(labelValue)) >= 1.0e6) {
        return `$${(Math.abs(Number(labelValue)) / 1.0e6).toFixed(2)} Million`;
    } else if (Math.abs(Number(labelValue)) >= 1.0e3) {
        return `$${Math.round(Math.abs(Number(labelValue)) / 1.0e3)} Thousand`;
    } else {
        Math.abs(Number(labelValue));
    }
}
