import "./App.css";
import { BrowserRouter, Route} from "react-router-dom";
import Home from './components/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

          <Route path="/home" component={Home} />

      </div>
    </BrowserRouter>
  );
}

export default App;
