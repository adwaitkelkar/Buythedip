export interface Etf {name:string; symbol:string; expense:number; trackingError:number; trackingDiff:number; aum:number; liquidity:number; spread:number; reputation:number}
export const scoreEtf = (e:Etf) => {
  let s=0;
  if(e.expense<=0.2) s+=25;
  if(e.trackingError<=0.3) s+=25;
  if(e.liquidity>=70) s+=20;
  if(e.spread<=0.15) s+=15;
  if(e.aum>=2000) s+=10;
  if(e.reputation>=7) s+=5;
  return s;
};
