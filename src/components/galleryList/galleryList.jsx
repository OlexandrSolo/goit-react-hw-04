import ItemGallery from "../ItemGallery/ItemGallery";

export default function Gallery({ images, onClick }) {
  const handleClick = (src, alt, isOpen) => {
    onClick({ src, alt, isOpen });
  };

  return (
    <ul>
      {images.map((image) => (
        <li
          onClick={() =>
            handleClick(image.urls.regular, image.alt_description, true)
          }
          className="itemGallery"
          key={image.id}
        >
          <ItemGallery src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
}
