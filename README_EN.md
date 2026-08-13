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

## Risk notice

Cryptocurrency futures trading can result in substantial losses. This software does not guarantee profits. You are responsible for reviewing its configuration and orders and for all trading outcomes. Test thoroughly before using live funds.

[한국어 README](README.md)
