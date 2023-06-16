import React, { Component } from "react";
import Slider from "react-slick";
const arrowStyle = {
  background: "#fff",
  zIndex: 1,
  boxShadow: "0 6px 10px 0 rgba(0,0,0,.11)",
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  padding: "1rem",
};
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img
    src="https://res.cloudinary.com/dmskljxga/image/upload/v1686839850/leftarrow_z603t0.svg"
    alt="prevArrow"
    {...props}
    style={arrowStyle}
  />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img
    src="https://res.cloudinary.com/dmskljxga/image/upload/v1686839998/rightarrow_uv27po.svg"
    alt="nextArrow"
    {...props}
    style={arrowStyle}
  />
);
export default class Responsive extends Component {
  render() {
    const { data } = this.props;

    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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
      <div className="carousel-container">
        <Slider {...settings}>
          {data &&
            data.map(({ img, title }, index) => {
              return (
                <div
                  key={index}
                  className="carousel-three"
                  style={{ border: "2px solid black" }}
                >
                  <div>
                    <img src={img} alt="" />
                    <h1>{title}</h1>
                  </div>
                </div>
              );
            })}
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div> */}
        </Slider>
      </div>
    );
  }
}
