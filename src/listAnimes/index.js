import http from "service/axios";
import Card from "./card";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
export default function List() {
  const [animes, setAnimes] = useState([]);
  useEffect(async () => {
    const { data } = await http.get("/seasons/now");
    setAnimes(divideArray(data.data));
  });
  const list = Array.from(Array(10).keys());
  function divideArray(array = [], divider = 8) {
    const novoArray = [];
    for (var i = 0; i < array.length; i = i + divider) {
      novoArray.push(array.slice(i, i + divider));
    }
    return novoArray;
  }

  return (
    <div className="body" style={{ overflow: "auto" }}>
      {animes.map((subList, ind) => (
        <div className={styles.grid} key={ind}>
          {subList.map((el) => (
            <Card key={el.mal_id}>{el.title}</Card>
          ))}
        </div>
      ))}
    </div>
  );
}
