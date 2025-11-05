//### (1) 기본 컴포넌트 만들기

// `Greeting.jsx` 라는 파일을 만들어 다음과 같은 컴포넌트를 작성하세요.

// Greeting.jsx
function Greeting(props) {
  return (
    <div>
      <h2>안녕하세요, {props.name}님!</h2>
      <p>오늘 기분은 어떠신가요?</p>
    </div>
  );
}

export default Greeting;

// ### (2) 부모 컴포넌트에서 Props 전달하기

// `App.jsx`에서 `Greeting` 컴포넌트를 불러와, 서로 다른 이름을 가진 사용자에게 인사를 출력하세요.

import Greeting from "./Greeting";

function App() {
  return (
    <div></div>
  );
}

export default App;

// (3) 컴포넌트 재사용성 실습
// Button.jsx 파일을 만들어 재사용 가능한 버튼 컴포넌트를 작성하세요.

function Button({ text, color }) {
  const buttonStyle = {
    backgroundColor: color,
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    margin: "5px",
    cursor: "pointer"
  };

  return <button style={buttonStyle}>{text}</button>;
}

export default Button;

import Button from "./Button";

function App() {
  return (
    <div></div>
  );
}
