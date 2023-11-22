import React from "react";
import { ReviewCard } from "../Components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewData } from "./DummyData";
const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          dots: true,
          draggable: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center flex-col">
        <h2 className="text-2xl md:text-3xl text-primary font-semibold uppercase">
          Reviews
        </h2>
        <p className="my-3 font-medium text-lg md:text-xl capitalize">
          What my team mate say about me
        </p>
      </div>

      <div className="w-[90%] mx-auto  mt-4">
        <Slider {...settings}>
          {ReviewData.map((review) => (
            <div key={review.id}>
              <ReviewCard {...review} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
