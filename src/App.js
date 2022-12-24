import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/NavBar";
import Project from "./components/project/Project";
import Skill from "./components/skill/Skill";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
