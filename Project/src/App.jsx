import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoList from "./TodoList/TodoList";
import Pagination from "./Pagination/Pagination";
import VirtualizedList from "./VirtualizedList/VirtualizedList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Page</h1>,
  },
  {
    path: "/todolist",
    element: <TodoList />,
  },
  {
    path: "/pagination",
    element: <Pagination />,
  },
  {
    path: "/Virtualizedlist",
    element: <VirtualizedList />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
