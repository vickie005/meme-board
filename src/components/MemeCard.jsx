import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const MemeCard = ({ meme, onLike }) => {
  return (
    <motion.div
      className="meme-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <img src={meme.image} alt={meme.caption} className="meme-img" />
      <p className="caption">{meme.caption}</p>
      <div className="meme-actions">
        <button onClick={() => onLike(meme.id)}>
          <FaHeart /> {meme.likes}
        </button>
      </div>
    </motion.div>
  );
};

export default MemeCard;
