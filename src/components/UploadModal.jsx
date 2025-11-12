import { useState } from "react";

const UploadModal = ({ closeModal, addMeme }) => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image && caption) {
      addMeme({
        id: Date.now(),
        image: URL.createObjectURL(image),
        caption,
        category: category || "General",
        likes: 0,
      });
      closeModal();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Upload Meme</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
          <input
            type="text"
            placeholder="Caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Category (e.g. Coding)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button type="submit">Post Meme</button>
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;
