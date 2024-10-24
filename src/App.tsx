import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TestForm from "./components/TestForm";

function App() {
  const [count, setCount] = useState(0);
  const envName = import.meta.env?.VITE_APP_ENV;
  const appSecret = import.meta.env?.VITE_APP_SECRET;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React V-1.0.7</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <TestForm />
      <p>
        App is running on <strong>{envName}</strong> mode!!!
      </p>
      <p>
        App secret is <strong>{appSecret}</strong>
      </p>
    </>
  );
}

export default App;
