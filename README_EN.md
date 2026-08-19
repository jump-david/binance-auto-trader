# Binance Auto Trader

A Windows and macOS desktop application for automated trading on Binance USDⓈ-M Futures.

## Download

Download the latest notarized builds from this repository's **Releases** page.

- Windows Korean: `BinanceAutoTrader-v34.51.4-Korean-Windows-x64-Setup.exe`
- Windows English: `BinanceAutoTrader-v34.51.4-English-Windows-x64-Setup.exe`
- macOS Korean: `BinanceAutoTrader-v34.51.4-Korean-macOS-arm64.dmg`
- macOS English: `BinanceAutoTrader-v34.51.4-English-macOS-arm64.dmg`
- Platforms: Windows 10/11 x64 and Apple Silicon macOS arm64

Verify downloaded files with `SHA256SUMS.txt`.

```bash
shasum -a 256 -c SHA256SUMS.txt
```

## Security

- Signed with Developer ID and notarized by Apple
- API and secret keys remain in a local `.env` file on the user's Mac
- Withdrawal permission is not required
- Use only the minimum Futures permissions and enable an IP allowlist when possible

## Install

On Windows, run Setup. The installer is Authenticode-signed by `Jeongin Park`. On macOS, open the DMG, drag the app to `Applications`, and launch it.

See [User Data Storage Locations](STORAGE_GUIDE_EN.md) for the macOS and Windows locations of API settings, position state, logs, and backtest results.

## Documentation and test records

I publish what this bot does, including the runs where the hypothesis failed.

- [How it was built](https://medium.com/@jiaym/i-built-a-crypto-trading-bot-that-switches-strategy-based-on-volatility-then-ran-it-on-2-000-166f9f7eb14d) — regime routing, the three-timeframe entry engine, and what happens when the bot dies
- [First week on $2,000](https://medium.com/@jiaym/my-trading-bot-lost-money-for-five-straight-days-then-the-settings-stopped-changing-11d149274f69) — a live account, five losing days, and what changed when I stopped touching the settings
- [Backtest validation](https://medium.com/@jiaym/my-best-backtest-setting-had-a-profit-factor-of-0-00-out-of-sample-33b246c95e79) — my best in-sample configuration scored a profit factor of 0.00 out of sample
- [Reading a profit factor](https://medium.com/@jiaym/i-found-profit-factor-1-5-inside-a-strategy-that-lost-money-7b5febf158a5) — why 1.5 is not a pass mark, and what a trade count does to it

Full research notes, in Korean: [blog.naver.com/jump_david](https://blog.naver.com/jump_david)

## Risk notice

Cryptocurrency futures trading can result in substantial losses. This software does not guarantee profits. You are responsible for reviewing its configuration and orders and for all trading outcomes. Test thoroughly before using live funds.

[한국어 README](README.md)
