import "./CategoryCard.styles.scss";
type TCategoryCardProps = {
  title: string;
  imgUrl: string;
  bgUrl: string;
};
// export const CategoryCard = ({ title, imgurl }: TCategoryCardProps) => {
export const CategoryCard = ({ title, imgUrl, bgUrl }: TCategoryCardProps) => {
  return (
    <a
      href=""
      className="category-card flex-center r2"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <h3 className="title">{title}</h3>
      <div className="bg-overlay-wrapper">
        <img src={bgUrl} alt="" className="overlay-img" />
      </div>
    </a>
  );
};

export const CategoryCardTest = () => (
  <CategoryCard
    title="montre"
    imgUrl="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80"
    bgUrl="https://images.unsplash.com/photo-1588167727042-a313d3e85a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=2560"
  />
);
