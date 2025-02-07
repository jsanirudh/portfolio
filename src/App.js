import "./App.css";
import NavBar from "./Components/NavBar";
import { useState, useEffect } from "react";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Certificates from "./Components/Certificates";

function App() {
  const [activeComponent, setActiveComponent] = useState("About");
  const [navBackground, setNavBackground] = useState("#2E5266");
  const [navShadow, setNavShadow] = useState("none");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground("#1B1B1B");
        setNavShadow("0px 4px 10px rgba(0, 0, 0, 0.5)");
      } else {
        setNavBackground("#2E5266");
        setNavShadow("none");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case "About":
        return <About />;
      case "Experience":
        return <Experience />;
      case "Education":
        return <Education />;
      case "Certificates":
        return <Certificates />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <NavBar
        setActiveComponent={setActiveComponent}
        navBackground={navBackground}
        navShadow={navShadow}
      />
      <div className="content-container">{renderComponent()}</div>
    </div>
  );
}

export default App;
