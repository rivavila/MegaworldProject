import React from "react";
// import TikTok from "react-tiktok";
import Slider from "react-slick";
import MegaworldPictureAbout from "./assets/img/MegaworldPictureAbout.jpg";
import award1 from "./assets/img/awards/award1.jpg";
import award2 from "./assets/img/awards/award2.jpg";
import award3 from "./assets/img/awards/award3.jpg";
import award4 from "./assets/img/awards/award4.jpg";
import award5 from "./assets/img/awards/award5.jpg";
import award6 from "./assets/img/awards/award6.jpg";
import award7 from "./assets/img/awards/award7.jpg";
import award8 from "./assets/img/awards/award8.jpg";
import award9 from "./assets/img/awards/award9.jpg";
import award10 from "./assets/img/awards/award10.jpg";
import award11 from "./assets/img/awards/award11.jpg";
import award12 from "./assets/img/awards/award12.jpg";
import award13 from "./assets/img/awards/award13.jpg";
import award14 from "./assets/img/awards/award14.jpg";
import award15 from "./assets/img/awards/award15.jpg";
import award16 from "./assets/img/awards/award16.jpg";
import award17 from "./assets/img/awards/award17.jpg";
import award18 from "./assets/img/awards/award18.jpg";
import award19 from "./assets/img/awards/award19.jpg";
import award20 from "./assets/img/awards/award20.jpg";
import award21 from "./assets/img/awards/award21.jpg";
import award22 from "./assets/img/awards/award22.jpg";
import award23 from "./assets/img/awards/award23.jpg";
import award24 from "./assets/img/awards/award24.jpg";
import award25 from "./assets/img/awards/award25.jpg";
import award26 from "./assets/img/awards/award26.jpg";
import award27 from "./assets/img/awards/award27.jpg";
import award28 from "./assets/img/awards/award28.jpg";
import award29 from "./assets/img/awards/award29.jpg";
import award30 from "./assets/img/awards/award30.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/about.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  // Example images array (replace with your image URLs)
  const images = [
    award1,
    award2,
    award3,
    award4,
    award5,
    award6,
    award7,
    award8,
    award9,
    award10,
    award11,
    award12,
    award13,
    award14,
    award15,
    award16,
    award17,
    award18,
    award19,
    award20,
    award21,
    award22,
    award23,
    award24,
    award25,
    award26,
    award27,
    award28,
    award29,
    award30,
    // Add more image URLs here up to 30
  ];

  return (
    <div className="content">
      <div className="about-container">
        <div className="center-image">
          <img src={MegaworldPictureAbout} alt="MegaworldPictureAbout" />
        </div>
        <p className="txtTitle">History</p>
        <p>
          The Company was founded by Andrew Tan and incorporated under
          Philippine law on August 24, 1989 to engage in the development,
          leasing and marketing of real estate. The Company initially
          established a reputation for building high-end residential
          condominiums and commercial properties located in convenient urban
          locations with easy access to offices as well as leisure and
          entertainment amenities in Metro Manila. Beginning in 1996, in
          response to demand for the lifestyle convenience of having quality
          residences in close proximity to office and leisure facilities, the
          Company began to focus on the development of mixed-use communities,
          primarily for the middle-income market, by commencing the development
          of its Eastwood City community township. In addition, the Company
          engages in other property related activities such as project design,
          construction oversight and property management. In 1999, Eastwood City
          Cyberpark became the first IT park in the Philippines to be designated
          a PEZA special economic zone.
        </p>

        {/* Embed YouTube Video */}
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pQT0lxDPfBU?si=7G9gqKtrbHY6ly9x"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <a id="about-megaworld">
          <h1 className="txtTitle">About Megaworld</h1>
        </a>
        <p>
          Megaworld Corporation is the leading residential condominium developer
          and BPO office space provider in the Philippines.
        </p>
        <p>
          Megaworld Corporation is the real estate arm of Alliance Global Group
          Inc. (AGI), one of the Philippines’ largest and publicly-listed
          conglomerates with interests in the food and beverage business,
          property development, tourism-entertainment, gaming, quick-service
          restaurants and infrastructure.
          <br />
          <br />
          It is led by visionary Dr. Andrew L. Tan. To date, Megaworld has 24
          townships and integrated lifestyle communities in 30 cities, spanning
          over 4,000 hectares. It has also built 667 residential developments,
          57 office towers, 15 full-scale lifestyle malls, 5 hotels and more
          than 3,500 hotel rooms. Megaworld also makes history for being the
          first-ever real estate company in the Philippines to be awarded the
          Hall of Famer at the FIABCI-Philippines Property and Real Estate
          Excellence for winning Outstanding Developer of the Year for three
          consecutive years (2015-2017) and for winning Best Developer Award for
          three consecutive years (2015-2017) during the 6th Property Guru
          Philippines Property Awards 2018.
        </p>
        {/* <div className="tiktok-content">
          <TikTok url="https://www.tiktok.com/@tiktok/video/1234567890" />
          <TikTok url="https://www.tiktok.com/@tiktok/video/1234567891" />
          <TikTok url="https://www.tiktok.com/@tiktok/video/1234567892" />
        </div> */}

        {/* Slick Slider for images */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default About;
