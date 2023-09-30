import './App.css';
import InformationPage from "./components/InformationPage/InformationPage";
import {Route, Switch} from "react-router-dom";
import MainPageContainer from "./components/mainPage/MainPageContainer";


function App() {
  return (
    <div className="app">
        <Switch>
            <Route exact path='/'><MainPageContainer/></Route>
            <Route exact path='/city'><InformationPage/></Route>
        </Switch>
    </div>
  );
}

export default App;
