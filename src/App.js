import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "venobox/venobox/venobox.min.css";
import Particles from "react-particles-js";
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Particles
    className="particles-canvas"
    params={{
      Particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type: "circle",
          width: 6,
          color: "#f9ab00"
        }
      }
    }}
     />
    <Navbar />
    <Header />
    <About />
    <Services />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
