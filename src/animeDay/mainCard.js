import { useEffect, useState } from "react";
import styles from "./index.module.scss";
export default function MainCard({
  logo,
  airing = false,
  episodes = 0,
  genres = [],
  synopsis = "",
}) {
  const [synop, setSynop] = useState("");
  useEffect(() => {
    const reduceSynopsis = synopsis.slice(0, 150) + "...";
    setSynop(reduceSynopsis);
  }, [synopsis]);
  return (
    <div className={styles.mainCard}>
      <div className={styles.logo}>
        <img src={logo} alt="anime-logo"></img>
      </div>
      <div className={styles.base}>
        <p className={styles.eps}>
          {airing ? "+" : ""}
          {episodes}
          <span> episodios</span>
        </p>
        <div className={styles.tags}>
          {genres.map((genre) => (
            <span key={genre.mal_id}>{genre.name}</span>
          ))}
        </div>
        <p className={styles.synopsis}>{synop}</p>
        <button className={styles.fav}>⭐ Favoritar</button>
      </div>
    </div>
  );
}
