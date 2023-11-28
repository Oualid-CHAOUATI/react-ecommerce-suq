import "./App.scss";
import "./styles/presets.scss";
import "./styles/variables.scss";
import { Header } from "./components/Header/Header.component";
import { Footer } from "./components/Footer/Footer.component";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
