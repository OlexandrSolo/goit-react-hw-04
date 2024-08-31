import styles from "../Button/Button.module.css";

export default function Button({ handleLoad }) {
  return (
    <button className={styles.button} onClick={handleLoad} type="button">
      Load more
    </button>
  );
}
