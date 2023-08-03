// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [toDo, setTodo] = useState('');
  const [toDos, setTodos] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value); /* 입력하고 있는 모든 글자들을 setTod로 수정시켜준다 */
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo('');
  };

  const clearTodos = () => {
    setTodos([]); // 빈 배열로 설정하여 모든 항목을 삭제합니다.
  };

  console.log(toDos);
  return (
    <>
      <div className="wrap">
        <h1>투두리스트를 만들어보자~</h1>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="입력하세요" onChange={onChange} value={toDo} />
          <button>등록하기</button>
          <button onClick={clearTodos}>삭제</button>
        </form>
        <div className="hr">
          <hr />
        </div>
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
