import Navbar from "./Navbar"
import Home from "./Home"

function App() {
  const title = "Hi, I am new in React";
  const link = "https://www.google.com/"
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
