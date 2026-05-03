export interface Fund {name:string; drawdown:number; alpha:number; expense:number; rolling:number; aum:number; sharpe:number; sortino:number}
export const scoreFund = (f:Fund) => {
  let s=0;
  if(f.drawdown<=22) s+=25;
  if(f.alpha>=3) s+=25;
  if(f.expense<=1.0) s+=15;
  if(f.rolling>=70) s+=15;
  if(f.aum>=1000 && f.aum<=50000) s+=10;
  if(f.sharpe>=1 && f.sortino>=1.5) s+=10;
  return s;
};
