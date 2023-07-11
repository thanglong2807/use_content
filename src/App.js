
import TodoListProvider from "./TodoListProvider";
import TodoList from "./pages/TodoList";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      {/**
    <HomeProvider>
        <Home />
      </HomeProvider>
    */}

      <TodoListProvider>
        <TodoList />
      </TodoListProvider>

    </div>
  );
}
