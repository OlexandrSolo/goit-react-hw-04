import { useEffect, useState } from "react";
import "./App.css";
import { Field, Form, Formik } from "formik";
import fetchImagesWithTopic from "./components/servise/images-api";
import fetchRandomImages from "./components/servise/random-images-api";

function App() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const [images, setImages] = useState([]);
  // const [randomImages, setRandomImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isChoose, setIsChoose] = useState(false);

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
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [value, page]);

  const handleRandomImages = async () => {
    setIsChoose(false);
    setImages([]);
    setPage(1);
    setLoading(true);
    setError(false);
    try {
      const randomImages = await fetchRandomImages(page);
      setImages(randomImages);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (values, actions) => {
    setImages([]);
    setValue(values.searchImg);
    actions.resetForm();
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={() => handleRandomImages()} type="button">
                Random images
              </button>
            </li>
            <li>
              <button onClick={() => setIsChoose(true)} type="button">
                Search image
              </button>
            </li>
          </ul>
          {isChoose && (
            <Formik initialValues={{ searchImg: "" }} onSubmit={handleSubmit}>
              <Form autoComplete="off">
                <Field type="text" name="searchImg" placeholder="Search" />
                <button type="submit">Search</button>
              </Form>
            </Formik>
          )}
        </nav>
      </header>
      {loading && <b>LOADING...</b>}
      {error && <b>Don't worry, try it later</b>}
      {images.length > 0 && (
        <ul>
          {images.map((image) => (
            <li key={image.id}>
              <img src={image.urls.small} alt={image.alt_description} />
              <p>{image.description}</p>
            </li>
          ))}
        </ul>
      )}

      {images.length > 0 && !loading && (
        <button onClick={handleLoadMore} type="button">
          Load more
        </button>
      )}
    </>
  );
}

export default App;
