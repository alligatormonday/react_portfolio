import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar/index"
import Footer from "./components/Footer/index"
import Wrapper from "./components/Wrapper/index"


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
