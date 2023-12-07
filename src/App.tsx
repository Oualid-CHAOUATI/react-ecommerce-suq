import "./App.scss";
import "./styles/styleClasses.styles.scss";
import "./styles/presets.scss";
import "./styles/variables.scss";
import { Header } from "./components/Header/Header.component";
import { Footer } from "./components/Footer/Footer.component";
import { Home } from "./pages/Home/Home";
import { ProductCard } from "./components/Product-card/ProductCard";
import { SectionTitle } from "./components/section-title/SectionTitlte";
import { Categories } from "./pages/Categories/Categories";
import { Form__contact } from "./UI/Form/Instances/Form__contact";

function App() {
  return (
    <>
      <Form__contact />
      <Header />
      <Home />
      <div>
        <SectionTitle>Hello</SectionTitle>
        <ProductCard description="" imgUrl="" name="" price={2} isNew />
        <Categories />
      </div>
      <Footer />
    </>
  );
}

export default App;
