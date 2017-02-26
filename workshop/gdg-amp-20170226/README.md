#Progressive Web App Roadshow 101

> 일시: 2017년 2월 26일 (일) 14:00 ~


## AMP

> The Accelerated Mobile Pages

- 비동기 스크립트만 사용 가능 함.
    - 사용자가 작성한 스크립트는 사용할 수 없다.
- 모든 정적 리소스의 크기를 HTML에 설정해야 함.
- 타사 스크립트를 지원하지 않음.
- 모든 CSS는 inline으로 작성해야 함.
    - 50KB까지 제한
- 즉시 페이지 로드
    - preconnect API를 사용해서 유저가 페이지에 접근하지 전에 미리 로딩.


서버내에서 AMP페이지 개발자모드로 접속하는 방법

```http
[GET] http://127.0,0.1:8080/index.html#development=1
```


## PWA

> Progressive Web App

점진적 개선을 통해서 점점 더 앱(네이티브)처럼 되어가는 것

Offline support
Push notification (e.g. bicon)

### [Service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers?hl=ko)

브라우저 측에서 동작하는 이벤트 기반의 시스템 Worker

  - Offline support, Push notification이 의존하는 기술
  - Application으로 하여금 백그라운드 프로세싱이 가능하게 함.
  - Event-driven 모델
  - Https 필수



Performance Enhancement
  - RAIL Pattern
  - PRPL Pattern

Prompting
  - 웹으로 접속했을 때 홈화면으로 추가를 유도하는 기능 = 부추기기



## Reference

[AMP Project\[ko\]](https://www.ampproject.org/ko/docs/get_started/create/presentation_layout)
[서비스워커 소개: 서비스워커는 어떻게 사용하는가](http://html5rocksko.blogspot.kr/2015/01/introduction-to-service-worker-how-to-use-serviceworker.html)
