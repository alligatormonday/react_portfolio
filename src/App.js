import { Switch, Route, Router} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <Router>


        {/* Nav Bar */}


        {/* Parent div */}
        <Switch>
          <Route exact path="/, /contact"/>
        </Switch>



      </Router>
    </>
  );
}

export default App;
