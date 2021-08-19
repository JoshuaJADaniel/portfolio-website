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

import Header from "components/Header";
import Menu from "components/Menu";

const App = () => (
  <Router>
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
  </Router>
);

export default App;
