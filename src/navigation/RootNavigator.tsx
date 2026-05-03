import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen, PlaceholderScreen } from '../screens/SimpleScreens';
const Tab = createBottomTabNavigator();
export const RootNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown:true}}>
    <Tab.Screen name='Dashboard' component={DashboardScreen}/>
    <Tab.Screen name='NIFTY Strategy'>{()=> <PlaceholderScreen title='NIFTY 50 Strategy' />}</Tab.Screen>
    <Tab.Screen name='ETF'>{()=> <PlaceholderScreen title='NIFTY 50 ETF Recommendations' />}</Tab.Screen>
    <Tab.Screen name='Watchlist'>{()=> <PlaceholderScreen title='Watchlist & Stock Detail' />}</Tab.Screen>
    <Tab.Screen name='Mutual Funds'>{()=> <PlaceholderScreen title='Mutual Fund Opportunities' />}</Tab.Screen>
    <Tab.Screen name='Alerts'>{()=> <PlaceholderScreen title='Alerts' />}</Tab.Screen>
    <Tab.Screen name='Settings'>{()=> <PlaceholderScreen title='Settings' />}</Tab.Screen>
  </Tab.Navigator>
);
