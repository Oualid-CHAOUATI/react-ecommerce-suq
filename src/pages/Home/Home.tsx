import { HeroSection } from "./Hero-section/HeroSection";
import "./Home.styles.scss";
import { ServicesSection } from "./services-section/Services-section";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
    </>
  );
};
