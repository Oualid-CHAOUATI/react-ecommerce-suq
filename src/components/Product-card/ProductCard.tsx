import "./ProductCard.styles.scss";

type TProductCartProps = {
  imgUrl: string;
  name: string;
  description: string;
  price: number;
  isNew?: boolean;
};
export const ProductCard = ({
  name,
  imgUrl,
  description,
  price,
  isNew = false,
}: TProductCartProps) => {
  console.log(description);

  return (
    <div className="product-card-wrapper ">
      <div className={`product-card ${isNew && "new"}`}>
        <div className="top flex">
          <img src={imgUrl} alt="" />
          <button className="btn read-more ">découvrir</button>
        </div>
        <div className="bottom r3 ">
          <p className="product-name main-txt">{name}</p>
          <p className="product-price ib">{price}</p>

          <button className="add-to-cart-btn">Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
};

export const ProductCardTry = () => {
  return (
    <div>
      <ProductCard />
    </div>
  );
};
