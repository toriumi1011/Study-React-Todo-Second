import './App.css';
import { InputTodo } from './component/inputTodo'
import { IncompleteTodo } from './component/incompleteTodo'
import { CompleteTodo } from './component/completeTodo'
function App() {
  return (
    <>
      <InputTodo />
      <IncompleteTodo />
      <CompleteTodo />

    </>
  );
}

export default App;
