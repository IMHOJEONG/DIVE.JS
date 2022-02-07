### 줌인터넷 면접 보신 분들의 코드 리뷰 정리!!

- 꼭 해두고 싶었던 자료 정리!

- 

[2번째 정리](./readme2.md)
[3번째 정리](./readme3.md)

### 001

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/1)

- 80 port 대신 8000, 8081, 8080, 4000 처럼 다른 포트와 최대한 겹칠일 없는 포트를 사용하면 좋을 듯 

- error catch

- 불필요한 변수 사용 자제 

- Error 로그도 특별한 경우가 아니라면 한글로!

- 타입체크 

- 파일 => JSON 과정을 함수로?

- cheerio와 pupeteer를 적절하게 섞어서 사용했다면??

- proxy의 사용 

- import

- fetch로 리팩토링 

- 일반적인 프레임워크에서 사용하는 store의 형태?

- custom 속성 대신 정식 속성 사용 

- 상속해서 사용하도록 만들었다면??

- 메소드 분리 

- addEventListener, removeEventListener

- 구조해제할당 문법 

- intersection Observer

- 렌더링 횟수의 최소화

- 중복 코드 제거 

- 서버에서 dist 파일을 사용할 수 있도록 만들면 어떨까??

-------

### 002

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/2)

- 가독성을 위한 여백 추가 

- 네이밍을 조금 더 구체적으로 해주면!

- DOM의 상태를 직접 변경하고 있음, 상태에 따라 변화하도록 만들면 더 좋았을 거 같음 

- 중복 코드의 삭제 

- 다른 사람 입장에서 더 쉽게 이해하도록 만드는 방법?

- localStorage를 관리하는 core를 만들어서 작업하면 어떨까??

- lazyload 부분을 모든 이미지에 적용?

- else를 사용하지 않고 개발하자 

--- 

## 02_001

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/14)

- node_module, .idea를 .gitignore에 추가

- 구체적으로 config 작성 

- 차라리 ts-loader를 사용해보면?

- process.env.NODE_ENV를 사용하자 

- [readme에 대한 상세한 고민](https://github.com/JunilHwang/zum-front-codereview/pull/14#discussion_r651559910)

- 전체적으로 파일 마지막에 개행을 한 번 해주자!
    - [관련 링크](https://minz.dev/19)

- 핵심이 되는 구현 로직은 core나 lib 같은 directory에 묶어서 관리해주면 어떨까?

- 개발 초기에 목 데이터를 만들어서 사용하는 것은 무척 좋은 습관 

- API Client를 관리해주는 기능 & API Service 로직을 관리해주는 기능의 분리 

- 컴포넌트 설계 

- render를 할 때 debounce를 이용해 한 프레임에 한 번만 렌더링 되도록 하면 어떨까?

    - requestAnimationFrame

    - DOM을 수정하는 로직이 브라우저에서 제일 비용이 큼 

- typescript를 사용 중이면 접근 제한자 등을 지정해주면 좋을 듯 

- Component에 Props를 Generic Type으로 넘겨줄 수 있도록 만들면 어떨까??

- 구조해제할당을 사용

- 기본값 사용 

- 정식 스펙에 있는 dataset을 사용해보자 

### 02_006 

- [링크](https://github.com/JunilHwang/zum-front-codereview/pull/15)

- 굳이 app.set에 등록하지 않아도 됨 

- public을 별도로 등록해주면 좋음!

- api는 별도의 모듈로 관리하면 더 좋았을 듯?

- 404 페이지의 경우 frontend에서 표현해주었다면?

- webpack의 도입 

- 상수로 관리할 수 있는 상수로!

- Object.defineProperty를 사용해도 된다

- [참고](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Store/)

- 모든 상태를 store에서 관리할 필요 없음 

- error, loading도 api별로 나누어서 관리해주면 더 좋을듯!

- 코드의 레이어를 구분해서 관리해주자!
    
    - 추상화 계층과 사용 계층을 분리해서 관리한다

    - [해당 글 링크](https://github.com/JunilHwang/zum-front-codereview/pull/15#discussion_r693014556)

- localStorage를 다루는 부분은 추상화해서 사용해주면 안 되는가??

- url을 Destructuring해서 사용해면 좋을 것 

    - url이 문자열, 배열, 객체인지 알 수 없음 

    - 밑 코드를 봐야 얼추 이해가 되고, 무엇보다 각각의 url 요소가 가지고 있는 의미를 파악하기가 어려움 

- rem을 scss를 통해 추상화해서 다루어보면 좋을 듯

- 낙타표기법 & 스네이크 표기법이 혼용되어 사용 중 

- loading 컴포넌트 사용 

- export 문을 조금 더 간결하게 사용!

    - [링크](https://github.com/JunilHwang/zum-front-codereview/pull/15#discussion_r693277853)

- 페이징 처리를 해주는 별도의 컴포넌트 & 함수를 만들어 관리해주면??

    - [관련 글 링크](https://github.com/JunilHwang/zum-front-codereview/pull/15#discussion_r693278206)

- router를 담당해주는 별도의 함수나 클래스를 만들어서 관리해주면 어떨까??

- 쓰로틀의 구현 

    - 과연 내가 직접 작성한 코드인가?

- 상수로 관리해줄 수 있는 것은 상수로 관리하자!


- 각각의 컴포넌트에서 이벤트 함수를 선언하고, 렌더링 시점에 해당 이벤트 함수를 모아서 등록해주도록 작업해 준다면??

    - 이벤트와 컴포넌트 코드가 분리되어 있어서 관리하기가 무척 힘들 거 같아!

- app의 역할을 잘 이해하고 분리하기만 해도 무척 좋은 코드가 되리라 생각을 함 

- router 코드와 dispatch가 엮여 있어서 무척 어색 

    - 각각의 페이지를 component로 분리해서 관리해주면 어떨까??

    - 그리고 해당 컴포넌트에서 dispatch를 실행하게 해주면 어떨까??

