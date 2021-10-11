import React from "react";
import "./styles/index.scss";
import TheHeader from "./components/TheHeader";
import Stories from "./components/Stories";

function App() {
  return (
    <div className="App">
      <TheHeader />
      <Stories />
    </div>
  );
}

export default App;
