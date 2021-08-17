import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import All from "pages/All";
import Images from "pages/Images";
import Skills from "pages/Skills";
import Extracurriculars from "pages/Extracurriculars";

const App = () => (
  <Router>
    <ul>
      <li>
        <Link to="/">All</Link>
      </li>
      <li>
        <Link to="/images">Images</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/extracurriculars">Extracurriculars</Link>
      </li>
    </ul>
    <hr />
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
    </Switch>
  </Router>
);

export default App;
