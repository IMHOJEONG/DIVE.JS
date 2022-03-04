### React Suspense

- 이 기능에 대한 repo 공지!

[링크](https://github.com/reactwg/react-18/discussions/112)

[React 공식문서 - Concurrent 모드 소개](https://ko.reactjs.org/docs/concurrent-mode-intro.html)

[React 공식 문서 - suspense란?](https://ko.reactjs.org/docs/concurrent-mode-suspense.html)

### 

- React 컴포넌트에서 데이터를 가져오기에 대한 새로운 메커니즘

- React 16.6 version 부터 추가

- `<Suspense>` 컴포넌트 

- 코드를 불러오는 동안 `기다릴 수 있고`, 기다리는 동안 로딩 상태를 선언적으로 지정할 수 있음 

```react
const ProfilePage = React.lazy(()=> import('./ProfilePage'));
```

- 데이터를 가져오기 위한 Suspense는 `<Suspense>`를 사용해 선언적으로 데이터를 비롯한 무엇이든 `기다릴` 수 있도록 해주는 새로운 기능

----------

## 기존의 접근 방식 vs Suspense

- React 앱에서 데이터를 불러오는 가장 흔한 방식

    - Effect를 사용하는 것 

```react
useEffect(()=>{
    fetchSomething();
}, []); 
```

### 접근 방식 1 : 렌더링 직후 불러오기(Suspense 미사용)

- `렌더링 직후 불러오기`?

    - 화면 상에 컴포넌트가 렌더링 완료된 후에 비로소 데이터 불러오기를 시작하기 때문 

    - `WaterFall`이라고 부르는 문제로 이어짐 

- `WaterFall` 

    - ex) 사용자 정보 불러오기가 3초 소요된다면, 3초가 지난 뒤에야 비로소 게시글 불러오기를 시작할 수 있는 것 

    - 병렬화될 수 있었으나 의도하지 않게 순차적으로 실행되는 현상 

    - 렌더링 직후 데이터를 불러오는 코드에서 흔히 발생함 

### 접근 방식 2 : 불러오기 이후 렌더링 (Suspense 미사용)

- 이벤트가 발동하는 순서

1. 사용자 정보 불러오기 시작 

2. 게시글 불러오기 시작 

3. 기다리기 

4. 사용자 정보 불러오기 완료

5. 게시글 불러오기 완료 

- 의도하지 않은 또 다른 문제 

- fetchProfileDat 내에서 Promise.all()을 사용하는 과정에서 모든 데이터가 반환되기를 기다려야 함 

    - 게시글들을 모두 불러오기 전까지는 프로필 정보를 렌더링할 수 없음 

    - 둘 다 기다려야 함 

### 접근 방식 3 : 불러올 때 렌더링 (Suspense 사용)

- 직전의 접근 방식 

    1. 불러오기 시작

    2. 불러오기 완료  

    3. 렌더링 시작 

- Suspense를 사용하면?

    1. 불러오기 시작 

    2. 렌더링 시작 

    3. 불러오기 완료 

- `Suspense를 사용하면, 렌더링을 시작하기 전에 응답이 오기를 기다리지 않아도 됨`

    - 네트워크 요청을 발동시키고서, 상당히 바로 렌더링을 발동시킴 


```react

const resource = fetchProfileData();

function ProfilePage() {
    return (
        <Suspense fallback={<h1>Loading profile....</h1>}>
            <ProfileDetails />
            <Suspense fallback=(<h1>Loading posts...</h1>)>
                <ProfileTimeline />
            </Suspense>
        </Suspense>
    );
}


```

- 화면 상에 `<ProfilePage>`를 렌더링할 때

1. 이미 fetchProfileData() 내에서 요청을 발동시켰습니다

    - 이 함수는 Promise가 아닌 특별한 resource를 돌려줌 

2. React는 `<ProfilePage>`의 렌더링을 시도 

    - 자식 컴포넌트로 `<ProfileDetails>`, `<ProfileTimeline>`을 반환 

3. React는 `<ProfileDetails>`의 렌더링을 시도 

    - resource.posts.read()를 호출 

    - 또 한번, 아직 데이터가 없으므로, 이 컴포넌트 또한 `정지합니다`

    - React는 이 컴포넌트도 넘기고, 트리 상의 다른 컴포넌트의 렌더링을 시도

4. React는 `<ProfileTimeline>`의 렌더링을 시도

    - resource.posts.read()를 호출 

    - 또 한번, 아직 데이터가 없으므로, 이 컴포넌트 또한 `정지합니다`

    - React는 이 컴포넌트도 넘기고, 트리 상 다른 컴포넌트의 렌더링을 시도 

5. 렌더링을 시도할 컴포넌트가 남아있지 않음 

    - `<ProfileDetails>`가 정지된 상태이므로, React는 트리 상에서 `<ProfileDetails>` 위에 존재하는 것 중 가장 가까운 `<Suspense>` Fallback을 찾음 

    - `<h1>Loading profile....</h1>`입니다. 

- resource 객체는 아직은 존재하지 않지만, 결국엔 로딩이 이루어질 데이터를 나타냄

- `read()`를 호출할 경우 => 데이터를 얻거나, 또는 컴포넌트가 `정지합니다`

### 

- `데이터가 계속 흘러들어옴에 따라, React는 렌더링을 다시 시도하며, 그 때마다 React가 더 깊은 곳까지 처리할 수 있게 됨`


    - resource.user를 불러오고 나면, `<ProfileDetails>` 컴포넌트는 성공적으로 렌더링이 이루어지고 & `<h1>Loading profile...</h1>` Fallback은 더 이상 필요 없어짐 

    - 결국 모든 데이터가 준비될 것이고, 화면 상에는 Fallback이 사라질 것 

- ex) GraphQL = 한 번의 요청으로 모든 데이터 요구 사항을 충족시킬 수 있음 

    - 응답이 계속 흘러들어오도록 하면 컨텐츠를 더 일찍 표시할 수 있게 해줌 (불러오기 이후가 아닌)

- 불러올 때에 렌더링을 수행하기 때문에 

    - user가 posts보다 응답에 먼저 들어있을 경우, 응답이 완료되기도 전에 바깥의 `<Suspense>` 경계를 해제할 수 있음 

### 불러오기 이후에 렌더링을 하는 해결 방식에서도 워터폴은 나타남 

- 불러오기와 렌더링 사이에

- 컴포넌트에서 `로딩 여부를 확인하는` if... 검사가 제거된 것을 유의!

    - 보일러플레이트 코드 제거 & 간단한 절차만으로 신속한 디자인 변화를 만들 수 있게 해줌 

    - ex) 프로필 정보와 게시글이 항상 함께 나타나도록 해야 한다면?

        - 그 둘 사이의 `<Suspense>` 경계를 제거해주면 됨 

        - or 각 컴포넌트에게 고유한 `<Suspense>` 경계를 부여하여 각각을 독립시켜줄 수도 있음 


### Suspense - 로딩 상태의 기본 단위를 변경할 수 있고, 코드를 크게 변경하지 않고도 로딩 상태의 배치를 조정할 수 있도록 해줌 