import logo from "./logo.svg";
import "./App.css";

import Main_dra from "./Components/Main_dra/Main_dra";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import Main_header from "./Components/Main_header/Main_header";

function App() {
  return (
    <div className="App page">
      {/* <Main_dra/> */}

      <Main_header />
      <>
        <BrowserRouter>
          <Main_dra />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
