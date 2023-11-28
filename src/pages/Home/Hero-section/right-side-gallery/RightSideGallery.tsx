import "./RightSideGallery.styles.scss";
export const RightSideGallery = () => {
  return (
    <div className="hero-gallery-wrapper">
      <div className="hero-gallery">
        {imgs.map((imgsSet) => (
          <GalleryColumn imgs={imgsSet} />
        ))}
      </div>
    </div>
  );
};

const GalleryColumn = ({ imgs }: { imgs: string[] }) => {
  return (
    <div className="hero-gallery-col">
      <ImgsWrapperToCopy imgs={imgs} />
      <ImgsWrapperToCopy imgs={imgs} />
      <ImgsWrapperToCopy imgs={imgs} />
    </div>
  );
};

const ImgsWrapperToCopy = ({ imgs }: { imgs: string[] }) => {
  return (
    <div className="imgs-div  ">
      {imgs.map((img) => (
        <img src={img} />
      ))}
    </div>
  );
};

const imgs = [
  [
    `https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80`,
    `https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80`,
    `https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80`,
    `https://images.unsplash.com/photo-1499971856191-1a420a42b498?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=329&q=80`,
    `https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=349&q=80`,
    `https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=358&q=80`,
  ],
  [
    `https://images.unsplash.com/photo-1587305138714-9675ed5c9415?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80`,
    `https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`,
    `https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80`,
    `https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80`,
    `https://images.unsplash.com/photo-1585232350744-974fc9804d65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80`,
    `https://images.unsplash.com/photo-1610540502378-c97e1e391e48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80`,
  ],
  [
    `https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80`,
    `https://images.unsplash.com/photo-1497377825569-02ad2f9edb81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80`,
    `https://images.unsplash.com/photo-1608638562455-bc8927d3abd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80`,
    `https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=777&q=80`,
  ],
];
