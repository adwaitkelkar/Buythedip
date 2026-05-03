import { createAlert, signalStrengthFromScore } from '../services/alerts/alertEngine';

test('signal strength mapping', () => {
  expect(signalStrengthFromScore(20)).toBe('Low');
  expect(signalStrengthFromScore(60)).toBe('Medium');
  expect(signalStrengthFromScore(85)).toBe('High');
});

test('alert object creation', () => {
  const a = createAlert({
    assetName: 'NIFTY 50',
    assetType: 'INDEX',
    alertType: 'BUY_DIP',
    signalStrength: 'High',
    confidenceScore: 80,
    triggerReason: 'RSI oversold + drawdown',
    supportingIndicators: ['RSI<30', 'Drawdown>12%'],
    suggestedAction: 'Possible buy-the-dip opportunity',
    riskWarning: 'Educational only; review risk before acting.'
  });
  expect(a.id.length).toBeGreaterThan(5);
  expect(a.read).toBe(false);
});
