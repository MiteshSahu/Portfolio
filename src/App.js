import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <SocialLinks/>
      <Experience/>
      {/* <Projects/> */}
      <WorkExperience/>
      <Contact/>
    </div>
  );
}

export default App;
