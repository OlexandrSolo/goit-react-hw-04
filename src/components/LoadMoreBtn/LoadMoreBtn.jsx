import styles from "../LoadMoreBtn/LoadMoreBtn.module.css";

export default function LoadMoreBtn({ handleLoad }) {
  return (
    <button className={styles.button} onClick={handleLoad} type="button">
      Load more
    </button>
  );
}
