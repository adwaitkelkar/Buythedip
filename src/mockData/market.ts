import { PricePoint } from '../types';
const seq = (start:number, deltas:number[]) => deltas.map((d,i)=>({date:`D${i+1}`, close: Math.round((start + deltas.slice(0,i+1).reduce((a,b)=>a+b,0))*100)/100}));
export const niftyHistory: PricePoint[] = seq(23000,[-200,-150,-300,100,-250,-200,120,-80,-220,150,-180,-120,100,-90,-50,70]);
export const crudeHistory: PricePoint[] = seq(104,[1,-2,-1,-1,-2,-1,-2,-1]);
export const nasdaqHistory: PricePoint[] = seq(18000,[-300,-200,-150,120,180,140,-80,160]);
export const dowHistory: PricePoint[] = seq(39000,[-350,-200,-180,150,180,120,-90,140]);
