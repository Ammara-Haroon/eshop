import React, { useEffect, useState } from "react";
import style from "./Carousel.module.scss";
import Slide from "./Slide/Slide";
const Carousel = ({
  products,
  isAutoSliding = false,
  showThumbnails = false,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    if (isAutoSliding) {
      const to = setTimeout(() => {
        setActiveSlide((activeSlide + 1) % products.length);
      }, 3000);
      return () => {
        clearTimeout(to);
      };
    }
  }, [activeSlide]);

  return (
    <div className={style.carousel}>
      <h4>Products of the Month</h4>
      <div
        className={style.container}
        style={{
          height: showThumbnails ? "calc(100% - 80px)" : "calc(100% - 20px)",
        }}
      >
        <button
          className={style.prev}
          disabled={activeSlide === 0}
          onClick={() => setActiveSlide(activeSlide - 1)}
        >
          &#10094;
        </button>
        <Slide
          imgSrc={products[activeSlide].thumbnail}
          total={products.length}
          index={activeSlide + 1}
          caption={products[activeSlide].title}
        />

        <button
          className={style.next}
          disabled={activeSlide === products.length - 1}
          onClick={() => setActiveSlide(activeSlide + 1)}
        >
          &#10095;
        </button>
      </div>
      {!showThumbnails && (
        <div className={style.dots}>
          {products.map((prod, index) => (
            <div
              key={index}
              style={
                index !== activeSlide
                  ? { backgroundColor: "darkgray" }
                  : { backgroundColor: "black" }
              }
              className={style.dot}
              onClick={() => setActiveSlide(index)}
            ></div>
          ))}
        </div>
      )}

      {showThumbnails && (
        <div className={style.thumbnails}>
          {products.map((prod, index) => (
            <div
              key={index}
              style={index !== activeSlide ? { opacity: 0.5 } : { opacity: 1 }}
              className={style.thumbnail}
              onClick={() => setActiveSlide(index)}
            >
              <img src={prod.thumbnail} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
