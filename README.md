# Binance Auto Trader

바이낸스 USDⓈ-M 선물 자동매매를 위한 Windows·macOS 데스크톱 애플리케이션입니다.

## 다운로드

공증된 최신 실행 파일은 이 저장소의 **Releases**에서 내려받을 수 있습니다.

- Windows 한국어: `BinanceAutoTrader-v34.8-Korean-Windows-x64-Setup.exe`
- Windows English: `BinanceAutoTrader-v34.8-English-Windows-x64-Setup.exe`
- macOS 한국어: `BinanceAutoTrader-v34.9-Korean-macOS-arm64.dmg`
- macOS English: `BinanceAutoTrader-v34.9-English-macOS-arm64.dmg`
- macOS ZIP 파일도 Releases에서 보조 배포 형식으로 제공합니다.
- 지원 환경: Windows 10/11 x64, Apple Silicon macOS arm64

다운로드 후 `SHA256SUMS.txt`를 이용해 파일 무결성을 확인할 수 있습니다.

v34.9는 Sweep·Validation 멀티프로세스 백테스트에서 각 진입 시점의 Dynamic Top N 필터가 누락될 수 있던 문제를 수정했습니다. 실거래 Top N, 주문·청산, Trade History와 CSV 로직은 변경하지 않았습니다.

```bash
shasum -a 256 -c SHA256SUMS.txt
```

## 보안

- Developer ID 서명 및 Apple 공증 완료
- API Key와 Secret Key는 사용자 Mac의 로컬 `.env`에 저장
- 출금 권한은 필요하지 않음
- API 키에는 선물 거래에 필요한 최소 권한과 IP 제한 사용 권장

## 설치

Windows에서는 Setup을 실행하세요. 설치 프로그램은 `Jeongin Park` 명의로 Authenticode 서명되어 있습니다. macOS에서는 DMG를 열고 앱을 `Applications` 폴더로 드래그한 뒤 실행하세요.

API 설정, 포지션 상태, 로그와 백테스트 결과의 macOS·Windows 저장 위치는 [사용자 데이터 저장 위치 안내](STORAGE_GUIDE.md)에서 확인할 수 있습니다.

## 문서

사용법과 전략 검증 기록을 블로그에 정리해 두었습니다.

- [설명서 전체 목차](https://blog.naver.com/jump_david/224377037315) — 화면별 사용법 15편
- [자동매매 가이드](https://blog.naver.com/PostList.naver?blogId=jump_david&categoryNo=15) — 지표·설정·용어 38편
- [자동매매 연구소](https://blog.naver.com/PostList.naver?blogId=jump_david&categoryNo=13) — 1년 백테스트 검증 24편. 가설이 틀린 결과도 그대로 공개합니다
- [기술 문서](https://blog.naver.com/PostList.naver?blogId=jump_david&categoryNo=10) — 백테스트 속도, 데이터 캐시 등 내부 동작
- [자동매매 운용일지](https://blog.naver.com/PostList.naver?blogId=jump_david&categoryNo=8) — 2,000 USDT 실계좌 기록

영문 기록은 [Medium](https://medium.com/@jiaym)에 있습니다.

## 주의

암호화폐 선물 거래는 큰 손실을 초래할 수 있습니다. 본 프로그램은 수익을 보장하지 않으며, 사용자는 설정과 주문을 직접 검토하고 모든 거래 결과에 대한 책임을 부담합니다. 실거래 전 테스트 환경에서 충분히 검증하세요.

[English README](README_EN.md)
