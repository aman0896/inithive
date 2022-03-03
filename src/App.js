import NavBar from "./components/Navbar/NavBar";
import "./App.css";
import Home from "./Pages/Home";
import "./css/Style.css";
import FooterContainer from "./components/Footer/FooterContainer";
// import "./css/animate.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <FooterContainer />
    </div>
  );
}

export default App;
