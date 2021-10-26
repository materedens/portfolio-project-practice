import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from './components/Navbar';
import Header from './components/Header';
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
          type: "star",
          width: 6,
          color: "#f9ab00"
        }
      }
    }}
     />
    <Navbar />
    <Header />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
