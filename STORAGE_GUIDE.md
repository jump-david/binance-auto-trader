# 사용자 데이터 저장 위치

Binance Auto Trader는 앱 실행파일과 사용자 데이터를 분리해 저장합니다. 앱을 업데이트하거나 교체해도 API 설정, 포지션 상태, 로그와 백테스트 결과가 유지됩니다.

## macOS

한글판:

```text
~/Library/Application Support/BinanceAutoTrader/Korean/
```

영문판:

```text
~/Library/Application Support/BinanceAutoTrader/English/
```

Finder에서 `Command(⌘) + Shift(⇧) + G`를 누르고 위 경로를 입력하면 바로 열 수 있습니다. `Library`와 `.env`는 숨겨져 있으며, 숨김 항목은 `Command(⌘) + Shift(⇧) + .`으로 표시하거나 숨길 수 있습니다.

## Windows

한글판:

```text
%LOCALAPPDATA%\BinanceAutoTrader\Korean\
```

영문판:

```text
%LOCALAPPDATA%\BinanceAutoTrader\English\
```

파일 탐색기 주소 표시줄 또는 `Windows + R` 실행창에 위 경로를 입력하면 바로 열 수 있습니다.

## 주요 파일과 폴더

- `.env`: Binance API Key, Secret Key, Testnet 선택
- `state/`: 포지션 및 실행 상태
- `logs/`: 실행 로그
- `cache/`: 시세 데이터 캐시
- `backtest_results/`: 백테스트 결과
- `backtest_results_validation/`: 검증 결과
- `backtest_results_walkforward/`: Walk-forward 결과

`.env`는 사용자 컴퓨터의 사용자 전용 데이터 폴더에 저장되는 평문 파일입니다. macOS Keychain이나 Windows Credential Manager로 암호화되는 방식은 아닙니다. API 키에는 출금 권한을 부여하지 말고, 선물 거래에 필요한 최소 권한과 IP 제한을 사용하는 것을 권장합니다.

[English guide](STORAGE_GUIDE_EN.md)
