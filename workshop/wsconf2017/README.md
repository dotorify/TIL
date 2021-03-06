# WSConf2017

> 2017년 3월 11일(토) 09:00 ~ 18:00, 한국 마이크로소프트 더케이트윈타워 A동 11층

## 5. WAI-ARIA

> 기본적으로 Semantic Markup 바탕으로, 부족한 부분을 WAI-ARIA로 보완

...

```html
<!-- Tab Component -->

<!-- Tab 목록 -->
<!-- 접근성 도구 사용 시, Tab메뉴로 인식하고 읽어 준다. -->
<ul role="tablist"></ul>

<!-- Tab 컨텐츠 -->
<div class="" role="tab"></div>
```

## 6. AMP

> Accerlated Mobile Page

- AMP 확장 태그 제공 (e.g. amp-carousel)
- 확장 태그는 컴포넌트 기반
- baseUrl&development=1 접근 통해서 Validation 확인 가능
- 외부 javascript를 허용하지 않으며, sandbox iframe에서 사용 가능

- CSS (=AMP Style)
    - 50kb로 제한
    - 외부 CSS, 엘리먼트 인라인 스타일 적용 불가
    - \<style\>로 선언된 인라인 스타일만 적용 가능

- Optimization
    - measure 작업 먼저 -> mutation 작업 나중에


## 7. 이미지는 마크업의 반이다

> 컨텐츠에 따라 적절한 이미지의 품질과 포맷을 정해야한다. 무조건 좋은 품질을 사용하는 것은 적절하지 않다. UI개발자의 몫

- 포토샵에서 웹용 이미지(JPG, GIF, PNG)로 내보낼 때, 메타데이터를 포함하지 않는 것이 좋다.

- 다양한 색상 이미지: JPEG (Best) > PNG-24 > ...
- 다양한 색상의 반투명 이미지: PNG-24 (Best)

- 스프라이트
    - 스프라이트 이미지는 자주 바뀌지 않는 이미지를 대상으로 만드는 것이 좋다.
    - 제작시 간격(2px)을 두는 이유는 태블릿의 사파리에서 이미지가 넘쳐보이는 것을 방지하기 위함
    - 크기와 위치를 짝수 값으로 설정하는 것이 좋다. (홀수는 정확한 비율료 표현되지 않는다. => blur처리 한 것 처럼 보여진다.)


## 8. 반응형웹디자인을 위한 넓고 얇은 지식

> Responsive Web Design (RWD)

3원칙

1. img 요소에 최소 너비 사용 (e.g. min-width: 100%)
2. fluid grid 사용 (e.g. width: 100%)
    - 꼭 grid를 사용해야된다는 의미는 아니다.
3. media query 사용 (e.g. @media (min-width: 870px))


- 가상엘리먼트를 적극적으로 사용 (e.g. ::after, ::before, .elemento)
- 메타 요소의 viewport 사용
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ```
- Landscape 대응을 할 수는 있지만 고려하지 않는 편 (기준방향: 가로)
- 해상도를 나누는 방법
    - 모바일: 320 ~ 640
    - 태블릿: 640 ~ 768 (320*2 2배이기 떄문에 2단 배치가 가능하다. 아이패드 width가 768)
    - 작은 데스크탑: 768 ~ 1279
    - 데스크탑: 1280 ~
- BEM방식을 사용해서 중첩을 최소화
- 가로너비는 가변단위(%) 사용 (margin, padding 포함)
- box-sizing 리셋을 추천
    ```css
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
    ```
- em, rem 사용하지 않아도 된다.
- 가변박스
    ```css
    .box {
      /*...*/
      height: 0;
      padding-bottom: 50%;
      /*...*/
    }
    ```
- 단어단위 한글 개행
    ```css
    /**/ {
      word-break: keep-all;
      word-wrap: break-word;
    }
    ```
- RWD에서는 스프라이트 포지션 계산이 어렵다. (내용 재확인 필요)
- 데스크탑, 모바일 서로 다른 이미지는 스크립트를 사용하기도 한다.

Tip
- iOS에서 (scroll snap point)[http://caniuse.com/#search=scroll%20snap%20points] css속성 사용을 통해서 carousel snap처리가 가능하다. (안드로이드 사용 불가)


## 9. BEM, Sass와 함께 한 11번가 UI 컴포넌트 제작기

컴포넌트
1. 클래스 네이밍 규칙
2. 실무적 이슈 및 특성 반영
    - 영역 좌우 간격, 타이틀 정렬 위치, 배경 유무
3. 실무에서 발생하는 협업 이슈 고려
    - 동일한 스타일의 중복
    - 작업자 별 네이밍 방식 차이
    - 통일되지 않은 클래스 지정 위치
4. 네이밍은 서비스가 아닌 컴포넌트의 형태/용도에 맞게
5. 컴포넌트 별로 개별 sass파일 분리


BEM
> BEM: Block__Element--Modifier

적용 고려사항
1. 컴포넌트 별로 모듈화
2. 클래스명만 보더라도 다른 작업자가 이해할 수 있도록
3. ...

커스터마이징
- 요소 구분을 위해 prefix 적용 (e.g. layout: l-grid => 그리드 레이아웃)

Past Process
- Powerpoint -> Photoshop -> sublimetext

Present Process
- JIRA -> Sketch -> Invision -> sublimetext

## 10. UI개발 Tip&Tech Top 10

Chrome DevTool
1. Network
    - Capture
    - throttling the Network (네트워크 속도 느리게 할 수 있는 기능)

2. Filter

3. Soruce
    - minifiy 된 코드를 formatting 할 수 있다.
    - sourceMap

4. Search
    - 로딩 된 파일 또는 메서드 검색 가능하다.

5. Animation
    - 미리보기가 가능하다.
    - 애니메이션 도구 [ceaser](https://matthewlein.com/ceaser/)


IDE ATOM, SublimeText

1. Emmet 활용
    - HTML 기본 구조 생성하는 IDE플러그인

2. CDN 활용
    - 주소를 그대로 사용해도 되지만 `cdnjs` 플러그인 사용하면 IDE에서 더 편리하게 작업 가능하다.

3. Autoprefixer 활용
    - Vendor prefix 자동으로 입력하는 IDE 플러그인

4. LiveReload 활용
    - sass와 같이 사용가능하다.
    - [for ATOM](https://atom.io/packages/livereload)

5. Server
    - [for ATOM](https://atom.io/packages/atom-live-server)

ETC

1. Fiddler
    - Debugging, Performance Test.. Chrome DevTool같은 기능
    - 바꾸고 싶은 파일만 바꿔볼 수 있는 기능 (e.g. 라이브 서비스에서 특정 파일을 deploy되지 않은 파일로 대체)
    - Mobile 웹 및 웹뷰 디버깅이 가능하다.

2. CSS Sprites 자동화
    - Gulp, Grunt, Webpack ...
    - [for Webpack](https://www.npmjs.com/package/webpack-spritesmith)

## Reference

- WAI-ARIA
    - [예제로 살펴보는 WAI-ARIA 사례집](https://github.com/...)
- AMP
    - [페이스북 - 프론트엔드개발그룹]()
