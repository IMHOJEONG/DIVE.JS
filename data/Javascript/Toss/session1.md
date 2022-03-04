### 프론트엔드 웹 서비스에서 우아헤게 비동기 처리하기

[참고 링크](https://toss.im/slash-21/sessions/3-1)

- 비동기 처리는 정말 어려움 

- 좋은 코드란 무엇인가?

    - 자신의 분명한 책임을 드러내는 
    
    - 함수와 변수

    - 응집도

    - 느슨한 결합

    - 의존성의 역전 등 

- 좋은 코드에 대한 원칙들을 세워가자 

    - ex) 이 함수가 하는 일은? 

        - x.foo.bar.baz에 안전하게 접근하는 일 

        - 함수가 하는 일이 명확하게 드러나기 보다는

            - x가 없는지 검사한다, x.foo가 없는지 검사한다와 같이 

                - 명령어의 노이즈가 많아 함수가 어떤 역할을 하는지      

                - 명확하게 드러나지 않는다고 보았음  

    - 하는 일은 단순하지만 코드가 너무 복잡하다

    - 각 프로퍼티에 접근하는 핵심 기능이 코드로 잘 드러나지 않는다. 

```javascript
function getBazFromX(x) {
    return x?.foo?.bar?.baz;
}
```

- 함수가 하는 일을 흐리게 만들던 if가 사라져서 코드가 간결 

    - 덕분에 어떠한 역할을 하는 함수인지 한눈에 확인할 수 있음 

- Nullable이 아닐 때, 성공할 때 접근하는 모습을 나타내는 x.foo.bar.baz와 모양이 큰 차이가 없음 

    - 같은 역할을 하는 식이 비슷하게 표현된다는 것은 코드에 있어 좋은 징조 중 하나 


- JS에 Promise가 없던 시절, callback 처리 코드

    - 성공하는 경우와 실패하는 경우가 섞여서 처리된다

        - 이 함수가 하는 일은 user를 가져오고 그 정보를 바탕으로 accounts를 가져오고 그 값을 반환하는 역할 

        - 중간에 실패하는 경우에 대한 처리가 섞여서 함수가 하는 진짜 역할이 가려짐 

    - 코드를 작성하는 입장에서 매번 비동기 호출을 할 때마다 에러 처리를 해줘야 한다는 점 

```javascript
async function fetchAccounts() {
    const user = await fetchUserEntity();
    const accounts = await fetchUserAccounts(user.no);
    return accounts;
}
```
- 비동기 요청들이 성공하는 경우들만 모아서 살펴볼 수 있다는 점 
    - 덕분에 함수가 하는 역할이 명확히 드러남 
        - 동기적인 코드와 큰 차이가 없음 

- 또, 별도로 에러를 처리하는 부분이 없고, 모든 에러 처리는 외부에 위임된다라고 하는 점 

    - 이 함수는 성공하는 부분만 책임지고, 다른 경우는 외부에 더 잘할 수 있는 부분에 위임하는 것 

    - 물론 필요하다면 내부에서 try catch로 처리할 수 있음 

### 지금까지 정리 

- 좋은 코드의 특징은?

    - 성공하는 경우와 실패하는 경우를 분리해서 처리할 수 있음 

        - 함수에는 성공하는 경우들만 적혀 있으니, 읽기도 쉽고, 함수의 책임이 명확히 드러남 

- 읽기 어려운 코드들

    - 실패하는 경우와 성공하는 경우가 섞여서 처리된다는 점 
        - 덕분에 함수의 크기가 커지고 하는 역할이 명시적으로 드러나지 못함 

### 그렇다면 보통 API 호출과 같은 상황에 어떻게 처리했었나??

- SWR이나 react-query 같은 lib의 활용 

```javascript
// 비동기를 처리하는 부분을 정의한다
const { data, error } = useAsyncValue(()=>{
    return fecthSomething();
});
```
- Promise를 반환하는 함수를 React Hook의 인자로 넘기고, Promise의 상태 변화에 따라 Hook이 반환하는 data, error의 값을 적절히 채워주는 것 

```javascript

// 컴포넌트에서 로딩 & 에러 처리를 동시에 수행한다
// - 성공하는 경우와 실패하는 경우가 섞여서 처리된다 
// - 실패하는 경우에 대한 처리를 외부에 위임하기 어렵다
funcion Profile() {
    const foo = useAsyncValue(()=>{
        return fetchFoo();
    });

    if(foo.error) return <div>로딩에 실패했습니다.</div>
    if(!foo.data) return <div>로딩 중입니다..</div>
    return <div>{foo.data.name}님 안녕하세요!</div>
}

```

- 만약 여러개의 비동기 작업이 동시에 실행된다면??

    - 방금 봤던 callback 코드와 같이 코드가 점점 읽기 어려워짐 

- 보통 하나의 비동기 작업은 `로딩 중, 에러, 완료됨` 3가지의 상태를 가지고 있음 

    - 2개의 비동기 작업을 가지고 있다면, 3의 제곱으로 9가지의 상태를 가질 수 있다는 것을 생각할 수 있음 

    - 그렇다면, 비동기 호출이 3~4개가 된다면 더욱 복잡해짐  

### React 컴포넌트가 아닌 일반적인 비동기 함수라면?

- 일반적인 비동기 코드는 요즘 async-await 스타일로 작성을 함 

    - 성공하는 경우에만 집중해 복잡도를 낮추고, 일반적인 동기로직과 큰 차이 없이 로직을 작성함 

- React에서 Hook이나 state를 사용하는 방식으로는 이렇게 간단히 비동기 처리를 할 수 없음 

### React Suspense for Data fetching 

- 목표 : async-await 급으로 비동기를 처리하면서 간단하고 읽기 편한 React 컴포넌트를 만들겠다고 하는 것 

- 컴포넌트는 성공한 상태만 다루고, 로딩상태와 에러 상태는 외부에 위임함으로써 
    - 동기적인 코드와 큰 차이가 없는 코드를 만들겠다는 비전 

```jsx 
<ErrorBoundary fallback={<MyErrorPage />}>
    <Suspense fallback={<Loader />}>
        <FooBar />
    </Suspense>
</ErrorBoundary>
```
```javascript
try {
    await fetchFooBar();
} catch (error) {
    // 에러 처리를 하는 부분
}
```

- 비동기 콜을 하는 함수나 컴포넌트가 가운데에 있고, 
    - 실패하는 경우를 처리하는 부분이 그 부분을 감싸고 있음 



- 만약에 비동기 작업을 저렇게 처리한다면, 에러와 로딩 상태는 어떻게 처리할 수 있는가?

    - 컴포넌트를 쓰는 쪽에서 로딩 처리와 에러 처리를 한다 

- 로딩 상태는 가장 가까운 Suspense의 fallback으로 그려지는 것 

- 에러 상태도 비슷하게 ErrorBoundary가 처리해주게 하면 됨 


- 모든 실패할 수 있는 함수에 try-catch를 감싸지 않는 것처럼 
    - Suspense를 일으키는 모든 컴포넌트에 Suspense나 ErrorBoundary를 붙여주기보다는

    - 적당한 부분 단위로 에러와 로딩상태를 한 번에 처리하게 됨 

- Recoil => Async Selector / SWR, React Query => {suspense: true}로 사용할 수 있음 

    - 이 옵션을 사용한 이후, 자동으로 컴포넌트의 Suspense 상태가 관리됨 

- 데이터가 준비되는 대로 하나씩 자연스럽게 보여주기


### React hooks

- 선언적 API가 큰 장점 

    - 이전 class component에서는 컴포넌트의 lifecycle에 맞추어 다양한 작업을 명령형으로 해주어야 했지만

    - Hooks를 사용하면서 상황이 달라짐 

- 선언하기만 하면 react 프레임워크가 실제 작업을 대신해주었음 

- 대수적 효과 

    - 어떤 코드 조각을 감싸는 맥락으로 책임을 분리하는 방식 

    - 객체지향의 의존성 주입(DI), 의존성 역전(IoC)와도 유사

    - 대수적 효과를 지원하는 언어에서, 함수는 필요한 코드 조각을 선언적으로 사용함 

        - ex) 메모이제이션이 필요하면 useMemo를 호출하는 식 

            - 그러면 실제로 관련된 처리는 함수를 감싸는 부모 함수나 런타임이 대신 처리하는 형식 

### React에서 사용자 경험을 더욱 증가시키는 요소들!

- React Concurrent Mode 

- useTransition, useDeferredValue

- 위 요소들은 React에서 컴포넌트의 렌더 트리를 부분적으로만 완성함으로써 

    - 사용자 경험을 크게 향상시킬 수 있음 

    - 비동기 작업뿐만 아니라, 기존에 debounce 등으로 처리하던 무거운 동기적 작업에도 적용할 수 있음 







