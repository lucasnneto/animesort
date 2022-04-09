import './App.css';
import { useEffect } from 'react';
import http from "./service/axios";
import Nav from "./nav/index"
import Main from "./yourAnimes/index"
import Anime from "./allAnimes/index"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  useEffect(() => {
    http.get('/season/2021/summer')
      .then(
        (result) => {
          console.log(result.data)
        }
      )
      .catch((err) => {
        console.error(err)
      })
  }, [])
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/anime">
            <Anime />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
