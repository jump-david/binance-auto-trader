# Binance Auto Trader v34.51.4

## 한국어

- macOS 종료 시 발생하던 무한 대기와 회전 커서 문제 수정
- 종료 중에도 화면 이벤트를 계속 처리하는 비차단 협력형 작업 정리 적용
- 종료 직전 포지션의 방향·수량·손절·익절·트레일링 상태를 원자적으로 저장
- 실제 Binance 포지션과 서버 측 보호 주문은 종료하지 않으며, 다음 실행 때 로컬 상태 복원 후 거래소와 동기화
- User Data Stream 정리 요청을 백그라운드 처리해 느린 네트워크가 앱 종료를 막지 않도록 개선
- 매매 진입·청산 전략 로직 변경 없음
- Developer ID 서명과 Apple 공증을 완료한 DMG 설치 이미지 추가
- Chrome 다운로드 후 실제 macOS 최초 실행 확인 경로 검증 완료
- DMG를 권장 배포 형식으로 제공하며 ZIP은 보조 형식으로 유지
- Windows 10/11 x64용 한국어·영어 Setup 설치 프로그램 추가
- SSL.com Authenticode 코드 서명과 RFC 3161 타임스탬프 적용
- Microsoft Defender 검사와 SignTool 서명 검증 완료

## English

- Fixed the indefinite wait and spinning cursor that could occur while quitting on macOS
- Added cooperative, non-blocking worker shutdown so the UI event loop remains responsive
- Atomically saves direction, quantity, stop, take-profit, and trailing state immediately before exit
- Existing Binance positions and server-side protective orders remain open; local state is restored and synchronized with the exchange at the next launch
- Moved User Data Stream cleanup to a background task so a slow network cannot block application shutdown
- No entry or exit strategy logic changes
- Added Developer ID-signed and Apple-notarized DMG installer images
- Verified the real macOS first-launch flow after downloading with Chrome
- DMG is now the recommended distribution format; ZIP remains available as an alternative
- Added Korean and English Setup installers for Windows 10/11 x64
- Applied SSL.com Authenticode code signing with an RFC 3161 timestamp
- Completed Microsoft Defender scanning and SignTool signature verification
