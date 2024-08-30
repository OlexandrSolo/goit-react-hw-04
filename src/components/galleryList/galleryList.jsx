import ItemGallery from "../itemGallery/itemGallery";

export default function Gallery({ images }) {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ItemGallery image={image} />
        </li>
      ))}
    </ul>
  );
}
