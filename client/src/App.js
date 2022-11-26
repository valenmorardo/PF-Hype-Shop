import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/NavBar/About/About";
import CardDetail from "./Components/CardDetail/CardDetail";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import error404 from "./Components/error404/error404";
import CheckoutSuccess from "./Components/CheckoutSuccess/CheckoutSuccess";
// import SingIn from "./Components/NavBar/Registrar/SingIn";
// CARRITO
import OrderCarry from "./Components/OrderCarry/OrderCarry";
import ContactUs from "./Components/ContactUS/ContactUs";
// REGISTER
import Register from "./Components/Register/Register";

//USER DASHBOARD
import UserInformation from "./Components/UserDashboard/UserInformation";
import UserOrder from "./Components/UserDashboard/UserOrders";
import Favorites from "./Components/UserDashboard/UserFavorites";

// AdminOrder
import AdminOrders from "./Components/AdminOrders/AdminOrders";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/sneaker/:id" component={CardDetail} />
               <Route path="/orderCarry" component={OrderCarry} />
               <Route path="/contactUs" component={ContactUs} />
               <Route path="/register" component={Register} />
               <Route path="/adminOrders" component={AdminOrders} />
               <Route path="/checkout-success" component={CheckoutSuccess} />
               <Route path="/createaccount" />
               <Route path="/about" component={About} />
               <Route path="/account" component={UserInformation} />
               <Route path="/orders" component={UserOrder} />
               <Route path="/favorites" component={Favorites} />
               <Route exact path="/createProduct" component={CreateProduct} />
               <Route path="*" component={error404}></Route>
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
