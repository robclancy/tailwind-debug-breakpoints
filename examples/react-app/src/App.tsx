import React from "react";
import logo from "./logo.svg";
import TailwindDebugBreakpoints from "tailwind-debug-breakpoints-react";
import "./App.css";

import resolveConfig from "tailwindcss/resolveConfig";
import config from "./tailwind.config";
const tw = resolveConfig(config);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1
          className="
          text-4xl font-semibold text-indigo-300 mb-5 px-5
          text-white sm:text-green-500 md:text-red-500 lg:text-blue-400 xl:text-amber-500 2xl:text-indigo-400
        "
        >
          Tailwind different colour for each breakpoint.
        </h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TailwindDebugBreakpoints screens={tw.theme?.screens} />
    </div>
  );
}

export default App;
