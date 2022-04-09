import './Nav.css'
import Lista from "../assets/lista.svg"
import Podium from "../assets/podium.svg"
import { useHistory, useLocation } from "react-router-dom";
const rotas = {
  lista: '/',
  todos: '/anime'
}
function Nav() {
  let history = useHistory();
  const location = useLocation();
  let rota = location.pathname;
  function handleClick(link) {
    rota = link
    history.push(link);
  }
  return (
    <div className="nav">
      <h1 className="title">AnimeSort<span>.</span></h1>
      <div className={"line " + (rota === rotas.todos ? 'selected' : '')} onClick={() => handleClick(rotas.todos)} >
        <img src={Lista} alt="" />
        <span>Todos Animes</span>
      </div>
      <div className={"line " + (rota === rotas.lista ? 'selected' : '')} onClick={() => handleClick(rotas.lista)}>
        <img src={Podium} alt="" />
        <span>Sua Lista</span>
      </div>

    </div >
  );
}

export default Nav;
