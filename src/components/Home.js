import HighlightText from "./HighlightText";
import UIClogo from "../assets/images/UICLOGOIMAGE.png";
import AboutSection from "./AboutSection";
import IndustrySection from "./IndustrySection";
import JobsSectionTemp from "./JobsSectionTemp";
import RegistrationFormSection from "./RegistrationFormSection";
import Technologies from "./Technologies";
import Header from "./Header";
import KeyTopics from "./KeyTopics";


const Home = () => {

  return (
    <div className="bg-[#000814] flex flex-col min-h-screen w-screen">
      {/* Main Overview */}
      <section className="relative bg-cover bg-center xl:h-screen sm:h-screen md:h-screen items-center">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2023/07/19/172170-846731303_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Black gradient overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Header positioned absolutely */}
        <div className="relative z-10">
          <Header />
        </div>

        <div className="max-w-[950px] xl:py-0 py-11 xl:max-w-[850px] xl:px-0 px-7 flex flex-col gap-5 mx-auto items-center justify-between text-center relative z-10">
          <h1 className="text-xl sm:text-3xl md:text-5xl text-center xl:mt-16 md:mt-24 sm:mt-14 font-bold text-white">
            NextGen 
            <HighlightText text={" Automation Conference 2024"} />
          </h1>

          <div className="w-1/2 h-1 mt-2 bg-white mx-auto"></div>

          <div className="flex flex-col gap-4 items-center justify-center">
            <h2 className="text-lg sm:text-xl md:text-4xl mb-2 font-bold text-center text-white">
              Hosted By
            </h2>
            <a href="/" className="cursor-pointer">
              <img
                src={UIClogo}
                className="w-[140px] md:w-[200px]"
                alt="UIC Logo"
              />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-lg sm:text-xl md:text-2xl mt-2 text-center text-white text-transparent bg-clip-text font-bold">
            <div className="flex gap-2 justify-center items-center">
              <i className="fa-regular fa-calendar"></i>
              24 OCTOBER
            </div>
            <div className="flex gap-2 justify-center items-center">
              <i className="fa-solid fa-hotel"></i>
              DUBAI, UAE
            </div>
            {/* <div className="flex gap-2 justify-center items-center">
              <i className="fa-solid fa-location-dot"></i>
              MUSCAT, OMAN
            </div> */}
          </div>
        </div>
      </section>

      {/* About section */}
      <section
        className="relative mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-[#000814] text-white"
        id="about"
      >
        <AboutSection />
      </section>

      {/* Key topics */}
      <section
        className="relative mx-auto mt-20 flex w-full max-w-maxContent flex-col items-center justify-between gap-8 bg-white text-white"
        id="industry"
      >
        <KeyTopics/>
      </section>

      {/* Industry section */}
      <section
        className="relative mx-auto mt-20 flex w-full max-w-maxContent flex-col items-center justify-between gap-8 bg-white text-white"
        id="industry"
      >
        <IndustrySection />
      </section>

      {/* Job section */}
      <section
        className="relative bg-white mx-auto flex w-full py-10 max-w-maxContent flex-col items-center justify-between gap-8 text-white"
        id="jobs"
        // style={{
        //   backgroundImage: "url('https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_1280.jpg')",
        // }}
      >
        <JobsSectionTemp />
      </section>

      {/* Technologies */}
      <section
        className="relative mx-auto mb-10 flex w-full max-w-maxContent flex-col items-center justify-between gap-8 bg-white text-white"
        id="jobs"
      >
        <Technologies />
      </section>

      {/* Registration form */}
      <section className="bg-[#000814] items-center">
        <RegistrationFormSection />
      </section>
      
    </div>
  );
};

export default Home;
