import logo from './logo.svg';
import './App.css';
import Home_dash from './Components/Home_dash/Home_dash'
import Activation_reward from './Components/Activation_reward/Activation_reward';
import Active from './Components/Active/Active';
import Activate_history from './Components/Activate_history/Activate_history';
import Level_details from './Components/Level_details/Level_details';
import Table from "./Components/Table/Table"
import Withdrawal_activation from './Components/Withdrawal_activation/Withdrawal_activation';
import Direct_icome from './Components/Direct_income/Direct_icome';
import Direct_leg from './Components/Direct_leg/Direct_leg';
import Dividend from './Components/Dividend/Dividend';
import Matching_income from './Components/Matching_income/Matching_income';
import Nft_adress from './Components/Nft_adress/Nft_adress';
import Rank_yield from "./Components/Rank_yield/Rank_yield"
import Reg_history from './Components/Reg_history/Reg_history';
import Registration_reward from './Components/Registration_reward/Registration_reward';
import Registration_history from './Components/Registration_history/Registration_history';
import Registration_level_income from './Components/Registration_level_icome/Registration_level_income';
import Matching_tree from './Components/Matching_tree/Matchig_tree';

import Main_dra from "./Components/Main_dra/Main_dra"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Roi_income from './Components/Roi_income/Roi_income';
import Reward_income from './Components/Reward_income/Reward_income';
import My_refferal from './Components/My_refferal/My_refferal';
import My_team from './Components/My_team/My_team';
import OffCanvas from './Components/OffCanvas/OffCanvas';
import Table_buttons from './Components/Table_buttons/Table_buttons';
import WithDrawal from './Components/WithDrawal/WithDrawal';
import WithDrawal_history from './Components/WithDrawal_history/WithDrawal_history';
import Main_header from './Components/Main_header/Main_header';
import Chart from "./Components/Chart/Chart"

function App() {
  return (
    <div className="App">

      {/* <Main_dra/> */}
  
        <Main_header/>
      <>
        <BrowserRouter>
          <Main_dra />


      
        </BrowserRouter>

      </>

      {/* <Chart/> */}
      {/* <Table_buttons/> */}
      {/* <OffCanvas/> */}
      {/* <Home_dash/>  */}
      {/* <Activation_reward/> */}
      {/* <Table/> */}
      {/* <Active/> */}
      {/* <Activate_history/>
     <Direct_icome/>
     <Direct_leg/>
     <Dividend/>
     <Matching_income/>
     <Nft_adress/>
     <Rank_yield/>
     <Reg_history/>
     <Registration_reward/>
     <Registration_history/>
     <Withdrawal_activation/>
     <Level_details/>
     */}
      {/* <Matching_tree/> */}
      {/* */}
      {/* <Reward_income/> */}
      {/* <My_refferal/> */}
      {/* <My_team/> */}
      {/*   */}
      {/* <WithDrawal/> */}
      {/* <WithDrawal_history/> */}

      {/* <Registration_level_income/> */}
      {/* <My_refferal/> */}
      {/* <OffCanvas/> */}
      {/* <Roi_income/>  */}
    </div>
  );
}

export default App;
