import React, { useState } from "react";
import List from "../list/List";
import "./form.css";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    setTodoList([
      ...todoList,
      { id: todoList.length + 1, title: title, body: body, isDone: false },
    ]);
    setTitle("");
    setBody("");
  };

  const onRemove = (id) => {
    // id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = todoList.id 가 id 인 것을 제거함
    setTodoList(todoList.filter((todoList) => todoList.id !== id));
  };

  const onToggle = (id) => {
    setTodoList(
      todoList.map((todoList) =>
        todoList.id === id
          ? { ...todoList, isDone: !todoList.isDone }
          : todoList
      )
    );
  };

  return (
    <>
      <div className="add-form">
        <div className="input-group">
          <label className="form-label"> 제목 </label>
          <input
            type="text"
            value={title}
            className="add-input body"
            onChange={(event) => setTitle(event.target.value)}
          ></input>
          <label className="form-label"> 내용 </label>
          <input
            type="text"
            value={body}
            className="add-input"
            onChange={(event) => setBody(event.target.value)}
          ></input>
        </div>
        <button className="btn" onClick={addItem}>
          추가하기
        </button>
      </div>

      <List todoList={todoList} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default Form;
