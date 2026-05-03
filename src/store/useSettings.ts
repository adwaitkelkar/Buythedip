import { create } from 'zustand';
import { Settings } from '../types';
export const useSettings = create<{settings:Settings}> (()=>({settings:{rsiPeriod:14,buyRsi:30,sellRsi:55,crudeThreshold:100,drawdownThreshold:12,mockMode:true}}));
