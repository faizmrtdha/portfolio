import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Project />
    </>
  );
}
export default App;
