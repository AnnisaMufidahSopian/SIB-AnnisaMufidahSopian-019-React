import React from "react";
import  Counter from "./components/counter"
import  CounterExample from "./components/CounterExample"
import  NewCounterExample from "./components/NewCounterExample"

function Header() {
  return (
    <header className="header">
      <h1>Icha's Second React App</h1>
    </header>
  );
}

function Content() {
  return (
    <div className="content">
      <p>Hi everyone, its my second react app !</p>
    </div>
  );
}

function Footer() {
  return (
    <div clasName="footer">
      <p>&copy; My self - 2021</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <hr />
      <Content />
      <hr />
      <Footer />
      <hr />
      <br />
      <Counter />
      <hr />
      <CounterExample />
      <hr />
      <NewCounterExample />
    </div>
  );
}

export default App;
