import React, { useContext } from "react";
import Slider from "react-slick";
import { DataContext } from "../../Context/Data";
import { v4 as uuid } from 'uuid';
import "./slider.css"; // Import the CSS file



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`slick-arrow ${className}`}
        style={{ ...style,}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,}}
        onClick={onClick}
      />
    );
  }

export default function About() {
const {ImgsArr} = useContext(DataContext)

const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 768, // Define the breakpoint for mobile screens
          settings: {
            vertical: true,
            verticalSwiping: true,
            dots: true,
            infinite: true,
            speed: 5000,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: "linear",
            pauseOnHover: true, // Change to vertical on mobile screens
          }
        }
      ]
};



  return (
    <>
      <div className="container mb-5 mt-3 pb-5">
        <div className="row">
         <h1 className="mainColor">About</h1>   
            <img  className="my-3 rounded-5" src="https://www.talaatmoustafa.com/Upload/43alrehab%201%20850%20x%20350%20px.jpg" alt="EL-Rehab phot"/>
          <h2 className="my-3 mainColor">A New Vision For Life In Egypt</h2>
          <p className="my-3">
            The first fully-fledged community, creating a comprehensive
            integrated residential scheme within the New Cairo plan. AL-Rehab is
            the hub of New Cairo, located only ten minutes away from Heliopolis
            and Nasr City and twenty minutes from Downtown Cairo.
          </p>
          <p className="my-3">
            AL-Rehab City covers a total area of 10 million m2 planned to
            accommodate 200 thousand residents. The city comprises ten phases
            from which nine are established, offering different types of
            residential units that vary from apartment to villa accommodations,
            in addition to a wide variety of amenities.
          </p>
          <p className="my-3">
            Al Rehab is designed to accommodate 32,385 Apartment and 3741
            Villas. Moreover, Al Rehab enjoys a fully integrated services plan
            including but not limited to commercial markets, shopping Malls,
            Food courts, offering educational mix from International, National,
            and experimental Schools, A Sporting and Social Club, 4 Medical
            Centers, An Internal and external Transportation Network, Banks and
            Money Exchange Services.
          </p>
          <h2 className="my-3 mainColor" >Al-Rehab Images Gallery:</h2>
    <Slider {...settings}>
    {ImgsArr.map((img) => (
            <div key={uuid()} className="my-3 px-1">
              <img height={200} className="w-100 rounded-4" src={img} alt="Photos galley" />
            </div>
          ))}
    </Slider>
        </div>
      </div>
    </>
  );
}
