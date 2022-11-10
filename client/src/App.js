import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/NavBar/About/About";
import CardDetail from "./Components/Card/CardDetail/CardDetail";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/sneaker/:id" component={CardDetail}/>
          <Route path="/createaccount" />
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
