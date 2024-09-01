import { useEffect, useState } from "react";
import styles from "./App.module.css";
import fetchImagesWithTopic from "../Service/images-api";
import Header from "../Header/Header";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

function App() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [totalPage, setTotalPage] = useState(999);

  const [modal, setModal] = useState({ src: "", alt: "", isOpen: false });
  const handleModal = ({ src, alt, isOpen }) => {
    setModal({ src: src, alt: alt, isOpen: isOpen });
  };

  useEffect(() => {
    if (value.trim() === "") {
      return;
    }
    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const newImages = await fetchImagesWithTopic(value, page);
        setImages((prevState) => [...prevState, ...newImages.results]);
        console.log(newImages);
        setTotalPage(newImages.totalPage);
        setShowBtn(totalPage && totalPage !== page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [value, page]);

  const handleSubmit = (value) => {
    setImages([]);
    setValue(value);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Header submitForm={handleSubmit} />
      <div className={styles.container}>
        {loading && <Loading />}
        {error && <ErrorMessage />}
        {images.length > 0 && (
          <ImageGallery images={images} onClick={handleModal} />
        )}
        {images.length > 0 && !loading && showBtn && (
          <LoadMoreBtn handleLoad={handleLoadMore} />
        )}

        {modal.isOpen && (
          <ImageModal
            src={modal.src}
            alt={modal.alt}
            isOpen={modal.isOpen}
            onClose={handleModal}
          />
        )}
      </div>
    </>
  );
}

export default App;
