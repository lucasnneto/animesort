import "./Nav.css";
import Lista from "../assets/lista.svg";
import Podium from "../assets/podium.svg";
import LogoAnime from "../logo";
import { useHistory, useLocation } from "react-router-dom";
const rotas = {
  dia: "/",
  todos: "/my",
  fav: "/fav",
};
function Nav() {
  let history = useHistory();
  const location = useLocation();
  let rota = location.pathname;
  function handleClick(link) {
    rota = link;
    history.push(link);
  }
  return (
    <div className="nav">
      <LogoAnime></LogoAnime>
      <div className="options">
        <div
          className={"line " + (rota === rotas.dia ? "selected" : "")}
          onClick={() => handleClick(rotas.dia)}
        >
          <img src={Lista} alt="" />
          <span>Anime do dia</span>
        </div>
        {/* <div
          className={"line " + (rota === rotas.todos ? "selected" : "")}
          onClick={() => handleClick(rotas.todos)}
        >
          <img src={Podium} alt="" />
          <span>Lista</span>
        </div>
        <div
          className={"line " + (rota === rotas.fav ? "selected" : "")}
          onClick={() => handleClick(rotas.fav)}
        >
          <img src={Podium} alt="" />
          <span>Favoritos</span>
        </div> */}
      </div>
    </div>
  );
}

export default Nav;
