import { calculateRsi } from '../services/indicators/rsi';
import { drawdownFromHigh } from '../services/indicators/drawdown';
import { niftyBuyScore, niftySellScore } from '../services/signals/niftySignalEngine';
import { scoreEtf } from '../services/recommendations/etfEngine';
import { scoreFund } from '../services/recommendations/mutualFundEngine';
const s={rsiPeriod:14,buyRsi:30,sellRsi:55,crudeThreshold:100,drawdownThreshold:12,mockMode:true};

test('rsi',()=>{ expect(calculateRsi([{date:'1',close:100},{date:'2',close:90},{date:'3',close:80},{date:'4',close:85},{date:'5',close:82},{date:'6',close:81},{date:'7',close:79},{date:'8',close:77},{date:'9',close:75},{date:'10',close:74},{date:'11',close:73},{date:'12',close:72},{date:'13',close:71},{date:'14',close:70},{date:'15',close:69}],14)).toBeLessThan(40);});
test('drawdown',()=>{ expect(drawdownFromHigh([{date:'1',close:100},{date:'2',close:80}])).toBe(20);});
test('nifty buy',()=>{ expect(niftyBuyScore({rsi:25,drawdown:15,crude:95,crudeFalling:true,usReversal:true,geo:'Neutral'},s)).toBeGreaterThanOrEqual(75);});
test('nifty sell',()=>{ expect(niftySellScore({rsi:60,crude:102,usWeak:true,geo:'Negative',recovered:true},s)).toBeGreaterThanOrEqual(70);});
test('etf scoring',()=>{ expect(scoreEtf({name:'x',symbol:'x',expense:0.1,trackingError:0.2,trackingDiff:0.1,aum:5000,liquidity:85,spread:0.1,reputation:9})).toBeGreaterThanOrEqual(90);});
test('fund scoring',()=>{ expect(scoreFund({name:'f',drawdown:20,alpha:5,expense:0.8,rolling:80,aum:8000,sharpe:1.2,sortino:1.8})).toBeGreaterThanOrEqual(80);});
