import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import {ToastContainer} from "react-toastify";
import AdminNews from "./components/AdminNews";
import AdminMenus from "./components/AdminMenus";
import NewsOverall from "./pages/NewsOverall";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/admin' component={Admin}/>
          <Route exact path='/admin/news' component={AdminNews}/>
          <Route exact path='/admin/menus' component={AdminMenus}/>
          <Route exact path='/news' component={NewsOverall}/>
        </Switch>
      </BrowserRouter>
        <ToastContainer/>
    </div>
  );
}

export default App;
