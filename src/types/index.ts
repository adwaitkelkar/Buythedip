export type SentimentLabel = 'Positive' | 'Neutral' | 'Negative';
export type AssetType = 'INDEX' | 'ETF' | 'STOCK' | 'MUTUAL_FUND' | 'COMMODITY' | 'NEWS';
export type AlertType = 'BUY_DIP' | 'BUY_SWING' | 'SELL_EXIT' | 'RISK_WARNING' | 'ETF_RECOMMENDATION' | 'MUTUAL_FUND_RECOMMENDATION' | 'NEWS_UPDATE' | 'EARNINGS_ALERT';

export interface PricePoint { date: string; close: number; }
export interface Alert {
  id: string; assetName: string; assetType: AssetType; alertType: AlertType; signalStrength: 'Low'|'Medium'|'High'; confidenceScore: number;
  triggerReason: string; supportingIndicators: string[]; timestamp: string; suggestedAction: string; riskWarning: string; read: boolean;
}
export interface Settings { rsiPeriod: number; buyRsi: number; sellRsi: number; crudeThreshold: number; drawdownThreshold: number; mockMode: boolean; }
