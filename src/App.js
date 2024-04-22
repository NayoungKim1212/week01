import logo from './logo.svg';
import './App.css';

function App() { // App : component component => 대문자로 시작
  // 자바스크립트를 쓸 수 있는 영역
  // const x = 1;
  // function testFunc() {
  // }  return 문 위 함수가 시작되기 전
  return (
    // JSX 문법(HTML X)
    // Javascript 문법을 사용하고 싶을 땐 {}
    <div className="App">
      <header className="App-header">
       {/* ex) {testFunc} */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;