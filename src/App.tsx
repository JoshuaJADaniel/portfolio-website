import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import All from "pages/All";
import Images from "pages/Images";
import Skills from "pages/Skills";
import Extracurriculars from "pages/Extracurriculars";

import Menu from "components/Menu";
import Header from "components/Header";
import Footer from "components/Footer";

const App = () => (
  <Router>
    <main>
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/">
          <All />
        </Route>
        <Route exact path="/images">
          <Images />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/extracurriculars">
          <Extracurriculars />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </main>
    <Footer />
  </Router>
);

export default App;
