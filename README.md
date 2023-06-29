# React 개인 과제 "Todo List" Lv.2


## 🖥️ 프로젝트 소개

 react-router-dom, sttled-components, redux를 사용하여 만든 Todo List 사이트 입니다.


## 🎬 구현 사이트

- 배포 링크 : <https://todo-list-lv2-two.vercel.app/>

![Jun-23-2023 12-53-09](https://github.com/HiYongA/MyTodoList2/assets/120562771/66b13b76-146b-43d4-8374-7e853d7a21d8)

## 🕰️ 개발 기간

- 23.06.22일(목) - 23.06.23일(금)


## 📌 구현 기능
- Create Todo
- Read Todos, Todo
- Update Todo
- Delete Todo


## ❗ 요구 사항

### 공통
- todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리합니다.
- todos 모듈은 `Ducks 패넡`으로 구현합니다.

### 메인 페이지
- 디자인과 화면 구성은 자유롭게 구현합니다.
- Todo의 상태에 '완료' 그룹과 '진행중' 그룹을 나뉘어서 보이도록 구현합니다.<br>
 예시 영상 꼭 위, 아래가 아니여도 되며 창의적으로 구현해도 됩니다.
- Todo를 추가하면 제목 `input`과 내용 `input`은 다시 빈 값이 되도록 구현합니다.
- input에 값이 있는 상태에서 상세페이지로 이동하는 경우, input의 value가 초기화 되도록 구현합니다.
- Todo의 완료상태가 `true`이면, 상태 버튼을 '취소', false`이면 '완료'로 보이도록 구현합니다.
- 전체 화면의 최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한하고, 컨텐츠를 화면의 가운데로 배치합니다.
- `상세보기` 클릭하면 Todo의 상세 페이지로 이동합니다.

### 상세 페이지
- 상세 페이지의 디자인과 화면 구성은 자유롭게 구현하되, 아래 요소들은 보여야 합니다.
 1. Todo의 ID
 2. Todo의 제목
 3. Todo의 내용
 4. `이전으로` 버튼<br>
   ㄴ `이전으로` 버튼을 구현하고, `이전으로` 버튼을 클릭하면 리스트 화면으로 되돌아 갑니다.
  
## ❗ 제한 사항
- map을 사용할 때 반드시 key값을 넣어야 하며, `map`의 index 사용을 금지합니다. 이것을 금지하는 이유는 강의에 다루었습니다.
- Todo Id 생성 시 `todos.length` 사용해서 생성하지 않습니다. `todos.length`을 사용해서 id 생성 시 발생할 수 있는 문제점에 대해 고민해보시길 바랍니다.

- todos 모듈의 `initialState`는 있어도 되고, 없어도 됩니다. 예시의 편의상 Todo가 `initialState`로 존재합니다.

```js
const initialState = [
	{
		id: 1, // id는 모두 고유값이어야 합니다.
		title: "리액트 강의보기",
		body: "챕터 1부터 챕터 12까지 학습",
		isDone: false
	},
	{
		id: 2, // id는 모두 고유값이어야 합니다.
		title: "점심 먹기",
		body: "점심 뭐먹지..?",
		isDone: false
	}
]
```
  

## 🔗 구조
- **components** : Form.jsx, Header.jsx, Layout.jsx, TodoList.jsx
- **pages** : Main.jsx, Detail.jsx
- **redux** > **config** : configStore.js
- **redux** > **modules** : todos.js
- **shared** : Router.jsx
- **App.js**
- **GlobalStyle.jsx**
- **index.js**
- **reset.css**



## ⚙️ 개발 환경 / 기술스택

- **`Node.js`**
- **`Yarn`**
- **`create-react-app`**
- **`styled-components`**
- **`redux`**
- **`router`**
- React
- JavaScript
- HTML
- CSS
