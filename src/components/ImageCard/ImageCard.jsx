import styles from "./ImageCard.module.css";

export default function ImageCard({ src, alt, contain }) {
  return (
    <>
      <div
        className={
          contain ? styles.container + " " + styles.contain : styles.container
        }
      >
        <img src={src} alt={alt} />
      </div>
    </>
  );
}
