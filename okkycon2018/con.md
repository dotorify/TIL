OKKYCON 2018

## 테스트하기 쉬운 코드로 만들기

테스트하기 쉬운 코드란?

  - 같은 입력에 항상 같은 결과를 반환하는 코드
    * r.v. database로부터 데이터를 조회하는 경우

  - 외부 상태를 변경하지 않는 코드

Example 01. 컨퍼런스 등록

  ```
    1. Class내 Attribute의 유효성 검사
    2. DB 조회 (같은 입력에 다른 결과를 반환 할 수 있는 코드)
    3. 비지니스 로직
    4. 등록 정보 저장 (외부 상태를 변경하는 코드)
    5. HTTP
  ```

  Problem 01.
    - 코드 내에 테스트하기 쉬운/어려운 코드가 같은 곳에 존재

  Solution 01.
    - 테스트하기 쉬운 코드와 어려운 코드를 분리

  Problem 02.
    - 메소드 내에 테스트하기 쉬운/어려운코드가 혼재되어있는 경우, 이 메소드를 호출하는 메소드 역시 테스트하기 어려운 코드가 된다.

  Solution 02.
    - 테스트하기 어려운 코드와 쉬운코드는 최대한 가장자리에서 만나게 한다. (Hierarchy상 Ancestor영역)

  Problem 03.
    - 기 구현된 기능이 있음에도 재정의해서 사용하는경우 예외 케이스가 발생한다.
      * e.g. ORM Repository에서 Post하는 메소드가 구현되어있지만, 이를 사용하지않고 같은 동작을하는 기능을 재정의

  Solution 03.
    - Mock을 사용해서 기 구현된 기능을 사용하도록 강제할 수 있다.
      * 행위 검증: 행위가 호출되었는가에 집중한다.
      * 상태 검증
      * 문제점: 적당한 수의 Mock에 대한 기준을 판단하기 어렵우며, 남발할 수 있다. Go 상태검증.
    - Seam(이음새) 도입

  Conclusion
    두 부류 코드를 분리해서 각각 테스트하고, 가장자리에서 맞물려 돌아가는 코드는 수동테스트한다.

## 의식적인 연습으로 TDD, 리팩토링 연습하기

의식적인 연습으로 TDD, 리팩토링 연습과정

  1단계. 단위 테스트 연습
    테스트를 처음 접하는 초심자는 TDD보다 단위테스트 하는 습관을 기르는 것이 좋다.
    예를 들어, 내가 자주 사용하는 (input/output이 명확한 유틸성 등) 메소드의 단위테스트를 작성한다.
    자바스크립트의 경우 String 클래스에서 제공하는 slice, splice 등의 메소드가 될 수 있다.

    원칙
      1. Toy 프로젝트에서 시작한다. (회사 프로젝트 X)
      2. UI/DB에 의존관계를 가지지 않는 코드

    - 요구사항, Input/Output 정의
    - 실패하는 테스트 코드 구현

  2단계.

  3단계. 리팩토링 연습
    - 메소드 분리
      아래의 과정을 처음부터 모두 만족시키지말고, 한 과정씩 연습을 진행한다.

      1. 한 메소드에 오직 한 단계의 들여쓰기만 허용
      2. else 예약어를 사용하지 않는다
      3. 메소드가 한가지 기능만 하도록 구현
      4. 로컬변수 사용에대한 고민
      5. compose method 패턴 적용(극단적으로 나눈다)

    - 클래스 분리

      1. 모든 원시값과 문자열을 포장 (클래스화)
      2. 3개 이상의 인스턴스 변수를 가진 클래스를 만들지 않는다.
        * 점진적으로 줄여나가는 연습을 한다.

  4단계. Toy 프로젝트 난이도 높이기
    연습하기 좋은 프로젝트
      - 게임과 같이 요구사항이 명확한 프로그램으로 연습 (e.g. 로또, 체스, 사다리타기 등...)

  5단계. 의존관계 추가를 통한 난이도 높이기
    필요한 역량: 테스트하기 쉬운/어려운 코드를 보는 눈과 센스

  이후 단계.
    - 컴파일 에러 최소화하면서 리팩토링
    - ATDD기반으로 앱개발
    - 레거시 앱에서 테스트 코드 추가해서 리팩토링

  Q&A
   - 요구사항 변경으로인해 기존 테스트 코드 수정시 시간이 많이 소요된다. 해결 방법은?
     - 설계에 문제가 없었는지 확인을 한다.

## 코드 품질을 위한 테스트 주도 개발

  리팩토링은 외부적인 기능변경없이 내부적인 변경을 통해 개선하는 것이다.
  테스트 코드 작성으로 인해 사전에 오류를 확인할 수 있으므로, 디버깅을 하는 시간이 줄어든다.


## 테.알.못은 어떻게 테스트를 시작했을까?

TDD: Red-Green-Refactor
Test Last: Red-Green-Refactor or Green-Refactor

기존 코드에 테스트 추가하기(Test Last)
  - 의존성이 없고, Input/Output이 명확한 순수 함수와 같이 테스트하기 쉬운 코드부터 시작한다.
  - prod코드는 수정하지 않고, 해당 함수의 핵심기능을 테스트하는 코드를 추가한다.

  1. 테스트하기 어렵게 만들어져있는 코드에서 테스트하기 쉬운것만 분리한다.
    - 의존성은 낮으면서, 비지니스 로직로써는 중요도가 높은 코드를 대상으로 잡는다.

신규 요구사항 추가(TDD)

장점
  - 코드 설계상 결함을 발견하기 쉽다. (디자인 결점 확인 및 개선)
  - 실행가능한 스펙 문서 기능을 한다.
  - 새로운 요구사항이 들어와도 대응이 쉽다.

테스트 대상을 선정하는 기준
  - 비지니스 로직상 중요도가 떨어지는 경우
  - 테스트를 작성하는 하는 시간보다 관리/유지하는데 시간을 더 소비하게되는 경우
    * e.g. 변경 가능성이 있는 element tag 체크 등
  - 사용자 입장에서 중요도가 떨어지는 경우

잘못된 검증
  - Output이 하나 이상의 결과를 가진 경우
  - TODO

## 테스트 코드의 가독성

추상화의 중요성
단일 책임의 원칙

1. 테스트하려는 대상 및 환경을 사전에 정의하도록 분리한다.
  * 같은 메소드내에 응집력이 다른 코드를 분리한다.
2. TODO


## 당신들의 TDD가 실패하는 이유

개인이 TDD에 실패하는 이유:

팀이 TDD에 실패하는 이유:
  ```
  프로세스: 점진,반복,fail-test
  반복주기: 계획,실행,평가
  문화: 목표,지식
  아키텍처: 낮은결합, 높은응집, 도메인 모델 보호
  ```
  현실에서는 반복주기를 따르지 않고 실행만 수행한다.
  팀이 TDD를 진행하기위해서 목표와 지식이 잘 공유되어야한다.

  도메인 모델 보호
    - 플랫폼과 도메인 모델이 종속적이면 보호받지 못하는 설계


Glossary
 - Characterization Test
