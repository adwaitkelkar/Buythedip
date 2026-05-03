import { Alert } from '../../types';

export const createAlert = (input: Omit<Alert, 'id' | 'timestamp' | 'read'>): Alert => ({
  ...input,
  id: `${input.assetType}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
  timestamp: new Date().toISOString(),
  read: false
});

export const signalStrengthFromScore = (score: number): 'Low' | 'Medium' | 'High' => {
  if (score >= 75) return 'High';
  if (score >= 50) return 'Medium';
  return 'Low';
};
