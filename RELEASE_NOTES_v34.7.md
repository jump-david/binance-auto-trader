# Binance Auto Trader v34.7

## 한국어

- 앱이 먼저 감지한 청산과 Binance API에서 나중에 확인한 동일 청산이 Trade History와 CSV에 두 번 기록되던 문제를 수정했습니다.
- 로컬 청산은 먼저 `PENDING_API` 상태로 기록되고, 거래소 체결 내역이 도착하면 기존 행을 새로 추가하지 않고 같은 행에서 보정합니다.
- 최종 체결가·체결 수량·실현손익은 Binance API 확인값을 사용합니다.
- 앱이 판단한 청산 사유, 시장 레짐과 거래 사이클 정보는 거래소 확인 후에도 유지합니다.
- API 거래 키를 이용한 중복 방지와 재시작 후 멱등 처리를 강화했습니다.
- UTC·KST·거래소 체결 시각과 이벤트 출처 필드를 유지해 백테스트·실거래 대조가 가능하도록 했습니다.
- 오늘 이미 생성된 과거 CSV는 자동으로 다시 쓰거나 정리하지 않습니다. 새 버전 실행 이후 기록부터 새 조정 방식이 적용됩니다.
- v34.6의 Dynamic Top N 4시간 UTC 정합성, 캐시 공백 복구와 스윕 결과 표시 수정도 그대로 포함합니다.
- 전략 파라미터는 변경하지 않았습니다.

한글·영문 Apple Silicon 앱, ZIP과 DMG는 Developer ID로 서명하고 Apple 공증을 완료했습니다.
Windows 10/11 x64 한국어·영문 설치 프로그램은 SSL.com Authenticode 서명과 신뢰된 타임스탬프를 적용하고 Microsoft Defender 검사를 통과했습니다.

## English

- Fixed duplicate Trade History and CSV close records when a locally observed close was later confirmed by the Binance API.
- Local closes are first recorded as `PENDING_API`; when exchange fills arrive, the existing row is reconciled in place instead of appending another trade.
- Final fill price, filled quantity, and realized PnL use Binance-confirmed values.
- The bot's exit reason, market regime, and trade-cycle context are preserved after exchange reconciliation.
- Strengthened API trade-key de-duplication and restart-safe idempotency.
- Preserved UTC, KST, exchange fill time, and event-source fields for live/backtest auditing.
- Existing historical CSV files are not rewritten or cleaned automatically. The new reconciliation behavior applies to records created after upgrading.
- Includes the v34.6 Dynamic Top N 4-hour UTC alignment, candle-cache gap repair, and Sweep rendering fixes.
- Strategy parameters are unchanged.

Korean and English Apple Silicon apps, ZIP archives, and DMGs are Developer ID signed and Apple notarized.
Korean and English Windows 10/11 x64 installers are SSL.com Authenticode signed with a trusted timestamp and passed Microsoft Defender scanning.
