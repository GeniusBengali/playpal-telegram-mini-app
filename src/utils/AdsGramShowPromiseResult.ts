export interface AdsGramShowPromiseResult {
  done: boolean; // true if user watch till the end or close it in interstitial format, otherwise false
  description: string; // event description
  state: 'load' | 'render' | 'playing' | 'destroy'; // banner state
  error: boolean; // true if event was emitted due to error, otherwise false
}