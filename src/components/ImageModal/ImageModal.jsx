import ItemGallery from "../ImageCard/ImageCard";
import styles from "./ImageModal.module.css";
import Modal from "react-modal";

export default function ImageModal({ src, alt, isOpen, onClose }) {
  function closeModal() {
    onClose(false);
  }

  return (
    <Modal
      aria={{ labelledby: "photo", describedby: alt }}
      style={{
        overlay: {
          background: "rgba(0, 0, 0, 0.7)",
        },
      }}
      contentLabel={alt}
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      <div className={styles.container}>
        <img src={src} alt={alt} />
      </div>
    </Modal>
  );
}
