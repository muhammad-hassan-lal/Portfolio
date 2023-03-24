import React, {useRef} from "react";
import profilePicture from "../src/assets/IMG_20200318_135140_163.jpg";
import Header from "./components/Hearder/Header";
import Summary from "./components/Summary";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Services from "./components/Services/Services";

const App = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const experienceRef = useRef(null);
  const workRef = useRef(null);
  return (
    <div className="font-sans">
      <Header />
      <main className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
          <Summary />
          <img
            src={profilePicture}
            alt="Profile Picture"
            className="cover center"
          />
          <Skills />
        </div>
        <Services />
        <WorkExperience ref={experienceRef} />
        <Projects />
      </main>
      <Footer 
      experienceRef={experienceRef}
      />
    </div>
  );
};

export default App;
