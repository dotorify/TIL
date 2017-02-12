# Chapter01. 웹 페이지의 단 구조

## 박스 가로 정렬

float 속성 활용

```css
/*
 * 띄우려는 대상에 float
 * 마무리할 때는 대상의 after에서 clear
 */

 .parent-box:after {
   content: ""; /* 가상요소 after 내에서 필수 속성 */
   display: block;
   clear: both;
 }

 .child-box {
   float: left;
 }
```

#### 예제1. [codepen에서 보기](http://codepen.io/dotorify/pen/vgvGZJ)
