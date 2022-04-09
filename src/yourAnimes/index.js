import "./Body.css"
import remove from "../assets/remove.svg"
import novo from "../assets/Novo.svg"
import Card from "./cards.js"
const texts = [
  "Rei dos Piratas",
  "Mestre Pokémon",
  "Caçador de Oni"
]
function Main() {

  function newAnime() {
    console.log(".")
  }
  const listAnimes = [...Array(5).keys()].map((number) =>
    <Card key={number.toString()} value={number} />
  );
  return (
    <div className="body">
      <div className="headerTitle">
        <div></div>
        <div className="titleBody">
          <h2>Olá <span>{texts[Math.floor(Math.random() * texts.length)]}</span></h2>
          <h1>Sua Lista de Animes</h1>
        </div>
        <img src={novo} alt="" onClick={newAnime} />
      </div>
      <div>
        <span className="three">Os três grandes</span>
        <div className="listMain">
          <div className="cardbt">
            <div className="headerCard">
              <span className="number">2</span>
              <img src={remove} alt="" className="remove" style={{ display: "none" }} />
            </div>
            <img src={"https://i.pinimg.com/originals/31/f3/ef/31f3ef01414add1201930f29f39f4d3b.jpg"} alt="" />
            <p>One Piece</p>
            <p className="score">8.53</p>
          </div>
          <div className="cardbt">
            <div className="headerCard">
              <span className="number">1</span>
              <img src={remove} alt="" className="remove" style={{ display: "none" }} />
            </div>
            <img src={"https://i.pinimg.com/originals/31/f3/ef/31f3ef01414add1201930f29f39f4d3b.jpg"} alt="" />
            <p>One Piece</p>
            <p className="score">8.53</p>
          </div>
          <div className="cardbt">
            <div className="headerCard">
              <span className="number">3</span>
              <img src={remove} alt="" className="remove" style={{ display: "none" }} />
            </div>
            <img src={"https://i.pinimg.com/originals/31/f3/ef/31f3ef01414add1201930f29f39f4d3b.jpg"} alt="" />
            <p>One Piece</p>
            <p className="score">8.53</p>
          </div>
        </div>
      </div>
      <div className="ListCards">
        {listAnimes}
      </div>
    </div>
  );
}

export default Main;
