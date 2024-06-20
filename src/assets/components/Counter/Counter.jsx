import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [step, setStep] = useState(1);
  const [prevCount, setPrevCount] = useState(0);
  const [plusClicks, setPlusClicks] = useState(0);
  const [minusClicks, setMinusClicks] = useState(0);
  const [deleteClicks, setDeleteClicks] = useState(0);
  const minLimit = 0;
  const maxLimit = 100;

  const handlePlusClick = () => {
    if (count + step <= maxLimit) {
      setPrevCount(count);
      setCount(count + step);
      setHistory([...history, `Incremented by ${step}`]);
      setPlusClicks(plusClicks + 1);
    }
  };

  const handleMinusClick = () => {
    if (count - step >= minLimit) {
      setPrevCount(count);
      setCount(count - step);
      setHistory([...history, `Decremented by ${step}`]);
      setMinusClicks(minusClicks + 1);
    }
  };

  const handleDeleteClick = () => {
    setCount(prevCount);
    setHistory([...history, "Counter reset to previous value"]);
  };

  const handleResetClick = () => {
    setPrevCount(count);
    setCount(0);
    setHistory([...history, "Counter reset to 0"]);
    setDeleteClicks(deleteClicks + 1);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <div className="card">
        <div className="card-body text-center">
          <h1 className="card-title mb-4">Counter App</h1>
          <h2 className="card-subtitle mb-4">Counter Value: {count}</h2>
          <div className="mb-3">
            <label className="form-label">Step Value:</label>
            <input
              type="number"
              className="form-control"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              min="1"
            />
          </div>
          <div className="d-flex justify-content-around mb-3">
            <button
              className="btn btn-success rounded-pill px-4"
              type="button"
              onClick={handlePlusClick}
            >
              Plus
            </button>
            <button
              className="btn btn-warning rounded-pill px-4"
              type="button"
              onClick={handleMinusClick}
            >
              Minus
            </button>
            <button
              className="btn btn-danger rounded-pill px-4"
              type="button"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
            <button
              className="btn btn-info rounded-pill px-4"
              type="button"
              onClick={handleResetClick}
            >
              Reset
            </button>
          </div>
          <div className="mt-4">
            <h5>Button Click Counts:</h5>
            <p>Plus Clicks: {plusClicks}</p>
            <p>Minus Clicks: {minusClicks}</p>
            <p>Delete Clicks: {deleteClicks}</p>
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

export default Counter;
