import { PricePoint } from '../../types';
export const calculateRsi = (prices: PricePoint[], period = 14): number => {
  if (prices.length <= period) return 50;
  let gains = 0, losses = 0;
  for (let i = prices.length - period; i < prices.length; i++) {
    const diff = prices[i].close - prices[i - 1].close;
    if (diff >= 0) gains += diff; else losses -= diff;
  }
  if (losses === 0) return 100;
  const rs = (gains / period) / (losses / period);
  return Math.round((100 - 100 / (1 + rs)) * 100) / 100;
};
