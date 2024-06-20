import "./App.css";
import Calculator from "./assets/components/Calculator/Claculator";
import Counter from "./assets/components/Counter/Counter";
import Footer from "./assets/components/Footer/Footer";
import Header from "./assets/components/Header/Header";
import Stopwatch from "./assets/components/StopWatch/StopWatch";
import Projects from "./assets/components/projects/projects";
function App() {
  return (
    <div>
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
