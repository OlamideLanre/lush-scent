export const ProductDisplay = () => {
  const products = [
    {
      id: 1,
      name: "Scented Candle",
      flavor: "Cherry and Cake",
      price: 59.99,
      image: "Candle.png",
    },
    {
      id: 2,
      name: "Diffuser",
      flavor: "Mint flavour",
      price: 39.99,
      image: "diffuser.png",
    },
    {
      id: 3,
      name: "Scented Candle",
      flavor: "Cherry and Cake",
      price: 59.99,
      image: "Candle2.png",
    },
    {
      id: 4,
      name: "Diffuser",
      flavor: "Cherry flavour",
      price: 59.99,
      image: "Diffuser2.png",
    },
    {
      id: 5,
      name: "Fragrance oil",
      flavor: "Cherry flavour",
      price: 59.99,
      image: "FragranceOil.png",
    },
    {
      id: 6,
      name: "Scented candle",
      flavor: "Apple and Cake",
      price: 59.99,
      image: "Candle3.png",
    },
    {
      id: 7,
      name: "Air Freshner",
      flavor: "Car Air Freshner",
      price: 59.99,
      image: "AirFreshner.png",
    },
    {
      id: 8,
      name: "Fragrance oil",
      flavor: "Chery flavour",
      price: 59.99,
      image: "FragranceOil2.png",
    },
    {
      id: 9,
      name: "Air Freshner",
      flavor: "Car Air Freshner",
      price: 59.99,
      image: "AirFreshner2.png",
    },
    {
      id: 10,
      name: "Fragrance oil",
      flavor: "Chery flavour",
      price: 59.99,
      image: "FragranceOil3.png",
    },
    {
      id: 11,
      name: "Diffuser",
      flavor: "Cherry flavour",
      price: 59.99,
      image: "Diffuser2.png",
    },
    {
      id: 12,
      name: "Scented Candle",
      flavor: "Cherry and Cake",
      price: 59.99,
      image: "Candle4.png",
    },
  ];
  return (
    <>
      <div className="MainContainer">
        <div className="Container">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="imgContainer">
                <img src={product.image} alt={product.name} width={"100%"} />
              </div>
              <div className="texts flex items-start flex-col px-5 py-1">
                <p className="productType text-neutral-600">{product.name}</p>
                <p className="productName font-semibold">{product.flavor}</p>
                <div>
                  <span className="productPrice font-semibold">
                    ${product.price.toFixed(2)}/
                  </span>
                  <span className="productWeight text-neutral-600">200ml</span>
                </div>
              </div>
              <div className="btnsContainer flex gap-2 px-5 pb-4">
                <button
                  className="buyBtn text-white bg-black rounded-md px-4 py-1 cursor-pointer "
                  onClick={() => onProductSelect(product)}
                >
                  Buy Now
                </button>
                <div className="iconDiv bg-pink-200 px-3 py-1 rounded-md cursor-pointer">
                  <button
                    className="iconBtn"
                    onClick={() => onProductSelect(product)}
                  >
                    <img src="Cart.png" alt="Cart" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pageNums">
        <button>&lt;</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <span>-</span>
        <button>7</button>
        <button>&gt;</button>
      </div>
    </>
  );
};
