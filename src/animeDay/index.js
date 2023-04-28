import http from "service/axios";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import MainCard from "./mainCard";
import OtherCard from "./otherCard";

export default function AnimeDay() {
  const [anime, setAnime] = useState({});
  const [oAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
  }
  async function getAnimeDetail(id) {
    try {
      const { data } = await http.get("/anime/" + id);
      return data.data;
    } catch (error) {
      return false;
    }
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      const getLastAnime = localStorage.getItem("lastanime");
      if (
        getLastAnime?.slice(0, 10) !== new Date().toISOString().slice(0, 10)
      ) {
        const { data } = await http.get("/recommendations/anime");
        let animeData = false;
        while (!animeData) {
          let selectedAnime = getRandomItem(data.data)?.entry?.[0] || {};
          let listAnime = [
            getRandomItem(data.data)?.entry?.[0],
            getRandomItem(data.data)?.entry?.[0],
            getRandomItem(data.data)?.entry?.[0],
          ];
          animeData = await getAnimeDetail(selectedAnime.mal_id);
          const list = [];

          await new Promise((res) => {
            let animes = 0;
            let timeout = setInterval(async () => {
              list.push(await getAnimeDetail(listAnime[animes].mal_id));
              if (animes === 2) {
                clearInterval(timeout);
                res();
              }
              animes++;
            }, 1000);
          });

          oAnime.push(...list.filter((el) => !!el));
          localStorage.setItem(
            "animelist",
            JSON.stringify(list.filter((el) => !!el))
          );
          console.log(oAnime);
          if (animeData) {
            setAnime(animeData);
            localStorage.setItem("lastanime", new Date().toISOString());
            localStorage.setItem("anime", JSON.stringify(animeData));
          }
        }
      } else {
        const getLastAnimeData = JSON.parse(
          localStorage.getItem("anime") || "{}"
        );
        const getList = JSON.parse(localStorage.getItem("animelist") || "[]");
        setAnime(getLastAnimeData);
        oAnime.splice(0, oAnime.length);
        oAnime.push(...getList);
      }
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="body" style={{ overflow: "auto" }}>
      {loading ? (
        <div>Carregando</div>
      ) : (
        <div className={styles.menu}>
          <div>
            <h3 className={styles["title-1"]}>anime do dia é</h3>
            <h2 className={styles["title-2"]}>{anime.title}</h2>
            <MainCard
              logo={anime.images?.jpg?.image_url}
              airing={anime.airing}
              episodes={anime.episodes}
              genres={anime.genres}
              synopsis={anime.synopsis}
            ></MainCard>
          </div>
          <div className={styles.sidemenu}>
            <p className={styles.title}>Outros animes</p>
            <div className={styles.sidemenulist}>
              {oAnime.map((an) => (
                <OtherCard
                  key={an.mal_id}
                  logo={an.images?.jpg?.image_url}
                  synopsis={an.synopsis}
                  episodes={an.episodes}
                  title={an.title}
                ></OtherCard>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
