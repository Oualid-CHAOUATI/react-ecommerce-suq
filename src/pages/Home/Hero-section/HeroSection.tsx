import "./HeroSection.styles.scss";
import { LeftSide } from "./Left-side/LeftSide";
import { RightSideGallery } from "./right-side-gallery/RightSideGallery";
export const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="container flex">
        <LeftSide />
        <RightSideGallery />
      </div>
    </section>
  );
};
