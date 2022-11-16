import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/NavBar/About/About";
import CardDetail from "./Components/CardDetail/CardDetail";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import error404 from "./Components/error404/error404";
import SingIn from "./Components/NavBar/Registrar/SingIn";
// CARRITO
import OrderCarry from "./Components/OrderCarry/OrderCarry";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/singIn" component={SingIn} />
               <Route path="/sneaker/:id" component={CardDetail} />
               <Route path="/orderCarry" component={OrderCarry} />
               <Route path="/createaccount" />
               <Route path="/about" component={About} />
               <Route exact path="/createProduct" component={CreateProduct} />
               <Route path="*" component={error404}></Route>
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
