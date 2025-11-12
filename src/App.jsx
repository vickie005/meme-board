import { useState } from "react";
import "./index.css";
import "./theme.css";
import { memes as sampleMemes } from "./data/memes";
import Navbar from "./components/Navbar";
import MemeGrid from "./components/MemeGrid";
import UploadModal from "./components/UploadModal";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [memes, setMemes] = useState(sampleMemes);
  const [showUpload, setShowUpload] = useState(false);
  const [category, setCategory] = useState("All");

  const toggleTheme = () => setDarkMode(!darkMode);

  const addMeme = (newMeme) => setMemes([newMeme, ...memes]);

  const onLike = (id) =>
    setMemes(
      memes.map((m) => (m.id === id ? { ...m, likes: m.likes + 1 } : m))
    );

  const filteredMemes =
    category === "All"
      ? memes
      : memes.filter(
          (m) => m.category.toLowerCase() === category.toLowerCase()
        );

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar
        toggleTheme={toggleTheme}
        darkMode={darkMode}
        openUpload={() => setShowUpload(true)}
      />

      <div className="category-filter">
        {["All", "Coding", "Work", "AI"].map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <MemeGrid memes={filteredMemes} onLike={onLike} />

      {showUpload && (
        <UploadModal
          closeModal={() => setShowUpload(false)}
          addMeme={addMeme}
        />
      )}

      <Footer />
    </div>
  );
};

export default App;
