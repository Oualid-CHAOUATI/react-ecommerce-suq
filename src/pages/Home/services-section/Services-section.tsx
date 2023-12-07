import { SectionTitle } from "../../../components/section-title/SectionTitlte";
import { ServiceCard, TServiceCardsProps } from "./Service-card/Service-card";
import "./Services-section.styles.scss";
export const ServicesSection = () => {
  const card1: TServiceCardsProps = {
    description: ` Afin de completer un achat vous dever crier avant tout un compte. Mais
          vous pouvez tout de meme voir nos produits et les ajoter à votre liste
          préféré afin de les consulter ultérieurement`,
    title: "produits neufs",
    imgUrl:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1600",
    accentColor: "green",
  };

  const card2: TServiceCardsProps = {
    imgUrl:
      "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    title: "produits d'occasion",
    description: `Ici vous découvrer les produits mis en vente par d'autres
    personnes. Meme vous , vous avez la capacité de poster une
    publication et chercher un vendeur pour un de vos biens`,
    accentColor: "blue",
  };
  return (
    <>
      <section className="services-section container">
        <SectionTitle>nos services</SectionTitle>

        <div className="service-cards ">
          <ServiceCard {...card1} />
          <ServiceCard {...card2} />
        </div>
      </section>
    </>
  );
};
