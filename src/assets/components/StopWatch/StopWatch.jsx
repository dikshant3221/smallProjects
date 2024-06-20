import { useState, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [history, setHistory] = useState([]);
  const timerRef = useRef(null);

  const handleStart = () => {
    if (!running) {
      setRunning(true);
      setHistory([...history, "Started"]);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    if (running) {
      clearInterval(timerRef.current);
      setRunning(false);
      setHistory([...history, "Stopped"]);
    }
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setTime(0);
    setLaps([]);
    setHistory([...history, "Reset"]);
  };

  const handleLap = () => {
    setLaps([...laps, time]);
    setHistory([...history, `Lap ${laps.length + 1}: ${formatTime(time)}`]);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <div className="card">
        <div className="card-body text-center">
          <h1 className="card-title mb-4">Stopwatch App</h1>
          <h2 className="card-subtitle mb-4">{formatTime(time)}</h2>
          <div className="d-flex justify-content-around mb-3">
            <button
              className="btn btn-success rounded-pill px-4"
              type="button"
              onClick={handleStart}
              disabled={running}
            >
              Start
            </button>
            <button
              className="btn btn-warning rounded-pill px-4"
              type="button"
              onClick={handleStop}
              disabled={!running}
            >
              Stop
            </button>
            <button
              className="btn btn-danger rounded-pill px-4"
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className="btn btn-info rounded-pill px-4"
              type="button"
              onClick={handleLap}
              disabled={!running}
            >
              Lap
            </button>
          </div>
          <div className="mt-4">
            <h5>Lap Times:</h5>
            <ul className="list-group">
              {laps.map((lap, index) => (
                <li key={index} className="list-group-item">
                  Lap {index + 1}: {formatTime(lap)}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h5>History Log:</h5>
            <ul className="list-group">
              {history.map((entry, index) => (
                <li key={index} className="list-group-item">
                  {entry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
