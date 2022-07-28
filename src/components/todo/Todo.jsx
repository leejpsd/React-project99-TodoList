import React from "react";
import List from "../list/List";

function TodoItem({ todo, onRemove, onToggle }) {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title" key={todo.id}>
          {todo.title}
        </h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => onRemove(todo.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => onToggle(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
