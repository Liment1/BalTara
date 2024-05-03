import logo from "./logo.svg";
import "./App.css";
import Desktop1 from "./desktop1/desktop1.js";
import Desktop4 from "./desktop4/desktop4.js";

function App() {
  return (
    <div className="container">
      <section className="home">
        <Desktop1 />
      </section>
      <section className="supportus">
        <Desktop4 />
      </section>
    </div>
  );
}

export default App;
