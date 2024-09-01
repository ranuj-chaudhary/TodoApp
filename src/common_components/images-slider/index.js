import { useEffect, useState } from "react";
import "./styles.css";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

export default function ImageSlider({ url, page, limit }) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleCurrentSlide(getIndex) {
    setCurrentIndex(getIndex);
  }
  function handleRightClick() {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }
  function handleLeftClick() {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }

  async function fetchImages(getUrl) {
    try {
      setIsLoading(true);
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      if (!res.ok) {
        throw new Error("Error Fetching the images");
      }
      const data = await res.json();
      if (data) {
        setImages(
          data.map((item) => {
            return { id: item.id, imageUrl: item.download_url };
          })
        );
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(
    function () {
      if (url !== "") fetchImages(url);
    },
    [url]
  );

  if (isLoading)
    return (
      <div>
        <p>Loading Slider Images..</p>
      </div>
    );
  if (errorMessage)
    return (
      <div>
        <p>Error while fetching images: {errorMessage}</p>
      </div>
    );

  return (
    <div className="slide-container">
      {images.length > 0 ? (
        <img src={images[currentIndex].imageUrl} alt="" />
      ) : null}
      <div className="slide-indicator-container" contenteditable="false">
        {images.length > 0
          ? [...Array(images.length)].map((_, idx) => {
              return (
                <span
                  key={idx}
                  className={
                    currentIndex === idx
                      ? "slide-indicator"
                      : "slide-indicator inactive-indicator"
                  }
                  onClick={() => handleCurrentSlide(idx)}
                  contenteditable="false"
                ></span>
              );
            })
          : null}
      </div>

      <AiOutlineLeftCircle className="left-icon" onClick={handleLeftClick} />

      <AiOutlineRightCircle className="right-icon" onClick={handleRightClick} />
    </div>
  );
}
