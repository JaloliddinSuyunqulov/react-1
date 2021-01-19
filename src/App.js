import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/admin' component={Admin}/>
        </Switch>
      </BrowserRouter>
        <ToastContainer/>
    </div>
  );
}

export default App;
