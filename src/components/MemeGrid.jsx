import Masonry from "react-masonry-css";
import MemeCard from "./MemeCard";

const MemeGrid = ({ memes, onLike }) => {
  const breakpointColumnsObj = { default: 3, 1100: 2, 700: 1 };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid-column"
    >
      {memes.map((meme) => (
        <MemeCard key={meme.id} meme={meme} onLike={onLike} />
      ))}
    </Masonry>
  );
};

export default MemeGrid;
