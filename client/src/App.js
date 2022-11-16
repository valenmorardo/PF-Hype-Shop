import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/NavBar/About/About";
import CardDetail from "./Components/CardDetail/CardDetail";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import error404 from "./Components/error404/error404";
<<<<<<< HEAD
import SingIn from "./Components/NavBar/Registrar/SingIn";
// CARRITO
import OrderCarry from "./Components/OrderCarry/OrderCarry";
=======
>>>>>>> 0e33bab5890de5a513e669697c9689c118bba083

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Switch>
               <Route exact path="/" component={Home} />
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
