### JavaScript Bundle Diet

[발표 링크](https://toss.im/slash-21/sessions/3-2)

- 왜 번들 사이즈가 중요한가?

    - 웹 사이트의 로딩속도는 고객획득에 영향을 주게 됨 

    - 그러니 가능하면 빠른 서비스를 만들어야 함 

- 웹 사이트는 API 콜이 너무 많거나, critical rendering path에 해당하는 리소스가 큰 것처럼 다양한 원인으로 느려질 수 있음 

- JS vs image

    - image는 파일을 다운로드한 후 디코딩만 하면 되지만, 
    - Javascript는 파일을 다운로드한 후 파싱을 거치고, 컴파일을 하며, 마지막으로 실행까지 여러단계를 거침 

    - 같은 용량이더라도 자바스크립트가 더 처리비용이 높음 

    - 이러한 이유로 JS 번들 최적화는 아주 중요함 

- 번들 사이즈를 줄이기 위해 가장 먼저 할 일은 문제를 찾는 것 

    - webpack Analyse : 가장 다양한 정보, 복잡, 느림

    - webpack visualizer : 시각화, 기능 부족

    - webpack Bundle Analyzer: 원인을 빠르게 찾기 위함 => 추천 

- 용량이 큰 라이브러리는 더 가벼운 lib로 대체하고, 용도가 겹치는 lib는 하나의 lib로 통일하는 게 번들 용량을 줄이는 시작 

- 종종 같은 lib지만 버전이 다른 경우를 발견할 수 있음 

    - 이유는 npm의 특성 

- 패키지 매니저는 lib간 관계를 분석하고 필요한 lib들을 다운로드 함 

    - 여러 라이브러리가 같은 lib의 서로 다른 버전을 참조하는 경우가 존재함 

        - Dependency conflict

- 패키지 매니저마다 이 문제를 다양한 방식으로 해결함 

    - ex) 더 높은 버전의 lib을 사용하거나, 사용자에게 어느 버전을 설치할지 확인받는 방식 등 

- npm은 다른 패키지 매니저와 다르게 tree구조로 필요한 버전을 모두 받는 방식을 선택함 

- ex) 한 라이브러리의 디펜던시가 있다면, 그 lib 아래에 또 node_modules 폴더를 만들어서 

    - 그곳에 dependency의 dependency를 저장해 둠 

    - 그리고 node 런타임이 상황에 맞게 부모의 node_modules를 가져갈지, 혹은 자식의 node_modules를 가져갈지 적합한 폴더를 잘 선택해 줌

- webpack도 마찬가지 방식으로 번들링함 

    - 이와 같은 이유로 서로 다른 두 버전이라도 모두 번들되어 요청에 따라 각각 다른 버전의 lib를 사용할 수 있음 

- npm 방식은 dependency를 더 편하게 관리하고, 작성자가 의도한 버전대로 동작하는 효과를 얻을 수 있음 

    - but, 중복된 lib가 커지게 되면, 번들 사이즈가 커지게 되고 
        - tree 구조로 lib를 계속 저장하게 되면 
        - node_modules도 과도하게 큰 용량을 차지하곤 함

- node_modules가 과도하게 커지는 문제를 해결하기 위해
    - npm은 lib들이 시멘틱 버전, sember를 지킨다고 가정 

- semver를 준수하면, major 버전이 바뀌지 않는 한, 
    더 높은 버전을 사용해도 문제가 없음 

- 둘 중 더 높은 버전을 받아 중복 lib를 줄이고 있음 
    - 하지만, 이 기능이 항상 잘 동작하는 건 아님 

- npm dedupe : 중복된 모듈을 줄일 수 있는 명령어 

    - 설치과정에서 놓친, 중복된 lib의 버전을 확인하고 적합한 버전으로 통합할 수 있음 

- yarn에서는 어떻게 하면 될까?

    - yarn은 lib 설치과정에서 완벽히 처리해주기 때문 

    - 하지만, yarn도 완벽하지 않음 

- yarn에는 yarn deduplicate 라이브러리를 이용해 중복된 lib를 제거하는 것을 추천 

- yarn deduplicated는 다양한 전략을 통해 한 lib로 통일할 수 있게 해줌   

    - yarn 2에서는 npm 처럼 dedupe 명령어가 생김

- 이렇게 버전이 달라 중복된 lib는 npm, yarn의 기능을 이용해서 줄일 수 있음 

### 또 다른 lib 중복현상 - lodash

- 우리가 직접 lodash를 사용하지 않더라도, 다른 서드파티 라이브러리로 인해 lodash가 번들에 포함된 경우가 많이 있음 
    - lodash 최적화는 유용할 것 

- lodash의 문제는 다양한 lib가 있는 점 

    - cjs 버전의 lodash, esm 버전의 lodash-es가 있고 
    - lodash.get 처럼 각 기능별로도 단독 패키지가 존재함 

- 이러한 경우 Webpack의 alias 기능을 이용하면, 이와 같은 lib를 lodash만 이용하도록 만들 수 있음 

- 일부 lib는 버전을 맞추거나, 동일한 기능을 하는 lib로 변환해 중복된 구현을 피할 수 있음 

### 라이브러리의 중복을 피했다면, 꼭 필요한 코드만 사용하도록 수정해야 함 

- babel-plugin-transform-imports?

- 모든 lib가 tree-shaking을 지원하면 좋겠지만, 

그렇지 않은 lib들이 존재 => lodash가 대표적 

- lodash-es를 쓰거나, babel-lodash-plugin을 사용해 사용중인 부분만 가려낼 수 있음 

- lodash 이외에 비슷한 문제가 있다면, babel-plugin-transform-imports를 사용해 소스코드를 수정하지 않고도 결과물을 최적화할 수 있음 

### lodash?

- lodash의 일부 함수는 기능에 비해 용량이 클 수 있음 

- ex) groupBy 함수 : 6KB 이상

    - why? 캐싱, shorthand 표현을 지원하기 때문 

- 가능한 native 함수를 이용하거나, 더 가벼운 함수로 구현해 사용중이라고 하심 

### 더 가벼운 lib?

- node.js와 브라우저 환경을 통일하기 위해 polyfill을 추가할 수 있음 => webpack의 경우

- 그래서, lib 자체의 용량이 적어 사용해보니, polyfill이 추가될 경우 더 느려지는 경우도 있음 

- node-rsa라는 lib? 

    - 이 lib는 node.js 지원만을 생각하고 만들어진 lib

    - crypto, Buffer, big number 등의 polyfill이 추가되어, 

        - polyfill 용량만 무려 100KB 넘게 추가되었음 

- 가끔은 실수로 이러한 폴리필이 들어갈 수도 있어 

    - 명시적으로 끄거나, browser를 잘 판단해주는 lib 사용을 권하심      

    - 실제로 create-react-app은 명시적으로 꺼둔 node-polyfill 설정을 가지고 있음 

### 설치 전 lib를 잘 고르고 비교하기 위해서

- 번들포비아란 웹사이트를 추천 

[링크](https://bundlephobia.com/package/lodash-es@4.17.21)

- 각 버전 별 용량, lib의 dependency를 미리 확인해 볼 수 있음 

- 사용하려는 lib가 용량이 조금 크더라도, 이미 사용하고 있는 lib와 많이 겹친다면? 

    - 용량 변화는 미미할테니 사용을 고려해 볼 수도 있겠지?

- 추가로 비슷한 기능 lib의 용량을 비교해주기도 함 

- export analysis : 유용한 기능

    - tree-shaking이 되었을 때, 함수별로 얼마나 용량을 차지할 지 미리 확인해 볼 수 있음 

### lib를 만드는 관점에서도 번들 사이즈를 위해 고려해야 할 점이 많음 

- 특히 토스팀에서는 다양한 사내 lib를 만들어 공유함으로써 이러한 점들이 많이 중요해짐 

- tree-shaking

    - 정적분석을 통한 필요한 코드만 가져오는 기술 

    - 지원된다면, 정말로 사용중인 코드만 번들에 포함되기 때문에 더 가벼운 번들을 만들 수 있음 

    - 제거할 때 side-effect가 없을 때만 가능함 

- 순서나 호출 위치에 따라 동작이 달라지는 경우가 side-effect가 있다고 함 

### webpack은 rollup에 비해 side effects 판단을 어려워하는 편?

- 아직 rollup에 비해 부족한 tree-shaking 결과를 보여줌 

- tree-shaking은 간편한 기능 

    - webpack이 이해하는 tree-shaking 가능한 lib를 만드는 것은? 
        - 생각보다 까다로울 수 있음 

### lib 제작 시 webpack에게 side-effect 여부를 알려주어야 함 

- webpack은 package.json의 sideEffects란 필드를 참고해 
    - 어떤 파일에 side effect가 있는지 확인 

- webpack은 sideEffects 필드가 있을 때만 코드를 확인하고 tree-shaking을 시도함 

    - 이 때 sideEffect가 나오거나, 분석이 어려운 경우에는 tree-shaking하지 않음 

- rollup의 preserveModules:true -> 하나의 output 대신 원본 소스코드와 비슷한 구조의 output이 나올 수 있음 

    - 만약 단일 output 파일의 경우 원본 파일의 일부에 tree-shaking이 불가능한 코드가 섞여 있다면?

        - 최종 output은 한 파일 => 파일 전체가 tree-shaking에 실패할 수도 있음 

- 이러한 경우, preserveModules 옵션으로 빌드한다면? 

    - 일부 파일만 실패하므로 완화할 수 있음 

### 컴파일 툴을 잘 고르는 것도 중요 

- webpack에선 직접 dead 코드를 제거하기도 하지만, production 빌드에선 다른 lib의 도움도 받음 

    - terser : 마찬가지로 side effect 유무를 판단해 코드를 지움 

    - 이 때 terser의 판단을 돕는 것이 pure annotation

- terser는 pure annotation의 주석을 확인하면?

    - 그 코드는 side effect가 없다고 판단 

- Babel은 pure annotation을 붙여주지만, 아직 Typescript Compiler는 붙여주지 않음??

    - 따라서 TS로 작성하더라도 가급적이면 babel을 이용해 컴파일을 하는 것을 권장 

- 특히 react를 사용한다면?

    - babel-plugin-transform-react-pure-annotations 덕분에 
    - pure annotation이 자동으로 삽입되어, react component를 lib로 만들었다면 특히 유용함 

### lib가 의도와 다르게 sideEffect가 발생한다면? 

- webpack의 stats 기능을 이용하는 것 

    - webpack-cli => stats 옵션 

    - next.js의 경우에는 webpack-stats-plugin을 추가하면 

- webpack이 번들링 도중에 분석한 다양한 정보를 json 포맷으로 저장할 수 있음 

- 이 json 파일을 webpack analyse 서비스에 올리면 모듈과 모듈의 관계를 분석할 수도 있음 

### last! 라이브러리 영향 줄이기

- 용량을 더 이상 줄이기 어렵다면?

    - 무거운 lib의 영향을 최소화하자 

- 단일 청크, vender/유저 청크 

    - 이 두가지 output으로 웹 페이지를 운용하는 분들도 있음 

- 이러한 경우, lib가 추가되면 모든 페이지의 용량이 한번에 증가함 

- nextjs는 google의 제안에 따라 granular chunks를 사용

1. Framework - 쉽게 바뀌지 않음 

    - react, react-dom, next 등의 lib가 들어감 

2. commons 청크 - 모든 페이지에서 사용하는 코드를 모아둠 

- 1,2 이 두 청크는 모든 페이지에서 받아지며, 먼저 진입한 페이지에서 캐싱되어 
    - 효율적으로 리소스 관리가 가능함 

3. shared 청크 - 2 페이지 이상 공유하는 코드를 모아둠 

4. 특정 페이지에서만 사용하는 청크가 있음 

- 이렇게 청크를 나누게 되면, 무거운 lib를 사용하더라도 lib를 사용하는 페이지에서만 받기 때문 

    - 영향을 최소화할 수 있음 

### 용량이 큰 라이브러리의 영향을 줄이는 또 다른 방법은 필요할 때만 받는 

- dynamic import 

- webpack magin comment를 이용하시면 prefetch 기능을 이용할 수 있다는 점 

- prefetch를 이용하면 여유로운 시간에 미리 받아두기 때문에 

    - 사용자에게 최소한의 지연시간을 줄 수 있음 




