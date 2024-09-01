import ImageCard from "../ImageCard/ImageCard";
import styles from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ images, onClick }) {
  const handleClick = (src, alt, isOpen) => {
    onClick({ src, alt, isOpen });
  };

  return (
    <ul className={styles.parent}>
      {images.map((image) => (
        <li
          onClick={() =>
            handleClick(image.urls.regular, image.alt_description, true)
          }
          className="itemGallery"
          key={image.id}
        >
          <ImageCard src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
}
