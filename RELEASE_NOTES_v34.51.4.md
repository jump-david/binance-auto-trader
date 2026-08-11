# Binance Auto Trader v34.51.4

## 한국어

- macOS 종료 시 발생하던 무한 대기와 회전 커서 문제 수정
- 종료 중에도 화면 이벤트를 계속 처리하는 비차단 협력형 작업 정리 적용
- 종료 직전 포지션의 방향·수량·손절·익절·트레일링 상태를 원자적으로 저장
- 실제 Binance 포지션과 서버 측 보호 주문은 종료하지 않으며, 다음 실행 때 로컬 상태 복원 후 거래소와 동기화
- User Data Stream 정리 요청을 백그라운드 처리해 느린 네트워크가 앱 종료를 막지 않도록 개선
- 매매 진입·청산 전략 로직 변경 없음

## English

- Fixed the indefinite wait and spinning cursor that could occur while quitting on macOS
- Added cooperative, non-blocking worker shutdown so the UI event loop remains responsive
- Atomically saves direction, quantity, stop, take-profit, and trailing state immediately before exit
- Existing Binance positions and server-side protective orders remain open; local state is restored and synchronized with the exchange at the next launch
- Moved User Data Stream cleanup to a background task so a slow network cannot block application shutdown
- No entry or exit strategy logic changes
