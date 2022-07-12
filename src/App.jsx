import React, { useState } from 'react';
import './App.css';
// import { InputTodo } from './component/inputTodo'
// import { IncompleteTodo } from './component/incompleteTodo'
// import { CompleteTodo } from './component/completeTodo'

function App() {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos,];
    newIncompleteTodos.splice(index, 1)
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]

    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickBack = (index) => {
    const deleteIncompleteTodos = [...completeTodos];
    deleteIncompleteTodos.splice(index, 1);
    const backIncompleteTodos = [...incompleteTodos, completeTodos[index]]

    setCompleteTodos(deleteIncompleteTodos);
    setIncompleteTodos(backIncompleteTodos);
  }


  return (
    <>
      <div className="input-area" >
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
