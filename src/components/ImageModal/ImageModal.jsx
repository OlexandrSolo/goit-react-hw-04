import ItemGallery from "../ItemGallery/ItemGallery";
import Modal from "react-modal";

export default function ImageModal({ src, alt, isOpen, onClose }) {
  const handleClose = () => {
    onClose({ src: "", alt: "", isOpen: false });
  };

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
      onRequestClose={handleClose}
      ariaHideApp={false}
    >
      <ItemGallery src={src} alt={alt} contain={true} />
    </Modal>
  );
}
