import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const result = new Function('return ' + input)();
      setResult(result.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "300px" }}>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center">Calculator</h1>
          <input
            type="text"
            className="form-control mb-3"
            value={input}
            readOnly
          />
          <div className="row">
            <div className="col-3">
              <button
                className="btn btn-secondary btn-block"
                onClick={() => handleClick("1")}
              >
                1
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-secondary btn-block"
                onClick={() => handleClick("2")}
              >
                2
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-secondary btn-block"
                onClick={() => handleClick("3")}
              >
                3
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-warning btn-block"
                onClick={() => handleClick("+")}
              >
                +
              </button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-3">
              <button
                className="btn btn-secondary btn-block"
                onClick={() => handleClick("4")}
              >
                4
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-secondary btn-block"
                onClick={() => handleClick("5")}
              >
                5
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-secondary btn-block"
                onClick={() => handleClick("6")}
              >
                6
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-warning btn-block"
                onClick={() => handleClick("-")}
              >
                -
              </button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-3">
              <button
                className="btn btn-secondary btn-block"
                onClick={() => handleClick("7")}
              >
                7
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-secondary btn-block"
                onClick={() => handleClick("8")}
              >
                8
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-secondary btn-block"
                onClick={() => handleClick("9")}
              >
                9
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-warning btn-block"
                onClick={() => handleClick("*")}
              >
                *
              </button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-3">
              <button
                className="btn btn-secondary btn-block"
                onClick={() => handleClick("0")}
              >
                0
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-danger btn-block"
                onClick={handleClear}
              >
                C
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-primary btn-block"
                onClick={handleCalculate}
              >
                =
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-warning btn-block"
                onClick={() => handleClick("/")}
              >
                /
              </button>
            </div>
          </div>
          {result && (
            <div className="alert alert-info mt-3" role="alert">
              Result: {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
