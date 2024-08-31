import toast, { Toaster } from "react-hot-toast";
import { Triangle } from "react-loader-spinner";
import { useEffect, useState } from "react";
import "./App.css";
import fetchImagesWithTopic from "./components/servise/images-api";
import Header from "./components/Header/Header";
import Gallery from "./components/GalleryList/GalleryList";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState({ src: "", alt: "", isOpen: false });
  const handleModal = ({ src, alt, isOpen }) => {
    setModal({ src: src, alt: alt, isOpen: isOpen });
  };

  const wrapperStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
        setImages((prevState) => [...prevState, ...newImages]);
      } catch (error) {
        setError(true);
        toast.error("This didn't work.");
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [value, page]);

  const handleSubmit = (value) => {
    if (value.trim() === "") {
      toast("What? You must entered text", {
        icon: "🔎",
      });
    }
    setImages([]);
    setValue(value);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Header submitForm={handleSubmit} />
      {loading && (
        <div>
          <Triangle
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={wrapperStyle}
            wrapperClass=""
          />
        </div>
      )}
      {error && (
        <div>
          <Toaster position="bottom-center" reverseOrder={false} />
        </div>
      )}
      {images.length > 0 ? (
        <Gallery images={images} onClick={handleModal} />
      ) : (
        <div>
          <Toaster position="bottom-center" reverseOrder={false} />
        </div>
      )}

      {images.length > 0 && !loading && (
        <button onClick={handleLoadMore} type="button">
          Load more
        </button>
      )}

      {modal.isOpen && (
        <ImageModal
          src={modal.src}
          alt={modal.alt}
          isOpen={modal.isOpen}
          onClose={handleModal}
        />
      )}
    </>
  );
}

export default App;
