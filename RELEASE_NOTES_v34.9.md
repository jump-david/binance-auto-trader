# Binance Auto Trader v34.9

## 한국어

- Sweep·Validation 멀티프로세스 백테스트 작업 객체에 시점별 Dynamic Top N 판정 메서드를 연결했습니다.
- 4시간마다 계산된 Top N 목록은 기존에도 정상적으로 생성·기록됐지만, 작업 프로세스에서 진입 필터 호출이 누락되어 당시 Top N 밖의 종목이 결과에 포함될 수 있었습니다.
- 이제 각 진입 신호는 해당 UTC 4시간 버킷의 Top N에 포함된 경우에만 백테스트 후보로 유지됩니다.
- Top N 포함 종목은 허용하고 제외 종목은 차단하는 회귀 테스트를 추가했으며 전체 14개 테스트를 통과했습니다.
- 실거래 Top N 선정·갱신, 주문·청산, 포지션 관리, Trade History와 CSV 기록 로직은 변경하지 않았습니다.

한글·영문 Apple Silicon 앱, ZIP과 DMG는 Developer ID로 서명하고 Apple 공증을 완료했습니다. Windows 10/11 x64 설치 프로그램은 `Jeongin Park` 명의로 Authenticode 서명하고 SSL.com RFC 3161 SHA-256 타임스탬프를 적용했으며 Microsoft Defender 검사를 통과했습니다.

## English

- Connected the entry-time Dynamic Top N membership methods to the Sweep and Validation multiprocessing backtest workers.
- The 4-hour Top N snapshots were already calculated and recorded correctly, but the worker could skip the entry filter and include symbols that were outside the active bucket's Top N.
- Each entry signal is now retained only when its symbol belongs to the matching UTC 4-hour Top N bucket.
- Added regression coverage that accepts an included symbol and rejects an excluded symbol; all 14 tests pass.
- Live Top N selection and refresh, orders and exits, position management, Trade History, and CSV recording are unchanged.

Korean and English Apple Silicon apps, ZIP archives, and DMGs are Developer ID signed and Apple notarized. The Windows 10/11 x64 installers are Authenticode-signed by `Jeongin Park`, carry SSL.com RFC 3161 SHA-256 timestamps, and passed Microsoft Defender scanning.
