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

## Tech Stack
- React Native + Expo
- TypeScript
- React Navigation
- Zustand state store
- Jest (unit tests)

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

## Run Tests
```bash
npm test
```

## Build Android APK
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
gh release upload v1.0.0 ./app-release.apk
```
