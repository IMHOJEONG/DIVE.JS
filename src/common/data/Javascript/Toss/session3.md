### 실무에서 바로 쓰는 Front-end Clean Code

[강의 링크](https://toss.im/slash-21/sessions/3-3)

- 실무에선 이 외에도 조금 더 섬세하게 코드를 정리하는 스킬이 필요 

- 프론트에서 읽기 쉬운 코드를 작성하려면 알아야 하는 개념 및 액션 아이템을 알려주실 예정 

### 실무에서의 클린 코드의 의의

- 흐름 파악이 어렵고, 도메인 맥락 표현이 안 되어, 동료에게 물어봐야 알 수 있는 코드 

    - 개발할 때 병목이되고, 유지보수할 때 시간이 오래 걸림 

    - 심하면 기능 추가가 불가능한 상태가 됨 

    - 또한, 성능도 안 좋은 경우가 많아 유저 입장에서도 쾌적하지 못함 

- `유지 보수 시간 단축`

    - 동료 or 과거의 내가 작성했던 코드를 빠르게 이해할 수 있다면?

        - 유지보수할 때 드는 개발 시간이 짧아짐 
    
- 읽기 좋은 깔끔한 코드 = 코드리뷰 시간, 디버깅 시간도 단축 시킴 

- `시간은 자원이며, 자원은 곧 돈`

- 코드를 처음 설계하고 새로운 파일에서 작성할 땐 깨끗

    - 하지만, 기존 코드에 기능을 추가하는 상황이라면 조금 달라짐 

    - 긴장의 끈을 놓치면 코드가 들쑥날쑥해짐 

    - 사실 회사에서 일의 90%가 기존 코드에 기능을 추가하는 일
        - 남이 짠 코드, 내가 지난 주에 작성했던 코드에 기능을 추가하는 것 

### 안일한 코드 추가의 함정 

- 하나의 목적인 코드가 흩뿌려져 있다

    - 떨어져 있어, 나중에 기능을 추가할 때 스크롤을 위아래로 이동하며 미로찾기를 해야 함 

- 하나의 함수가 여러가지 일을 하고 있음 

    - 세부 구현을 모두 읽어야 함수의 역할을 알 수 있게 됨 

    - 코드 추가 및 삭제도 시간이 더 걸리게 됨 

- 함수의 세부구현 단계가 제각각이라는 문제 존재 


- `그 때는 맞고 지금은 틀리다`

    - 깔끔했던 코드가 작은 기능 하나를 추가했더니 어지러운 코드가 되었음 

    - pull request의 변경 사항만 본다면, 이게 어지러운 코드라는 것을 알기 어려웠음 

- why? 변경점 자체에는 틀린점이 없어서 

    - 하지만, 전체 그림으로 보면 엉망

- 코드가 첫 번째 코드보다 길어짐 

- `클린 코드 = 원하는 로직을 빠르게 찾을 수 있는 코드`


- 원하는 로직을 빠르게 찾으려면?

    - 응집도 : 하나의 목적을 가진 코드가 흩뿌려져 있음 

    - 단일책임 : 함수가 여러가지 일을 하고 있음 

    - 추상화 : 함수의 세부구현 단계가 제각각

        - 추상화 단계를 조절해 핵심 개념을 필요한 단계만큼 조절해야 함 

### 로직을 빠르게 찾을 수 있는 코드 

1. 응집도 - 같은 목적의 코드는 뭉쳐 두자 

- 커스텀 훅을 사용해 한 군데로 뭉쳐보았음 

    - 오히려 읽기 힘든 코드가 되는 경우가 있음 

    - ex) 어떤 내용의 팝업을 띄우는지, 팝업에서 버튼을 눌렀을 때 어떤 액션을 하는지가 이 페이지에서 제일 중요한 포인트 

    - 이들이 모두 hook 속에 가려져서 알 수 없게 되었음 

- 커스텀 훅의 대표적인 안티패턴 

    - 보기 더러울 때 일단 뭉쳐두는 것 

- 그렇다면 어떤 것을 뭉쳐야 하는가?

    - 뭉치면 쾌적 : 당장 몰라도 되는 디테일 

    - 뭉치면 답답 : 코드 파악에 필수적인 핵심 정보 

        - 여러 모듈을 넘나들려 흐름을 따라가야 하는 참사가 일어남 

- 뭉쳐서 짧은 코드로 만든다고 코드가 깨끗해지는 게 아님 

- `클린 코드 = 원하는 로직을 빠르게 찾을 수 있는 코드`

- 어떻게 하면 읽기 좋게 뭉칠 수 있을까?

    - 먼저 남겨야 할 핵심 데이터 & 숨겨도 될 세부구현을 나누어 보자 

    - 핵심 데이터는 밖에서 전달, 나머지는 뭉친다 

- `선언적 프로그래밍`

    - '무엇'을 하는 함수인지 빠르게 이해가 가능하다는 것 

    - 세부 구현은 내부에 뭉쳐 두어 신경 쓸 필요가 없다는 것 

    - '무엇'만 바꿔서 쉽게 재사용할 수 있다는 점이 있음

- `명령형 프로그래밍`

    - 하나하나 세부 구현을 작성한 방식 

    - 세부 구현이 모두 노출되어 있어 이를 커스텀하기 쉽지만, 

        - 읽는 데 오래걸리고 재사용하기 어렵다는 단점

2. 단일 책임 - 하나의 일을 하는 뚜렷한 이름의 함수를 만들자 

- 중요 포인트가 모두 담겨 있지 않은 함수명은 

    - 읽는 이가 예상한 대로 코드가 동작하지 않으며, 이는 코드에 대한 신뢰 하락으로 이어짐 

    - 그 다음부터는 함수명을 믿지 못하고, 세부 구현을 모두 의심 가득한 눈초리로 보게 됨 

- 이 상태에서 기능을 추가한다면?

    - 더 뚱뚱해지고, 일을 더하게 됨 

- 함수로 분리하는 것 외에도, 리액트 컴포넌트로 기능을 분리할 수도 있음 

3. 추상화 - 핵심 개념을 뽑아내자 

- 얼마나 추상화할 것인가?

- 상황에 따라 필요한 만큼 추상화하면 됨 

- 추상화 수준이 섞여 있으면 코드 파악이 어려움 

    - 전체적인 코드가 어느 수준으로 구체적으로 기술된지 파악할 수 없음 

- 추상화 단계를 비슷하게 정리해주면, 물 흐르듯이 파악할 수 있음 

### 액션 아이템 

1. 담대하게 기존 코드 수정하기 - 두려워하지 말고 기존 코드를 씹고 뜯고 맛보고 즐기자 

    - 구조 뜯기를 두려워하면, 클린한 실무 코드를 유지할 수 없음 

2. 큰 그림 보는 연습하기 

    - 그 때는 맞고 지금은 틀리다 
    - 기능 추가 자체는 클린해도, 전체적으로는 어지러울 수 있다. 

    - 기존에 깨끗하던 코드에 내가 기능을 추가하면서 망쳐놓을 수 있음 

3. 팀과 함께 공감대 형성 

    - 코드에 정답은 없고, 명시적으로 이야기를 하는 시간이 필요함 

    - 사소하지만 일관성을 깨는 코드가 쌓이면, 유지보수하기 힘든 코드가 됨 

- 그리고 공감대는 자동으로 만들어지지 않음 

    - 함께 만들어온 코드에서 고치고 싶은 포인트를 서로 말해보고, 

    - 각자 문제라고 생각하는 지점을 공유해 집단지성을 모음 

4. 문서로 적어보기 - 글로 적어야 명확해짐 

    - 향후 어떤 점에서 위험할 수 있는지, 어떻게 개선할 수 있는지 


