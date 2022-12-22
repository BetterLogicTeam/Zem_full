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
import Activate_history from './Components/Activate_history/Activate_history';
import Direct_icome from "./Components/Direct_income/Direct_icome";
import Active from "./Components/Active/Active";
import Roi_income from "./Components/Roi_income/Roi_income";
import Registration_reward from "./Components/Registration_reward/Registration_reward";
import Activation_reward from "./Components/Activation_reward/Activation_reward";
import Reward_income from "./Components/Reward_income/Reward_income";
import Registration_level_income from "./Components/Registration_level_icome/Registration_level_income";
import Matching_income from "./Components/Matching_income/Matching_income";
import Dividend from "./Components/Dividend/Dividend";
import Withdrawal_activation from "./Components/Withdrawal_activation/Withdrawal_activation";
import WithDrawal_history from "./Components/WithDrawal_history/WithDrawal_history";
import WithDrawal from "./Components/WithDrawal/WithDrawal";
import Reg_history from "./Components/Reg_history/Reg_history";
import My_refferal from "./Components/My_refferal/My_refferal";
import Direct_leg from "./Components/Direct_leg/Direct_leg";
import Level_details from "./Components/Level_details/Level_details";
import Matchig_tree from "./Components/Matching_tree/Matchig_tree";
import My_team from "./Components/My_team/My_team";
import Nft_adress from "./Components/Nft_adress/Nft_adress";
import Self_adress from "./Components/Self_adress/Self_adress";
import Refferal_bonus from "./Components/Refferal_bonus/Refferal_bonus";
import Network_bonus from "./Components/Network_bonus/Network_bonus";
import Level_network_bonus from "./Components/Level_network_bonus/Level_network_bonus";
import Matrix_residual_1 from "./Components/Matrix_residual_1/Matrix_residual_1";
import Matrix_residual_2 from "./Components/Matrix_residual_2/Matrix_residual_2";
import Home_landing from "./Home_components/Home_landing/Home_landing";
import Home_register_page from "./Home_components/Home_register_page/Home_register_page";
import Home_login_page from "./Home_components/Home_login_page/Home_login_page";
import Daily_yield from './Components/Daily_yield/Daily_yield'
import Rank_yield from './Components/Rank_yield/Rank_yield'
import Weekly_yield from './Components/Weekly_yield/Weekly_yield'


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
            <Route exact path="/main_draaa/activate_history" element={< Activate_history />} />
            <Route exact path="/main_draaa/diect_icome" element={< Direct_icome />} />
            <Route exact path="/main_draaa/roi_icome" element={< Roi_income />} />
            <Route exact path="/main_draaa/Daliy_yield" element={< Daily_yield />} />
            <Route exact path="/main_draaa/Reg_rewarad" element={< Registration_reward />} />
            <Route exact path="/main_draaa/rang_yield" element={< Rank_yield />} />
            <Route exact path="/main_draaa/refereal_rang_yield" element={< Rank_yield />} />

            <Route exact path="/main_draaa/Activation_reward" element={< Activation_reward />} />
            <Route exact path="/main_draaa/refferal_daliy_income" element={< Reward_income />} />
            <Route exact path="/main_draaa/level_reward" element={< Registration_level_income />} />
            <Route exact path="/main_draaa/matching_reward" element={< Matching_income />} />
            <Route exact path="/main_draaa/dividend_reward" element={< Dividend />} />
            <Route exact path="/main_draaa/Rank_Achievers" element={< Rank_yield />} />
            <Route exact path="/main_draaa/withDrawal" element={< Withdrawal_activation />} />
            <Route exact path="/main_draaa/Registration_withDrawal_history" element={< WithDrawal_history />} />
            <Route exact path="/main_draaa/with_drawal" element={< WithDrawal />} />
            <Route exact path="/main_draaa/acc_withDrawal_history" element={<Reg_history />} />
            <Route exact path="/main_draaa/My_Refferal" element={<My_refferal />} />
            <Route exact path="/main_draaa/Direct_leg_business" element={<Direct_leg />} />
            <Route exact path="/main_draaa/Level_details_team" element={<Level_details />} />
            <Route exact path="/main_draaa/Matching_tree" element={<Matchig_tree />} />
            <Route exact path="/main_draaa/My_Team" element={<My_team />} />
            <Route exact path="/main_draaa/contract_adress" element={<Nft_adress />} />
            <Route exact path="/main_draaa/self_adress" element={<Self_adress />} />
            <Route exact path="/main_draaa/refferal_bonus" element={<Refferal_bonus />} />
            <Route exact path="/main_draaa/network_bonus" element={<Network_bonus />} />
            <Route exact path="/main_draaa/level_network_bonus" element={<Level_network_bonus />} />
            <Route exact path="/main_draaa/matrix_residuals_1" element={<Matrix_residual_1 />} />
            <Route exact path="/main_draaa/matrix_residuals_2" element={<Matrix_residual_2 />} />
            <Route exact path="/main_draaa/weekly_Yield" element={<Weekly_yield />} />
          </Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
