import styles from "./index.module.scss";
export default function Card(props) {
  return (
    <div style={{ background: "red" }} className={styles.card}>
      {props.children}
    </div>
  );
}
