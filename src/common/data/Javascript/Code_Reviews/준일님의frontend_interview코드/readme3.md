### 03_012

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/25)

- server side의 typescript 사용 

- client와 server에서 typescript를 같이 사용할 때 하면 좋은 것들이 바로 

    - request, response에 대한 도메인 타입을 공유하는 것 

- 시작 전에 빌드하기?

- 서버 사이드라서 es5로 선언할 필요가 있을까?

    - 제일 최신 문법 기준으로 작성해도 좋을 거 같음 

- cors 설정이 꼭 필요할까?

    - api 호출 때문이라면??

        - proxy 설정을 사용하면 됨 

- 실제로 서비스할 때 어떤 방식으로 프로젝트를 구성하는가?

- HTTP 상태 코드 관리가 정말로 중요함 

    - [링크](https://evan-moon.github.io/2020/03/15/about-http-status-code/)

- 도구를 선택할 때 타당한 근거가 있어야 함 

- proxy 설정을 이용한 개발환경 구축 

- Generic의 사용 - typescript

- Flux Pattern

- 무의미한 코드를 작성하는 것을 기피하자 

- 중복코드를 추상화해서 관리하자

- 견고한 프론트엔드 개발 지적 사항

    - [링크](https://github.com/JunilHwang/zum-front-codereview/pull/25#discussion_r730514274)

- 나만의 설계와 생각이 녹아 있는 코드를 작성하자!

### 03_013

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/26)

- `남들도 쉽게 이해하고 받아들일 수 있는 맥락 인가?`

    - 유지보수 관점에서 좋지 못한 형태

- 서비스 할 때도 webpack dev server로 띄울 수 없음 

    - 오직 개발 환경을 위한 설정을 하지 말라

- prettier 사용 

    - 자동 포맷이 되어버리면 보기가 좋지 않은 경우가 많이 발생 

- 블로그 포스팅에 있는 것들을 그대로 사용하면 X

### 03_014

- ts-node를 사용하는 것도 좋지만, ts로 build한 다음에 node로 실행시키는 방식도 좋음 

- index.html의 경우 view router에 매칭될 수 있도록 직접적으로 엔드포인트를 선언해서 관리해야 함!

- 에러 메시지는 한글로 작성해도 무방

- 줄여쓰기는 항상 지양 

- typescript를 사용하며 private, public 등의 접근제한자는 어떠한가?

- State, props 타입을 고정적으로 관리하기보단, Generic Type을 이용해 보면 어떨까?

- 범용적인 것들만 utils에서 관리해주면 안 되는 것인가?

- 오류를 UI Layer에서 감지한 다음 이를 토대로 에러와 관련된 UI를 보여줄 수 있도록 하면 더 좋을 것 같아

- Client와 Service 로직을 분리해주면 어떨까

- 심볼로 표현하는 것은 무척 좋지 않음 

    - 무엇보다 사용하는 사람들이 jQuery로 혼동할 가능성이 높음 

    - 항상 다른 사람들도 내 코드를 보고 있다는 가정 하에 코드를 작성하자!

### 004

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/4)

- 콘솔에 어떤 포트로 실행되는지도 표기해주면 더 좋을 것 

- 자료구조를 조금 더 적극적으로 이용해보자 

- 구체적으로 리소스를 명시해라 

- 즉시실행 함수로 items를 보호하고 있음 

- 크롤링된 데이터를 로컬 변수에 저장해놓고 사용하면 어떨까?

    - 일단 서버가 실행되는 동안에는 메모리 상에 캐싱이 되기 때문에 응답을 더 빠르게 보내줄 수 있음 


- api client를 이렇게 만들어보면 어떨까

    - [링크](https://github.com/JunilHwang/zum-front-codereview/pull/4#discussion_r611407881)

- 재할당하는 경우가 아니면 const를 사용해주기

- 컴포넌트를 꼼꼼하게 분리하는 습관

- store를 props로 관리하는 법 말고 아예 Component에 Store라는 멤버변수를 추가 or 그냥 import 하여 사용하는 방식은 어떠한가

- 메소드 간 개행 

- 상수의 경우 class 외부에 선언해주고 사용하라

    - 불필요한 메모리를 사용하게 되기 때문 

- category 이름을 location에 직접 접근하는 게 아니라 router에서 반환할 수 있도록 해주면 좋을 것 

- if로 인해 code의 depth가 깊어지지 않도록 유의하자 

- build 후에 서버에서 사용해야 하기 때문에 서버 쪽 프로젝트 경로에 빌드되도록 했으면 더 좋았을 거 같음 

### 005

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/5)

- Array 관련 메소드의 사용 

- 작성자 본인이 아닌 경우에도 쉽게 이해할 수 있는 코드를 작성할 수 있도록 신경써보면 어떨까

- host 같은 것은 상수로 관리

- 네이밍에 신경쓰자!

- type module의 경우 node version과 종속적이기 때문에 차라리 babel을 사용해서 작업했다면?

    - 다양한 버전의 node가 있음 

- res.json 후에 함수가 끝날 수 있도록 return을 해주면 더 좋았을 것 

    - 지금은 코드가 안전하다고 보장해주질 못하고 있음 

- 멤버 변수를 미리 선언해두면 어떨까

### 006

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/6)

- 기술적인 부분을 정리해둔 것 

- 문서를 무척 꼼꼼하게 작성해두는 것 

- 조금만 더 가독성을 신경써주면 좋을 듯 

- 변경 가능성이 아예 없는 경우에는 class 밖에다 선언해도 괜찮을 것 같다

    - 변경가능성이 있는 경우, 즉 렌더링이 다시 필요한 경우에만 state에 선언해주는 게 베스트

- 개행이 필요함 

- map 

- get

- 아예 Component class에 선언해주고 필요한 경우에만 override해서 사용하면 좋을 듯 

- 사용할 멤버변수는 필드 영역에 미리 정의해놓으면 좋을 거 같음 

- 리소스에 의미를 부여해주는 것

- 라우터 이동 후 새로고침을 하면 404페이지가 나올 확률이 높음

- 한 번 import 한 후에 로컬 변수에 저장해 사용해보면 어떨까

- 극한의 성능 vs 사용성 + 가독성?

- 상수의 경우 아예 대문자로 선언 

- 

