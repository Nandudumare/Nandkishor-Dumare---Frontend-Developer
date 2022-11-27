import "./App.css";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Filters />
      <Container />
    </div>
  );
}

export default App;
