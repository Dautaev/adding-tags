import { useState } from "react";
import { tasks } from "./tasks";
import Todos from "./Todos";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(tasks);

  const addTodos = () => {
    setTodos([
      ...todos,
      {
        text: value,
      },
    ]);
    setValue("");
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="handleInput"
          placeholder="Введите текс..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button disabled={!value} onClick={addTodos} className="handleButton">
          Добавить
        </button>
      </form>
      <Todos todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
