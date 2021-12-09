import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            fpsLimit: 60,
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#f9ab00",
              },
            },
            links: {
              enable: true,
            },
            animation: {
              enable: true,
              speed: 1.5,
              minimumValue: 1,
            },
            opacity: {
              value: 0.8,
              random: {
                enable: true,
                minimumValue: 0.4,
              },
            },
            move: {
              enable: true,
              speed: 1.5,
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}
export default App;
