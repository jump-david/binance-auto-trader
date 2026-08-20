# Binance Auto Trader v34.6

## 한국어

- 실거래와 백테스트의 Dynamic Top N을 동일한 기준으로 통일했습니다.
  - UTC 00/04/08/12/16/20시 경계
  - 직전 24시간의 완결된 4시간봉 6개
  - 동일 거래대금일 때 종목명 기준의 결정적 순위
- 백테스트 캔들 캐시의 내부 시간 공백을 자동으로 찾아 누락 구간을 복구합니다.
- Top N 후보가 요청 수보다 부족하면 잘못된 0건 스윕을 만들지 않고 데이터 오류를 명확히 알립니다.
- 각 Top N 선정 결과를 `topn_snapshots.jsonl`에 저장해 실거래와 백테스트를 사후 대조할 수 있습니다.
- 거래소 API에서 확인한 서버 측 청산도 거래 CSV에 기록하며, 재실행 후 중복 기록을 방지하는 영속 키를 적용했습니다.
- 거래 기록에 UTC·KST 시각, 시각 출처와 이벤트 출처를 추가하고 부분 청산 상태를 분리했습니다.
- 스윕 결과의 레짐 키 형식을 정규화해 유효한 결과가 `No trades`로 표시되는 문제를 수정했습니다.
- 앱의 `CFBundleShortVersionString`과 `CFBundleVersion`을 정식 버전 값으로 기록합니다.
- 한글·영문 Apple Silicon 앱과 DMG는 Developer ID로 서명하고 Apple 공증을 완료했습니다.

이번 릴리스는 기록·재현성·데이터 정합성 개선이 중심이며 전략 파라미터를 변경하지 않았습니다.

## English

- Aligned Dynamic Top N between live trading and backtests using one reproducible contract:
  - UTC 00/04/08/12/16/20 boundaries
  - exactly six completed 4-hour candles from the preceding 24 hours
  - deterministic symbol-name ordering for equal quote volume
- Added automatic detection and repair of internal gaps in the backtest candle cache.
- Stops with a clear data error instead of producing a misleading zero-trade Sweep when the Top N candidate universe is underfilled.
- Persists each market-selection decision to `topn_snapshots.jsonl` for live/backtest auditing.
- Persists exchange-confirmed server-side closes to trade CSV files and prevents duplicates across restarts with durable history keys.
- Added UTC/KST timestamps, time/event source fields, and a distinct partial-close status to trade records.
- Normalized regime keys in Sweep rendering so valid results no longer appear as `No trades`.
- Writes proper `CFBundleShortVersionString` and `CFBundleVersion` values into the macOS bundles.
- Korean and English Apple Silicon apps and DMGs are signed with Developer ID and notarized by Apple.

This release focuses on observability, reproducibility, and data consistency. Strategy parameters are unchanged.
