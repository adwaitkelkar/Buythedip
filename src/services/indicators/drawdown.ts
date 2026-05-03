import { PricePoint } from '../../types';
export const drawdownFromHigh = (prices: PricePoint[]): number => {
  const high = Math.max(...prices.map(p=>p.close));
  const latest = prices[prices.length-1].close;
  return Math.round((((high-latest)/high)*100)*100)/100;
};
