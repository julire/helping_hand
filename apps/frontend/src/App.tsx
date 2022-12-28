import * as React from "react";
import "./App.css";
import { CounterButton, NewTabLink, NewButton } from "ui";

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Admin <br />
        <span>Jordan's Kitchen Sink</span>
      </h1>
      <CounterButton />
      <NewButton />
      <p className="description">
        Built With{" "}
        <NewTabLink href="https://turbo.build/repo">Turborepo</NewTabLink> +{" "}
        <NewTabLink href="https://vitejs.dev/">Vite</NewTabLink>
      </p>
    </div>
  );
}

export default App;
