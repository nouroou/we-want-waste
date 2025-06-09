export const formatCurrency = (amount: string | number): string => {
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    }).format(numericAmount);
};

export const getBinBagEstimate = (size: string): string => {
    const sizeNum = parseInt(size, 10);
    if (sizeNum <= 4) return '30-40 Bin Bags';
    if (sizeNum <= 6) return '50-60 Bin Bags';
    if (sizeNum <= 8) return '70-80 Bin Bags';
    if (sizeNum <= 10) return '90-100 Bin Bags';
    if (sizeNum <= 12) return '110-120 Bin Bags';
    return '130+ Bin Bags';
};