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
import Activate_history from '../';

import Roi_income from '../Roi_income/Roi_income';
import Registration_reward from '../Registration_reward/Registration_reward';
import Level_details from '../Level_details/Level_details';
import Activation_reward from "../Activation_reward/Activation_reward"
import Main_header from "./Components/Main_header/Main_header";
import Refferal_bonus from "./Components/Refferal_bonus/Refferal_bonus";
import Login_page from "./Components/Login_page/Login_page";
import Home_landing from "./Home_components/Home_landing/Home_landing";
import Home_login_page from "./Home_components/Home_login_page/Home_login_page";
import Home_register_page from "./Home_components/Home_register_page/Home_register_page";
import Active from "./Components/Active/Active";
import Reward_income from "../Reward_income/Reward_income"
import Matching_income from "../Matching_income/Matching_income"
import Dividend from "../Dividend/Dividend"
import Rank_yield from "../Rank_yield/Rank_yield"
import Withdrawal_activation from "../Withdrawal_activation/Withdrawal_activation"
import Registration_level_income from '../Registration_level_icome/Registration_level_income';
import WithDrawal_history from '../WithDrawal_history/WithDrawal_history';
import WithDrawal from '../WithDrawal/WithDrawal';
import Reg_history from '../Reg_history/Reg_history';
import My_refferal from '../My_refferal/My_refferal';
import Direct_leg from '../Direct_leg/Direct_leg';

import Direct_icome from '../Direct_income/Direct_icome';
import Matchig_tree from "../Matching_tree/Matchig_tree"
import My_team from "../My_team/My_team"
import Nft_adress from "../Nft_adress/Nft_adress"
import Self_adress from "../Self_adress/Self_adress"
import Offcanvas from 'react-bootstrap/Offcanvas';
import Daily_yield from "../Daily_yield/Daily_yield"
// import Refferal_bonus from '../Refferal_bonus/Refferal_bonus';
import Network_bonus from '../Network_bonus/Network_bonus';
import Level_network_bonus from '../Level_network_bonus/Level_network_bonus';
import Matrix_residual_1 from '../Matrix_residual_1/Matrix_residual_1';
import Matrix_residual_2 from '../Matrix_residual_2/Matrix_residual_2';
import Weekly_yield from '../Weekly_yield/Weekly_yield';

function App() {
  return (
    <div className="App ">
      {/* <Home_landing/> */}
      <BrowserRouter>
      {/* <Main_dra/> */}

      <Routes>
      <Route exact path="/" element={<Home_landing />} />
      <Route exact path="/home_register" element={<Home_register_page />} />
      <Route exact path="/home_login_page" element={<Home_login_page />} />
      <Route exact path="/main_draaa" element={<Main_dra />} >
      <Route exact path="/main_draaa/activate" element={< Active />} />
      <Route exact path="/activate_history" element={< Activate_history />} />
            <Route exact path="/diect_icome" element={< Direct_icome />} />
            <Route exact path="/roi_icome" element={< Roi_income />} />
            <Route exact path="/Daliy_yield" element={< Daily_yield />} />
            <Route exact path="/Reg_rewarad" element={< Registration_reward />} />
            <Route exact path="/rang_yield" element={< Rank_yield />} />
            <Route exact path="/refereal_rang_yield" element={< Rank_yield />} />
        
            <Route exact path="/Activation_reward" element={< Activation_reward />} />
            <Route exact path="/refferal_daliy_income" element={< Reward_income />} />
            <Route exact path="/level_reward" element={< Registration_level_income />} />
            <Route exact path="/matching_reward" element={< Matching_income />} />
            <Route exact path="/dividend_reward" element={< Dividend />} />
            <Route exact path="/Rank_Achievers" element={< Rank_yield />} />
            <Route exact path="/withDrawal" element={< Withdrawal_activation />} />
            <Route exact path="/Registration_withDrawal_history" element={< WithDrawal_history />} />
            <Route exact path="/with_drawal" element={< WithDrawal />} />
            <Route exact path="/acc_withDrawal_history" element={<Reg_history />} />
            <Route exact path="/My_Refferal" element={<My_refferal />} />
            <Route exact path="/Direct_leg_business" element={<Direct_leg />} />
            <Route exact path="/Level_details_team" element={<Level_details />} />
            <Route exact path="/Matching_tree" element={<Matchig_tree />} />
            <Route exact path="/My_Team" element={<My_team />} />
            <Route exact path="/contract_adress" element={<Nft_adress />} />
            <Route exact path="/self_adress" element={<Self_adress />} />
            <Route exact path="/refferal_bonus" element={<Refferal_bonus />} />
            <Route exact path="/network_bonus" element={<Network_bonus />} />
            <Route exact path="/level_network_bonus" element={<Level_network_bonus />} />
            <Route exact path="/matrix_residuals_1" element={<Matrix_residual_1 />} />
            <Route exact path="/matrix_residuals_2" element={<Matrix_residual_2 />} />
            <Route exact path="/weekly_Yield" element={<Weekly_yield />} />
      </Route>

      </Routes>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
