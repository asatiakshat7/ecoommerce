import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPages from './pages/LoginPage';
import SignupPages from './pages/SignupPage';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPages></LoginPages>,
  },
  {
    path: "/signup",
    element: <SignupPages></SignupPages>,
  }

]);


function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
