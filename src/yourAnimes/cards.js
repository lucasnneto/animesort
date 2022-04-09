import "./Cards.css"
import remove from "../assets/remove.svg"
function Card() {
  return (
    <div className="bodyCard">

      <div className="imgCard">

        <img src={remove} alt="" className="removeIcon" style={{ display: "none" }} />

      </div>
      <div className="BaseText">
        <div className="titlecode">
          <span className="titleCard">One Piece</span>
          <span className="codeCard">8.57</span>
        </div>
        <p>Gol D. Roger was known as the \"Pirate King,\" the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout...</p>
      </div>
    </div>
  )
}
export default Card;