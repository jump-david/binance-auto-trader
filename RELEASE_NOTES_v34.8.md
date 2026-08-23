# Binance Auto Trader v34.8

## 한국어

- 실거래 Dynamic Top N의 UTC 4시간 경계 갱신이 다른 캔들 캐시 작업과 겹칠 때 사라질 수 있던 문제를 수정했습니다.
- 실행 중인 캐시 작업이 있으면 4시간 갱신을 대기열에 보존하고, 기존 작업이 끝난 직후 우선 실행합니다.
- 현재 Top N 스냅샷이 최신 UTC 4시간 버킷보다 오래된 경우, 일반적인 경계 유예시간이 지나도 4시간 갱신을 계속 필요 상태로 유지합니다.
- 최신 Top N 스냅샷을 준비하지 못한 동안에는 오래된 종목 목록으로 신규 진입하지 않습니다. 신규 진입만 잠시 차단하고 60초 후 다시 시도하며, 기존 포지션 감시와 거래소 보호 주문은 계속 유지합니다.
- 실거래와 백테스트가 같은 UTC 4시간 단위의 거래대금 순위를 사용하도록 기존 v34.6 정합성 구조를 강화했습니다.
- 전략 파라미터, 주문·청산 로직, Trade History 조정, CSV 형식과 백테스트 계산은 변경하지 않았습니다.
- UTC 4시간 누락 복구와 실행 중 캐시 작업의 대기열 보존을 검증하는 회귀 테스트를 추가했고 총 13개 테스트를 통과했습니다.

한글·영문 Apple Silicon 앱, ZIP과 DMG는 Developer ID로 서명하고 Apple 공증을 완료했습니다.

한글·영문 Windows 10/11 x64 설치 프로그램을 추가했습니다. 앱 실행 파일과 설치 프로그램은 `Jeongin Park` 명의로 Authenticode 서명했으며 SSL.com RFC 3161 타임스탬프를 적용했습니다. 두 설치 프로그램은 Microsoft Defender 검사, 설치·업그레이드·제거·재설치, 사용자 데이터 보존 검증을 통과했습니다.

## English

- Fixed a live Dynamic Top N issue where a UTC 4-hour refresh could be discarded when another candle-cache worker was already running.
- A due 4-hour interval is now preserved in a pending queue and runs with priority immediately after the active cache job completes.
- If the current Top N snapshot is older than the active UTC 4-hour bucket, the 4-hour refresh remains due even after the ordinary boundary grace window.
- The bot no longer opens new positions from an expired universe. New entries are paused and retried after 60 seconds while existing positions and exchange-side protective orders continue to be monitored.
- Strengthened the v34.6 alignment that keeps live trading and backtesting on the same UTC 4-hour quote-volume ranking model.
- Strategy parameters, order and exit logic, Trade History reconciliation, CSV format, and backtest calculations are unchanged.
- Added regression coverage for missed UTC 4-hour recovery and pending-cache preservation; all 13 reproducibility tests pass.

Korean and English Apple Silicon apps, ZIP archives, and DMGs are Developer ID signed and Apple notarized.

Korean and English Windows 10/11 x64 installers are now available. The application executables and installers are Authenticode-signed by `Jeongin Park` with SSL.com RFC 3161 timestamps. Both installers passed Microsoft Defender scanning and install, upgrade, uninstall, reinstall, and user-data preservation validation.
