import { Link } from "react-router-dom";

export const Cart = () => {
  const products = [
    {
      id: 1,
      name: "Scented Candle",
      flavor: "Cherry and Cake",
      price: 59.99,
      quantity: 2,
      image: "Candle.png",
      checked: true,
    },
    {
      id: 2,
      name: "Diffuser",
      flavor: "Mint flavour",
      price: 39.99,
      quantity: 1,
      image: "diffuser.png",
    },
    {
      id: 3,
      name: "Scented Candle",
      flavor: "Cherry and Cake",
      price: 59.99,
      quantity: 3,
      image: "Candle2.png",
    },
  ];
  return (
    <>
      <div className="main p-5">
        <img src="ShoppingCart.png" alt="" className="w-56 p-2" />
        <div className="cart-container flex gap-10 flex-wrap">
          <div className="child product-list rounded-lg">
            {" "}
            {products.map((product) => (
              <div
                className="product-item flex justify-between p-3 flex-wrap "
                key={product.id}
              >
                <div className="box1 flex items-center p-1">
                  {/* <div className="box1-child"></div> */}
                  <div className="product-checkbox pr-4">
                    <input type="checkbox" checked={product.checked} />
                    <span></span>
                  </div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image w-28"
                  />
                  <div className="product-info p-2">
                    <h3 className="font-medium">{product.name}</h3>
                    {/* <span className="font-medium">
                    ${product.price.toFixed(2)}
                  </span> */}
                    <p className="text-sm text-neutral-600">{product.flavor}</p>
                    <div className="quantity-control pt-2">
                      <button>-</button>
                      <span style={{ fontSize: "0.8em", padding: "0px 5px" }}>
                        {product.quantity}
                      </span>
                      <button>+</button>
                    </div>
                  </div>
                </div>

                <div className="product-price font-medium flex p-2">
                  <div className="">
                    <span>${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sumarry-con child product-list p-4 w-64 h-64 rounded-md leading-8">
            <div
              style={{
                borderBottom: "solid 1px #D9D9D9",
              }}
              className="pl-5"
            >
              <img src="Summary.png" alt="" className="w-28 pb-2" />
            </div>
            <div className="flex justify-around pt-4">
              <div className="label text-neutral-600">
                <p>Items(8)</p>
                <p>Discount</p>
                <p>Delivery Fee</p>
                <b className="text-black">Total</b>
              </div>
              <div className="labelVal text-neutral-600">
                <p>$219.96</p>
                <p>$0</p>
                <p>$30</p>
                <b style={{ color: "#DC82B5" }}>$249.96</b>
              </div>
            </div>

            {/* <div className="summary-item">
            <span>Items (8)</span>
            <span>$219.96</span>
          </div>
          <div className="summary-item">
            <span>Discount</span>
            <span>$0</span>
          </div>
          <div className="summary-item">
            <span>Delivery fee</span>
            <span>$30</span>
          </div>
          <div className="summary-item total">
            <span>Total</span>
            <span style={{ color: "#DC82B5" }}>$249.96</span>
          </div> */}
            <div className="flex justify-around">
              <div>
                <Link
                  to="/checkout"
                  className="checkout-button py-1 px-5 rounded-md text-gray-100 mt-3 alig bg-pink-400"
                >
                  checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
