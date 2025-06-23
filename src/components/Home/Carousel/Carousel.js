import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import { FaLaptopCode, FaChartBar, FaCloud, FaCogs, FaToolbox } from "react-icons/fa";
import "./Carousel.css";
// Move this to a JSON file if needed later
const dummyData = [
  {
    title: "SaaS Development",
    description: "Custom, scalable software-as-a-service platforms built for growth.",
    icon: <FaLaptopCode size={80} color="#007BFF" />,
    link: "#",
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights using modern analytics tools.",
    icon: <FaChartBar size={80} color="#28A745" />,
    link: "#",
  },
  {
    title: "Cloud Infrastructure",
    description: "Robust cloud architecture, deployment, and DevOps pipelines.",
    icon: <FaCloud size={80} color="#17A2B8" />,
    link: "#",
  },
  {
    title: "WebApp I/O",
    description: "Powerful web applications with interactive UIs and seamless backends.",
    icon: <FaCogs size={80} color="#FFC107" />,
    link: "#",
  },
  {
    title: "Tools & Widgets",
    description: "Custom-built productivity tools, utilities, and integrations.",
    icon: <FaToolbox size={80} color="#6F42C1" />,
    link: "#",
  },
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = dummyData.length;

  // Auto slide
 useEffect(() => {
  if (currentIndex === dummyData.length) {
    const timeout = setTimeout(() => {
      setCurrentIndex(0);
      document.querySelector(".f-carousel__container").style.transition = "none";
    }, 500);

    return () => clearTimeout(timeout);
  } else {
    document.querySelector(".f-carousel__container").style.transition = "transform 0.5s ease-in-out";
  }
}, [currentIndex]);

  const nextItem = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevItem = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <div className="f-carousel f-carousel--works">
      <div className="a-container--wide f-carousel__controls" role="group" aria-label="Controls of featured works">
        <button className="a-button f-button f-carousel__control js-carousel__prev" onClick={prevItem}>
          ❮ <span className="a-sr-only">Previous Work</span>
        </button>

        <div className="f-carousel__pagination">
          {dummyData.map((_, i) => (
            <button
              key={i}
              className={`f-carousel__page ${i === currentIndex ? "current" : ""}`}
              onClick={() => setCurrentIndex(i)}
              aria-current={i === currentIndex}
            >
              <span className="a-sr-only">Go to work {i + 1}</span>
            </button>
          ))}
        </div>

        <button className="a-button f-button f-carousel__control js-carousel__next" onClick={nextItem}>
          <span className="a-sr-only">Next Work</span> ❯
        </button>
      </div>

      <div className="f-carousel__viewport" tabIndex="0">
        <ul
          className="f-carousel__container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            display: "flex",
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {dummyData.map((item, i) => (
            <CarouselItem key={i} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
