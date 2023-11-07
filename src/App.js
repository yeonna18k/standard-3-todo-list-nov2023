import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [toDo, setToDo] = useState("");
  const [count, setCount] = useState(0);

  function onClickHandler() {
    const query = {
      id: count,
      title: title,
      content: content,
    };
    const newquery = [...toDo, query];
    setToDo(newquery);
    setCount(count + 1);
    console.log(newquery);
  }

  function deleteHandler() {}
  return (
    <div className="App">
      <header>
        <h1>ToDoList</h1>
        <input
          value={title}
          onChange={function (e) {
            setTitle(e.target.value);
          }}
        />
        <input
          value={content}
          onChange={function (e) {
            setContent(e.target.value);
          }}
        />
        <button onClick={onClickHandler}>추가하기</button>
      </header>
      <div className="todolist">
        <div>
          <p>working</p>
          {toDo &&
            toDo.map((e) => (
              <div className="todolist-div">
                <h3>{e.title}</h3>
                <p>{e.content}</p>
                <button
                  onClick={function () {
                    let deletetodo = toDo.filter(function (target) {
                      return e.id !== target.id;
                    });
                    console.log(deletetodo);
                    setToDo(deletetodo);
                  }}
                >
                  삭제
                </button>
                <button>완료</button>
              </div>
            ))}
        </div>
        <div>
          <p>done</p>
        </div>
      </div>
    </div>
  );
}

export default App;
