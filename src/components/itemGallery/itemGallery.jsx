export default function ItemGallery({ image }) {
  console.log(image);
  return (
    <div>
      <div>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
      <p>{image.description}</p>
    </div>
  );
}
