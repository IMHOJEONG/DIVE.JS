### 003

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/3)

- babel-node의 사용 

- 개발 환경에 대한 공부 

- dist를 가져와서 사용하도록 만들었으면 더 좋았을 것!

- 불필요한 부분은 제거해주면 더 좋았을 것!

- data는 json 파일로 분리해서 관리하면 어떨까??

- 하나의 API로 통합할 수 있을 것 같아!

- css-loader를 사용한 관리!

- entry-point도 webpack이 자동으로 가져오도록 설정하면??

- 미리 DOM을 작업하기보단, state를 정의해놓고, state에 따라서 렌더링 하도록 만들어보면 어떨까??

- 불필요한 구문 삭제

- 어차피 defer로 로드한다면 onload 내부에서 작업할 필요는 없을 것!

- DOM 변수의 경우 $title처럼 다른 변수와 구분지어서 관리해준다면??

- 메소드는 동사형태로 작성하자 

- else 키워드는 가급적 사용하지 않는 방식으로!

    - [링크](https://github.com/JunilHwang/zum-front-codereview/pull/3#discussion_r606210305)

- 모든 로직을 한 파일에 작성하는 것

    - 가독성도 좋지 않고, 코드를 이해하기 무척 어려움 

### 03_001

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/16)

- 사용하지 않는 패키지는 제거!

- 한 개의 endpoint로 관리할 수 있지 않을까??

- 다시 jsonData를 선언할 필요는 없었을 것 같아!

- 배열의 경우 어떤 타입이 있는지 모르기도 하고, 직관적이지 않음 

- 변수가 재할당되는 경우가 아니라면 전부 const를 사용해주세요!!

- 복잡한 로직이 있는 경우에는 별도의 모듈로 분리해서 관리해주면 더 좋을 듯!
    
    - service 로직 => controller가 service를 호출해 응답값을 만들어내는 형태로 관리!

- optional Chaining

- css 변수 선언

- 재활용이 가능한 코드를 사용해라

    - [링크](https://github.com/JunilHwang/zum-front-codereview/pull/16#discussion_r726865859)

- DOM을 직접 접근해 사용하는 경우가 거의 없음 

    - state 기반으로 rendering하는 형태로 코드를 구성해보면 어떨까??

- store 코드를 구성하긴 했는데 제대로 사용하고 있질 못한다 ㅠㅠ

### 03_002

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/17)

- babel 사용 

- webpack에서 script를 자동으로 주입 

- webpack에 proxy를 이용해 client에서 ~~~처럼 호출해도 접근할 수 있도록 작업이 필요함 

- class보단 id를 사용해주면 어떨까?

    [링크](https://github.com/JunilHwang/zum-front-codereview/pull/17#discussion_r726883151)

- loading 컴포넌트 자체가 setState 함수에 종속적이라 보기 좋은 형태는 아닌가??

- 최대한 역할 별로 코드를 분리해 누가 보더라도 유지보수를 할 수 있는 형태로 모듈화 해주면 좋을 것!

- 버블링 방식으로 이벤트를 등록할 수 있는 함수를 하나 만들어주면 어떨까??

- 무한스크롤 관련 로직을 추상화해 사용할 수 있도록 만들면 어떨까

- 블록이 형성되지 않도록 코드를 작성해주세요!!

    [링크](https://github.com/JunilHwang/zum-front-codereview/pull/17#discussion_r727695833)

### 03_003

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/18)

- @babel/polyfill 사용 

- scss entry는 굳이 설정하지 않아도 되었을 것!

- webpack dev server의 proxy 설정을 사용해보면 더 좋았을 것!

- server와 client 로직이 뒤섞여 있으면 좋은가?

- 이벤트 위임의 추상화

    - [링크](https://github.com/JunilHwang/zum-front-codereview/pull/18#discussion_r727739358)

- 주소를 파싱하른 로직도 router에게 위임해주면 어떨까?

- 선언해놓고 사용하지 않는 부분 삭제 

### 03_004

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/19)

- devserver에 Proxy 설정?

- 의미 없는 명령어, build된 것들을 제대로 활용하고 있질 못하고 있는가?

- state의 type을 generic으로?

- 어떠한 역할을 하는지 변수명만 봐도 이해할 수 있도록 작성이 필요함 

- 렌더링 전후 라이프 사이클 구성!

- router로 만들어진 instance에 컴포넌트를 주입해줘야 하지 않을까요?

### 03_005

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/20)

- server에서 html을 불러오도록 설정

- 개발을 위한 설정인가, 서비스를 위한 설정인가 인지하고 작업하시면 좋을듯

- node.js의 fs.existsSync를 활용해보자 

    [링크](https://github.com/JunilHwang/zum-front-codereview/pull/20#discussion_r729093133)

- 굳이 호스트와 포트까지 정의할 필요는 없을 것!

- 개발 모드일 때는 style-loader를 사용해서 style tag로 css를 붙이면 어떨까?

- 트리 쉐이킹 사용 

- 명확한 변수 이름 사용이 필요함 

- class 이름은 PascalCase로 사용하자 

- localStorage를 날것 그대로 사용하기보단, 한 층 추상화해서 인코딩, 디코딩 과정을 감추어준다면?

    [링크](https://github.com/JunilHwang/zum-front-codereview/pull/20#discussion_r729122308)

### 03_006

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/21)

- entry는 한 개만 있어도 될 거 같다

- json을 불러오는 부분은 api endpoint를 만들어서 관리해주면 더 좋았을 거 같아!

- 각각의 템플릿들은 별도의 파일로 구성해서 관리해주면 어떨까?

- destructuring을 적극적으로 사용해보자!

- 모듈화에 대한 연습 

### 03_007

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/27)

- webpack dev server의 proxy 설정을 이용해보자 

- api endpoint 제작 

- 온전히 개발을 위한 설정 & 실제 서비스를 위한 설정도 고려해보자 

- 불필요한 콘솔 제거 

- Typescript의 Generic Type을 이용해보면 어떨까??

- Object.freeze

- observable 

- querySelector도 추상화해서 사용할 수 있도록 만들수 있다?

- 객체 key 변수 

    [링크](https://github.com/JunilHwang/zum-front-codereview/pull/27#discussion_r737142003)

- 컴포넌트쪽 코드에 있어야 하는 코드가 아닌가?

- DOM을 직접적으로 수정하면 X

### 03_008 

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/28)

- prettier 설정 때문인지, 포맷이 이상함 

- webpack options => injectType 옵션 

    [링크](https://github.com/JunilHwang/zum-front-codereview/pull/28#discussion_r739975303)

- axios를 사용할 때 interceptor + baseUrl을 이용해보면 좋을 거 같음!

    - 호스트를 localhost에 요청하기 보단, /api/recentContent처럼 자체 서버에 요청할 수 있도록 프록시로 환경을 구성해주면 어떨까??

### 03_009

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/22)

- localStorage에 저장되어 있는 모든 값을 가져올 필요가 있을까?
 
- api를 호출할 때 store에 직접 접근하는 행위는 무척 위험함 

    - 설계적으로 권장하지 않는 방식 

    - redux-thunk, redux-saga 등을 통해 dispatch할 때 api를 호출하는 방식으로 작성 

    - component -> store -> api 이런 형태로 의존성이 구성되는 것!

### 03_010

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/23)

- server layer 에서도 typescript를 사용하면 좋았을 것!

- 필요없는 property는 삭제

- server 연동 작업 

- 각각의 상황에 대한 Error 클래스를 만들어주고, 데이터가 없다면 400번대 코드를, 서버 로직 에러라면 500번대 코드를 반환할 수 있도록 만들어주면 좋을 듯?

- entry도 보통 src에 넣어둠 

    - 모든 개발 source를 src에 넣어둠 

- js find 메소드의 사용 

- else로 진입하지 않도록 주의!

- 클라이언트와 서버가 같은 domain을 공유하게!

### 03_011

[링크](https://github.com/JunilHwang/zum-front-codereview/pull/24)


- error일 땐 status도 설정해주면 좋을 것 

- 캐시사용 

- 바로 return할 수 있으면 바로 return 

- 명시적인 형변환이 가독성에 더 좋음

    [링크](https://github.com/JunilHwang/zum-front-codereview/pull/24#discussion_r730835832)

- 코드에서 블록이 깊어지지 않도록 신경써주면 좋음 

- 404 코드를 직접 만들어주기 보단, 미들웨어를 이용해 에러가 발생 시,

- 해당 에러에 대한 상태 코드와 에러메시지를 만들어주면 좋을 것 

- router에서 이렇게 dom 정보를 알 필요가 있을까?

- router, store, component가 뒤섞여 있기 때문에 관리하기도 힘들고 명시적이지도 않은 것 같음!


