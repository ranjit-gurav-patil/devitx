import React from "react";

const CarouselItem = ({ title, description, icon, link }) => {
  return (
    <li className="f-carousel__item js-carousel__item">
      <article className="f-work f-work--listing f-work--web-design">
        <a className="f-listing__overlay f-listing__overlay--link" href={link}>
          <span className="a-sr-only">View {title} work</span>
        </a>



        <div className="a-gap--s a-stack a-stack--align-center f-listing__container">
                 <div className="carousel-icon">{icon}</div>
          <header className="a-gap--xs a-stack a-stack--align-center f-listing__header">
            <h3><a href={link}>{title}</a></h3>
            <p className="f-listing__excerpt f-work__description">{description}</p>
          </header>
          <ul className="f-listing__terms f-work__terms">
            <li className="f-work__term f-work__term--service f-work__term--web-design">
              <span className="a-sr-only">Web Design</span>
            </li>
          </ul>
        </div>
      </article>
    </li>
  );
};

export default CarouselItem;
