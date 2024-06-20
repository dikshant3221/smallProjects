import { useState } from "react";

import Calculator from "../Calculator/Claculator";
import Counter from "../Counter/Counter";
import Stopwatch from "../StopWatch/StopWatch";
import TodoApp from "../TodoApp/TodoApp";
import "../projects/projects.css";
import Eventmanager from "../EventManager/Eventmanager"

const Projects = () => {
  const [selectedApp, setSelectedApp] = useState(null);

  const openApp = (appName) => {
    setSelectedApp(appName);
  };

  const closeProjects = () => {
    setSelectedApp(null);
  };

  if (selectedApp === "Counter") {
    return <Count onClose={closeProjects} />;
  } else if (selectedApp === "Calculator") {
    return <Calc onClose={closeProjects} />;
  } else if (selectedApp === "Stopwatch") {
    return <Watch onClose={closeProjects} />;
  } else if (selectedApp === "Todoapp") {
    return <Todo onClose={closeProjects} />;
  } else if (selectedApp === "EventManager") {
    return <Event onClose={closeProjects} />;
  }

  return (
    <div className="container px-4 py-5 project" id="hanging-icons">
      <h2 className="pb-2 border-bottom">
        Here are the projects made using React:
      </h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#toggles2"></use>
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Counter App</h3>
            <p>
              Here is a Counter App made using React that tracks and updates the
              count based on the number of times the Add, Minus, and Delete
              buttons are pressed.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => openApp("Counter")}
            >
              Open App
            </button>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#cpu-fill"></use>
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Todo App</h3>
            <p>
              This calculator app features a interface, allowing users to
              perform basic arithmetic operations. It updates the input display
              as buttons are pressed and shows the result upon calculation.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => openApp("Todoapp")}
            >
              Open App
            </button>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#tools"></use>
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Stop Watch</h3>
            <p>
              Effortlessly Track Your Time with Our Intuitive Stopwatch App.
              Start, Stop, Reset, and Record Laps with Ease! Stay Organized with
              Detailed Lap Times and Action History.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => openApp("Stopwatch")}
            >
              Open App
            </button>
          </div>
        </div>
      </div>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#toggles2"></use>
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Counter App</h3>
            <p>
              Here is a Counter App made using React that tracks and updates the
              count based on the number of times the Add, Minus, and Delete
              buttons are pressed.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => openApp("Counter")}
            >
              Open App
            </button>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#cpu-fill"></use>
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Calculator</h3>
            <p>
              This calculator app features a interface, allowing users to
              perform basic arithmetic operations. It updates the input display
              as buttons are pressed and shows the result upon calculation.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => openApp("Calculator")}
            >
              Open App
            </button>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#tools"></use>
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Event Manager</h3>
            <p>
              Effortlessly Track Your Time with Our Intuitive Stopwatch App.
              Start, Stop, Reset, and Record Laps with Ease! Stay Organized with
              Detailed Lap Times and Action History.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => openApp("EventManager")}
            >
              Open App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// Example implementation of Counter, Calculator, Stopwatch components
const Count = ({ onClose }) => (
  <div>
    <Counter />
    <button className="btn btn-primary" onClick={onClose}>
      Close Counter
    </button>
  </div>
);

const Calc = ({ onClose }) => (
  <div>
    <Calculator />
    <button className="btn btn-primary" onClick={onClose}>
      Close Calculator
    </button>
  </div>
);

const Watch = ({ onClose }) => (
  <div>
    <Stopwatch />
    <button className="btn btn-primary" onClick={onClose}>
      Close Stopwatch
    </button>
  </div>
);

const Todo = ({ onClose }) => (
  <div>
    <TodoApp />
    <button className="btn btn-primary" onClick={onClose}>
      Close TodoApp
    </button>
  </div>
);
const Event = ({ onClose }) => (
  <div>
    <Eventmanager />
    <button className="btn btn-primary" onClick={onClose}>
      Close TodoApp
    </button>
  </div>
);
