import styles from "./itemGallery.module.css";

export default function ItemGallery({ src, alt, contain }) {
  return (
    <div>
      <div
        className={
          contain ? styles.container + " " + styles.contain : styles.container
        }
      >
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
