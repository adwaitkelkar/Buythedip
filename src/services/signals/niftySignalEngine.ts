import { Settings } from '../../types';
export const niftyBuyScore = (i:{rsi:number;drawdown:number;crude:number;crudeFalling:boolean;usReversal:boolean;geo:'Positive'|'Neutral'|'Negative'}, s:Settings)=> {
  let score=0;
  if(i.rsi < s.buyRsi) score+=30;
  if(i.drawdown >= s.drawdownThreshold) score+=25;
  if(i.crude < s.crudeThreshold && i.crudeFalling) score+=15;
  if(i.usReversal) score+=15;
  if(i.geo !== 'Negative') score+=15;
  return score;
};
export const niftySellScore = (i:{rsi:number;crude:number;usWeak:boolean;geo:'Positive'|'Neutral'|'Negative';recovered:boolean}, s:Settings)=> {
  let score=0;
  if(i.rsi > s.sellRsi) score+=30;
  if(i.crude >= s.crudeThreshold) score+=20;
  if(i.usWeak) score+=20;
  if(i.geo==='Negative') score+=20;
  if(i.recovered) score+=10;
  return score;
};
