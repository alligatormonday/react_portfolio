import { Switch, Route, Router} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import Contact from "./pages/Contact"


function App() {
  return (
    <>
      <Router>


        {/* Nav Bar */}


        {/* Parent div */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
        </Switch>


      {/* Footer */}
      </Router>
    </>
  );
}

export default App;
