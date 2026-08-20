# Binance Auto Trader

A macOS desktop application for automated trading on Binance USDⓈ-M Futures.

## Download

Download the latest notarized builds from this repository's **Releases** page.

- Korean (recommended): `BinanceAutoTrader-v34.6-Korean-macOS-arm64.dmg`
- English (recommended): `BinanceAutoTrader-v34.6-English-macOS-arm64.dmg`
- ZIP archives remain available in Releases as an alternative format.
- Platform: Apple Silicon macOS (arm64)

Verify downloaded files with `SHA256SUMS.txt`.

v34.6 aligns live and backtest Dynamic Top N on completed 4-hour UTC buckets and adds automatic candle-cache gap repair, exchange-confirmed close persistence, UTC/KST audit fields, and more reliable Sweep result rendering.

```bash
shasum -a 256 -c SHA256SUMS.txt
```

## Security

- Signed with Developer ID and notarized by Apple
- API and secret keys remain in a local `.env` file on the user's Mac
- Withdrawal permission is not required
- Use only the minimum Futures permissions and enable an IP allowlist when possible

## Install

Open the DMG, drag the app to `Applications`, and launch it. On first launch, macOS displays its normal downloaded-app confirmation. Confirm that the dialog says Apple checked the app for malicious software, then click **Open**.

See [User Data Storage Locations](STORAGE_GUIDE_EN.md) for the macOS and Windows locations of API settings, position state, logs, and backtest results.

## Risk notice

Cryptocurrency futures trading can result in substantial losses. This software does not guarantee profits. You are responsible for reviewing its configuration and orders and for all trading outcomes. Test thoroughly before using live funds.

[한국어 README](README.md)
