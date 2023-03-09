import { useEffect, useState } from "react";
import style from "./index.module.scss";
export default function OtherCard({
  logo,
  synopsis = "",
  title = "",
  episodes = 0,
}) {
  const [synop, setSynop] = useState("");
  useEffect(() => {
    const reduceSynopsis = synopsis.slice(0, 25) + "...";
    setSynop(reduceSynopsis);
  }, [synopsis]);
  return (
    <div className={style.otherCard}>
      <div className={style.base}>
        <p className={style.title}>{title.slice(0, 10)}</p>
        <p className={style.description}>{synop}</p>
        <p className={style.eps}>{episodes} eps.</p>
        <a className={style.fav} href="">
          Favoritar
        </a>
      </div>
      <div className={style.img}>
        <img src={logo} alt="anime-logo"></img>
      </div>
    </div>
  );
}
