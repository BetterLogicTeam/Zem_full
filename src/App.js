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
import Refferal_bonus from "./Components/Refferal_bonus/Refferal_bonus";

function App() {
  return (
    <div className="App page">
      {/* <Main_dra/> */}

      {/* <Main_header /> */}
      <>
        <BrowserRouter>
          <Main_dra />
        </BrowserRouter>
      </>
      {/* <Refferal_bonus/> */}
    </div>
  );
}

export default App;
