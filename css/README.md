# CSS
> Cascading Style Sheet

## 목차

- [Normal Flow](#normal-flow)
- [Reflow](#reflow)
- [Repaint](#repaint)
- [Rendering Engine](#rendering-engine)
- [Reference](#reference)


## Normal Flow

#### 개요
> [W3C CSS Level2 revision1 - Normal Flow \[영문\]](https://www.w3.org/TR/CSS21/visuren.html#normal-flow)
> [W3C CSS Level2 revision1 - Normal Flow \[한글\]](http://trio.co.kr/webrefer/css2/visuren.html#normal-flow)

초창기: static(컴퓨터가 알아서 그리는) position model에서 그림을 그리는 방법
현재: static을 포함한 이후에 표준에 추가된 relative, absolute position model에서 그림을 그리는 방법

#### BFC (Block Formatting Context)

> 세로(수직)으로 배치하겠다.

- BFC는 Block 요소들을 담을 수 있는 일종의 컨테이너이다.
- BFC에서 인접한 블럭 박스들 사이의 수직 Margin(Top,Bottom)은 중첩된다.
- BFC가 생성되는 조건들이 있고, 조건을 만족하면 그 때마다 새로운 BFC가 생성된다.

- BFC의 의무 조건
    - 나의 하위들은 다 표현해야한다.

- BFC 생성 조건 [\[MDN\]](https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Block_formatting_context)
    - 루트 또는 이를 포함하는 요소 (body)
    - float != none (기본값이 아닌 경우)
    - 절대 위치 (position == absolute, fixed)
    - 인라인 블럭 (display == inline-block)
    - 테이블 셀 (display == table-cell)
    - 테이블 캡션 (display == table-caption)
    - overflow != visible (기본값이 아닌 경우)
    - flex box(display == flex, inline-flex)

- BFC 생성 시 포함되는 것
    - 하위 엘리먼트를 모두 포함한다.
    - 단, 다음의 경우는 제외된다.
        - 새로운 BFC가 만들어져서 그 안에 존재하는 엘리먼트들.
          즉, BFC안에 또다른 BFC가 만들어졌다면 그 BFC까지는 포함하지만 그 하위는 제외된다.
          제외 된다는 의미는 표현하지 않아도 된다는 의미.

#### IFC (Inline Formatting Context)

> 가로(수평)로 배치하겠다.

IFC는 대부분 BFC 내부에서 이루어진다.

- IFC가 생성되는 조건들이 있고, 조건을 만족하면 그 때마다 새로운 IFC가 생성된다.


## Reflow

#### 개요

Element의 정보가 갱신되었기 때문에 Geometry를 재계산해서 다시 그리는 행위

- 요즘의 웹브라우저는 부분 Reflow가 가능한다.

예제1: 이미지 표현
1. 박스를 그린다.
2. 이미지 로드
3. Geometry를 계산해 다시 그린다. (Reflow)

## Repaint

#### 개요

Geometry를 계산할 필요는 없는데 특정 부분의 색만 다시 칠하는 행위

- Reflow보다 훨씬 부하가 적다. Geometry를 계산할 필요가 없기 때문

예제1: 커서의 움직임
1. 커서가 특정포인트로 이동하기전의 색은 초록색
2. 커서가 특정포인트로 이동했을때의 색은 커서의 검은색 (Repaint)


## Rendering Engine

핵심: 어떻게하면 Geometry를 확보할 수 있을 것인가


## Reference

1.[W3C CSS 2.1 Normal Flow \[영문\]](https://www.w3.org/TR/CSS21/visuren.html#normal-flow)

2.[W3C CSS 2.1 Normal Flow \[한글\]](http://trio.co.kr/webrefer/css2/visuren.html#normal-flow)

3.[MDN Block Formatting Context](https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Block_formatting_context)

4.[bsidesoft HTML&CSS 스터디 2회차 강의후기](http://www.bsidesoft.com/?p=3634)

5.[bsidesoft HTML&CSS 스터디 2회사 영상](https://www.youtube.com/watch?v=yxzElTNld58)
