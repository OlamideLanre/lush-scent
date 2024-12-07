import { ProductDisplay } from "./ProductDisplay";

export const Home = () => {
  return (
    <>
      <div>
        {/* <div> */}
        <img
          src="headerimage.jpg"
          alt="image"
          width={"100%"}
          style={{
            height: "400px",
            objectFit: "cover",
            filter: "brightness(35%)",
          }}
        />
        {/* </div> */}
        <div className="headerImageTexts flex flex-col items-center absolute top-56 text-white left-0 right-0">
          <img
            src="Our Products.png"
            alt=""
            className="mx-0 my-auto"
            width={"25%"}
          />
          <p>all our products are handmade with love and tenderness</p>
        </div>

        <div className="navTwo flex flex-col items-center ">
          {/* mx-auto my-0 w-56 pt-8 */}
          <div className="headerImage2 pt-8 ">
            <img src="ourProduct.png" alt="image" />
          </div>
          <div className="links flex gap-5 pt-4">
            <b>Categories: </b>
            <b className="px-3 bg-gray-100 rounded-md">All</b>
            <a href="">Scented Candle</a>
            <a href="">Diffuser</a>
            <a href="">Fragrance Oil</a>
            <a href="">Air Freshner</a>
          </div>
        </div>
      </div>
      <ProductDisplay />
    </>
  );
};
