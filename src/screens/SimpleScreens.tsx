import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { niftyHistory, crudeHistory, nasdaqHistory, dowHistory } from '../mockData/market';
import { calculateRsi } from '../services/indicators/rsi';
import { drawdownFromHigh } from '../services/indicators/drawdown';
import { useSettings } from '../store/useSettings';

export const DashboardScreen = () => {
  const s = useSettings().settings;
  const rsi = calculateRsi(niftyHistory, s.rsiPeriod); const dd = drawdownFromHigh(niftyHistory);
  return <ScrollView style={styles.c}><Text style={styles.h}>DipSignal Dashboard</Text><Card t='Disclaimer' v='Educational only. Signals are probability-based and include risk warnings.'/><Card t='NIFTY RSI' v={String(rsi)}/><Card t='NIFTY Drawdown %' v={String(dd)}/><Card t='Crude' v={String(crudeHistory.at(-1)?.close)}/><Card t='NASDAQ' v={String(nasdaqHistory.at(-1)?.close)}/><Card t='Dow Jones' v={String(dowHistory.at(-1)?.close)}/></ScrollView>;
};
export const PlaceholderScreen = ({title}:{title:string}) => <View style={styles.c}><Text style={styles.h}>{title}</Text><Text>Mock mode supported. Configure thresholds in Settings.</Text></View>;
const Card = ({t,v}:{t:string;v:string}) => <View style={styles.card}><Text style={styles.t}>{t}</Text><Text>{v}</Text></View>;
const styles = StyleSheet.create({c:{flex:1,padding:16,backgroundColor:'#F4F7FB'},h:{fontSize:22,fontWeight:'700',marginBottom:12},card:{backgroundColor:'#fff',padding:12,borderRadius:10,marginBottom:10},t:{color:'#2952CC',fontWeight:'600'}});
