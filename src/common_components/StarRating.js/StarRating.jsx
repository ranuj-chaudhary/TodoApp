import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

function StarRating({ noOfStars = 5, fontSize = 24, color = "yellow" }) {
  const [hover, setHover] = useState(null);
  const [ratings, setRatings] = useState(null);

  function handleClick(index) {
    setRatings(index);
  }

  function handleMouseOver(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(ratings);
  }

  return (
    <div className="container">
      {[...Array(noOfStars)].map((ele, idx) => (
        <AiFillStar
          color={idx <= hover && hover != null ? color : ""}
          onClick={() => handleClick(idx)}
          onMouseLeave={() => handleMouseLeave(idx)}
          onMouseOver={() => handleMouseOver(idx)}
          fontSize={fontSize}
          style={{ backgroundColor: "lightblue" }}
        />
      ))}
    </div>
  );
}

export default StarRating;
