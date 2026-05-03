# DipSignal

DipSignal is an Android-focused React Native (Expo + TypeScript) app for educational dip-opportunity tracking in Indian markets.

## Live App Link
Because this environment cannot publish to Expo/GitHub automatically, add your hosted link after deployment:
- **Expo web/preview link:** `https://expo.dev/@<your-username>/dipsignal` (replace after publish)
- **APK download link (GitHub Release):** `https://github.com/<your-org>/<your-repo>/releases`

> If you want, I can provide a follow-up step-by-step command runbook to publish to Expo and attach APK to a release.

## Demo Screenshots & Video
Sample media paths (add real captured files):
- `docs/media/dashboard.png`
- `docs/media/nifty-strategy.png`
- `docs/media/etf-recommendations.png`
- `docs/media/watchlist.png`
- `docs/media/mutual-fund-opportunities.png`
- `docs/media/alerts.png`
- `docs/media/settings.png`
- `docs/media/dipsignal-demo.mp4`

Media setup guide: `docs/media/README.md`.

## Important Disclaimer
This app is for educational and informational purposes only. It does **not** provide financial advice, guaranteed predictions, or guaranteed returns. All alerts are probability-based and include risk warnings.

## Features
- Dashboard for NIFTY 50, crude oil, NASDAQ, Dow Jones, and latest signal context.
- NIFTY 50 dip/sell/risk scoring logic (daily timeframe).
- Watchlist support (default: BSE, Solar Industries; extensible).
- ETF recommendation scoring for NIFTY 50 ETFs.
- Flexi-cap mutual fund recommendation scoring for long-term (5+ year) investors.
- Alerts model with BUY/SELL/RISK/ETF/MUTUAL_FUND/NEWS/EARNINGS types.
- Mock data mode (runs without API keys).
- Modular service architecture for future real API integrations.
- Unit tests for indicator/signal/recommendation and alert generation logic.
- Unit tests for indicator/signal/recommendation logic.

## Tech Stack
- React Native + Expo
- TypeScript
- React Navigation
- Zustand state store
- Jest (unit tests)

## Project Structure
- `src/components`
- `src/screens`
- `src/navigation`
- `src/services`
  - `dataProviders`
  - `indicators`
  - `sentiment`
  - `signals`
  - `alerts`
  - `recommendations`
- `src/store`
- `src/types`
- `src/utils`
- `src/mockData`
- `src/tests`

## Setup
```bash
npm install
cp .env.example .env
npm run start
```

## Environment Variables
See `.env.example`:
- `EXPO_PUBLIC_MOCK_MODE=true`
- `EXPO_PUBLIC_NEWS_API_KEY`
- `EXPO_PUBLIC_FINNHUB_API_KEY`
- `EXPO_PUBLIC_OPENAI_API_KEY`

## Mock Data Mode
Default is enabled. App runs fully with local mock market and scoring data.

## Run Tests
```bash
npm test
```

## Build Android APK
Local (requires Android toolchain):
```bash
npx expo run:android
```
Cloud build with EAS (recommended):
```bash
npm i -g eas-cli
eas login
eas build:configure
eas build --platform android --profile preview
```

## GitHub Actions APK Build
Workflow file: `.github/workflows/android-apk.yml`
- Trigger by push to `main/master` or manual dispatch.
- Artifacts uploaded as `dipsignal-build-output`.

## Manual GitHub + Release Commands
```bash
git init
git add .
git commit -m "feat: DipSignal"
gh repo create DipSignal --public --source=. --remote=origin --push
git branch -M main
git push -u origin main

# create release + upload apk once available
gh release create v1.0.0 --title "DipSignal v1.0.0" --notes "Initial release"
## GitHub Release with APK
1. Run build pipeline.
2. Download APK artifact from Actions.
3. Create release and upload APK asset.

## Signal Logic Summary
### NIFTY Buy Score (0-100)
- RSI below threshold (+30)
- Drawdown >= threshold (+25)
- Crude below threshold and falling (+15)
- US reversal signs (+15)
- Geopolitical not negative (+15)

### NIFTY Sell Score
- RSI above threshold (+30)
- Crude rising / above threshold (+20)
- US weakness (+20)
- Negative geopolitics (+20)
- Strong recovery from lows (+10)

### Stock Logic
- BUY_SWING when RSI oversold and sentiment supportive.
- SELL_EXIT when RSI overbought and risk/news weak.

### ETF Recommendation Logic
Weighted by expense ratio, tracking error, liquidity, spread, AUM, and reputation.

### Mutual Fund Logic
Weighted by drawdown control, alpha, expense ratio, rolling consistency, AUM reasonability, and Sharpe/Sortino.

## Future API Integrations
Plug-in interfaces are planned for:
- Yahoo Finance-compatible APIs
- Alpha Vantage
- Finnhub
- NewsAPI
- AMFI / Indian MF datasets
- OpenAI-compatible sentiment API

## Manual GitHub Commands (if GitHub access is unavailable)
```bash
# 1) Initialize Git
git init

# 2) Commit project
git add .
git commit -m "feat: initial DipSignal app scaffold"

# 3) Create GitHub repo (GitHub CLI)
gh repo create DipSignal --public --source=. --remote=origin --push

# 4) Push code
git branch -M main
git push -u origin main

# 5) Run GitHub Actions
# Push to main or use Actions tab -> Run workflow

# 6) Download APK artifact
# Actions tab -> workflow run -> Artifacts

# 7) Create GitHub release
gh release create v1.0.0 --title "DipSignal v1.0.0" --notes "Initial release"

# 8) Attach APK to release
gh release upload v1.0.0 ./app-release.apk
```
