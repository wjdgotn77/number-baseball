# Mini Web Project - number-baseball

### 스택
JavaScript / CSS / HTML

### 요구사항
1. 게임 시작 버튼 만들기
2. 게임 시작 버튼을 클릭 했을때, 랜덤한 세 자리 숫자 만들기 (사용자에게 보여주진 않습니다.)
3. 숫자 입력칸 만들기
4. 사용자가 엔터키를 클릭 했을때, 입력값이 세자리 숫자가 아닌 경우 경고창 띄워주기
5. 사용자가 엔터키를 클릭 했을때, 2단계에서 생성한 숫자와 사용자의 입력값 비교하기
6. 각 자리 별로 비교하고, 같은 자리에 같은 숫자가 몇개 있는지 판별합니다. (스트라이크 갯수)
7. 각 자리 별로 비교하고, 다른 자리에 같은 숫자가 몇개 있는지 판별합니다. (볼 갯수)
8. 화면에 스트라이크와 볼의 갯수를 표기합니다.
9. 사용자가 10회까지 시도할 수 있도록 제한합니다.
10. 게임 재시작 버튼을 만들고, 재시작 할 수 있도록 합니다.


### 추가 구현 부분
- 게임시작버튼 클릭 전 숫자 입력시 경고창을 띄워줍니다.

### 게임방법 🎮
각자 3/4자리[1]의 숫자를 임의로 정한 뒤, 서로에게 3자리의 숫자를 불러서 결과를 확인합니다.<br />
그리고 그 결과를 토대로 상대가 적은 숫자를 예상한 뒤 맞힙니다. <br />
사용되는 숫자는 0에서 9까지 서로 다른 숫자입니다. ~~경우에 따라 0은 사용하지 않기도 합니다.~~ <br />
__(여기서는 0을 사용하지 않습니다 1 - 9까지의 숫자를 입력합니다.)__ <br />
⚾ 숫자는 맞지만 위치가 틀렸을 때는 볼. <br />
⚾ 숫자와 위치가 전부 맞으면 스트라이크. <br />
⚾ 숫자와 위치가 전부 틀리면 아웃. "틀렸다"는 게 중요합니다. <br />
⚾ 물론 무엇이 볼이고 스트라이크인지는 알려주지 않습니다. <br />
⚾ 두 숫자가 중복되면 경우의 수가 많아지기때문에 중복 숫자는 사용하지 않습니다. <br />
⚾ 총 기회는 10번 입니다.

### 💡 PLAY TIP's
의외로 아웃이 제일 좋은 수인데, 틀린 숫자만 제끼고 남은 숫자끼리 조합하면 되므로 경우의 수가 팍팍 줄어들기 때문. <br />
볼, 스트라이크는 숫자는 맞는 게 있으나 무슨 숫자가 맞았는지를 알 수가 없어 경우의 수를 더 생각해봐야 하지만 <br />
아웃은 틀린 숫자만 제거한 나머지만 생각해보면 어렵지 않기 때문. 2아웃이 나오면 더욱 좋습니다. <br />
작정하고 숫자 예측을 이상하게 하지 않는 이상 3아웃 이상은 절대로 나오지 않습니다. <br />

### 포스팅
https://velog.io/@haesoohaesoo/Number-Baseball <br />
프로젝트를 만들며 정리해둔 글의 주소입니다.