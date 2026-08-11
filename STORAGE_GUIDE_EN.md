# User Data Storage Locations

Binance Auto Trader stores the application and user data separately. API settings, position state, logs, and backtest results remain available when the application is updated or replaced.

## macOS

Korean build:

```text
~/Library/Application Support/BinanceAutoTrader/Korean/
```

English build:

```text
~/Library/Application Support/BinanceAutoTrader/English/
```

In Finder, press `Command(⌘) + Shift(⇧) + G` and enter the path. `Library` and `.env` are hidden; press `Command(⌘) + Shift(⇧) + .` to show or hide hidden items.

## Windows

Korean build:

```text
%LOCALAPPDATA%\BinanceAutoTrader\Korean\
```

English build:

```text
%LOCALAPPDATA%\BinanceAutoTrader\English\
```

Enter the path in File Explorer's address bar or in the `Windows + R` Run dialog.

## Main files and folders

- `.env`: Binance API key, secret key, and Testnet selection
- `state/`: Position and runtime state
- `logs/`: Application logs
- `cache/`: Market-data cache
- `backtest_results/`: Backtest results
- `backtest_results_validation/`: Validation results
- `backtest_results_walkforward/`: Walk-forward results

The `.env` file is a plaintext file stored in the per-user data directory on the user's computer. It is not encrypted with macOS Keychain or Windows Credential Manager. Do not enable withdrawals on the API key; use only the minimum Futures permissions and an IP allowlist when possible.

[한국어 안내](STORAGE_GUIDE.md)
