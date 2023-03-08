import "./App.css";
// import { useEffect } from "react";
// import http from "./service/axios";
import Nav from "./nav/index";
import Main from "./yourAnimes/index";
import Anime from "./animeDay/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   http
  //     .get("/recommendations/anime")
  //     .then((result) => {
  //       console.log(result.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Anime />
          </Route>
          <Route exact path="/my">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
