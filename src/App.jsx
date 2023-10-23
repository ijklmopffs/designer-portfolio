import { useState } from "react";
import logo from "../src/assets/images/logo.svg";
import graphic from "../src/assets/images/pattern-graphic-design.svg";
import ui from "../src/assets/images/pattern-ui-ux.svg";
import apps from "../src/assets/images/pattern-apps.svg";
import illustrations from "../src/assets/images/pattern-illustrations.svg";
import photography from "../src/assets/images/pattern-photography.svg";
import motion from "../src/assets/images/pattern-motion-graphics.svg";
import amy from "../src/assets/images/image-amy.webp";
import slide1 from "../src/assets/images/image-slide-1.jpg";
import slide2 from "../src/assets/images/image-slide-2.jpg";
import slide3 from "../src/assets/images/image-slide-3.jpg";
import slide4 from "../src/assets/images/image-slide-4.jpg";
import slide5 from "../src/assets/images/image-slide-5.jpg";
import left from "../src/assets/images/icon-arrow-left.svg";
import right from "../src/assets/images/icon-arrow-right.svg";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [slide1, slide2, slide3, slide4, slide5];
  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  return (
    <>
      <section className="max-w-[1110px] p-4 mx-auto">
        <nav className="flex items-center justify-between">
          <img src={logo} alt="" />
          <button className="bg-black text-white hover:bg-[#755cde] px-4 py-2 rounded-full font-bold">
            Free Consultation
          </button>
        </nav>

        <section className="my-20">
          <div>
            <h1 className="text-6xl font-bold my-5">
              Design solutions made easy
            </h1>
            <p className="text-lg text-[#7a746e] md:w-[45rem] mx-auto">
              With over ten years of experience in various design disciplines,
              I’m your one-stop shop for your design needs.
            </p>
          </div>
          <div className="my-20 flex flex-col md:flex-row md:flex-wrap gap-10 justify-center items-center md:items-start">
            <div className="bg-[#755cde] w-80 h-[22rem] rounded-lg p-4 gap-16 flex flex-col items-center">
              <img src={graphic} alt="" className="self-end w-32" />
              <p className="self-start text-white text-2xl font-bold">
                Graphic Design
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="bg-[#f6a560] w-44 h-44 rounded-lg p-4 gap-12 flex flex-col items-center">
                  <img src={ui} alt="" className="self-end w-16 h-16" />
                  <p className="self-start text-white text-2xl font-bold">
                    UI/UX
                  </p>
                </div>
                <div className="bg-[#f39e9e] w-44 h-44 rounded-lg p-4 gap-12 flex flex-col items-center">
                  <img src={apps} alt="" className="self-end w-16 h-16" />
                  <p className="self-start text-white text-2xl font-bold">
                    Apps
                  </p>
                </div>
              </div>
              <div className="bg-[#eb7565] w-[23rem] h-40 rounded-lg p-4 gap-12 flex flex-col items-center">
                <img
                  src={illustrations}
                  alt=""
                  className="self-end w-32 h-16"
                />
                <p className="self-start text-white text-2xl font-bold">
                  Illustrations
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col gap-5">
              <div className="bg-[#61c4b7] w-[23rem] h-44 rounded-lg p-4 gap-12 flex flex-col items-center">
                <img src={photography} alt="" className="self-end w-32 h-16" />
                <p className="self-start text-white text-2xl font-bold">
                  Photography
                </p>
              </div>

              <div className="bg-[#552049] w-[23rem] h-40 rounded-lg p-4 gap-12 flex flex-col items-center">
                <img src={motion} alt="" className="self-end w-32 h-16" />
                <p className="self-start text-white text-2xl font-bold">
                  Motion Graphics
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center md:text-start gap-10">
          <div>
            <img src={amy} alt="" className="w-[28rem]" />
          </div>
          <div>
            <h2 className="font-bold text-4xl md:w-[28rem] my-8">
              I’m Amy, and I’d love to work on your next project
            </h2>
            <p className="text-[#7a746e] md:w-96 my-8">
              I love working with others to create beautiful design solutions.
              I’ve designed everything from brand illustrations to complete
              mobile apps. I’m also handy with a camera!
            </p>
            <button className="bg-[#eb7565] text-white px-4 py-2 hover:bg-[#f6a560] rounded-full font-bold">
              Free Consultation
            </button>
          </div>
        </section>
      </section>

      <section className="my-20">
        <h2 className="my-10 text-3xl font-bold">My Work</h2>
        <div className="flex justify-center items-center gap-4 overflow-hidden">
          {visibleImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-[40rem] rounded-lg"
            />
          ))}
        </div>
        <div className="flex items-center gap-4 justify-center my-10">
          <img
            src={left}
            alt=""
            className="bg-black hover:bg-[#755cde] p-4 rounded-full cursor-pointer"
            onClick={prevSlide}
          />
          <img
            src={right}
            alt=""
            className="bg-black hover:bg-[#755cde] p-4 rounded-full cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      </section>

      <section
        className="max-w-[1110px] mx-auto bg-black justify-between text-white rounded-lg 
      flex flex-col lg:flex-row items-center lg:text-start p-8 gap-8 lg:gap-0"
      >
        <div>
          <h2 className="font-bold text-4xl mb-10">Book a call with me</h2>
          <p className="w-96 text-lg">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <div>
          <button className="bg-[#eb7565] hover:bg-[#f6a560] text-white px-4 py-2 rounded-full font-bold">
            Free Consultation
          </button>
        </div>
      </section>

      <section className="max-w-[1110px] my-10 p-4 mx-auto">
        <nav className="flex items-center justify-between">
          <img src={logo} alt="" />
          <button className="bg-black hover:bg-[#755cde] text-white px-4 py-2 rounded-full font-bold">
            Free Consultation
          </button>
        </nav>
      </section>
    </>
  );
}

export default App;
