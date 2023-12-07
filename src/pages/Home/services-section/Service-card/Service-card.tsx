import "./Service-card.styles.scss";

export type TServiceCardsProps = {
  title: string;
  description: string;
  imgUrl: string;
  reverse?: boolean;
  accentColor: "blue" | "green";
};
export const ServiceCard = ({
  title,
  description,
  imgUrl,
  reverse = false,
  accentColor,
}: TServiceCardsProps) => {
  return (
    <div
      className={`service-card flex-center r3 ${
        reverse && "reverse"
      } accent-${accentColor}`}
    >
      <div className="service-text-side">
        <h3 className="title uppercase">{title}</h3>
        <p>{description}</p>
      </div>

      <div className="service-img-side flex-center r3">
        <img src={imgUrl} alt="" />
        <a href="produitsNeufs.html" className="btn ">
          découvrir
        </a>
      </div>
    </div>
  );
};
