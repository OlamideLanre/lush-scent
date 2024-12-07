import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";
export const Footer = () => {
  return (
    <>
      <div className="benefits flex bg-gray-100 justify-around flex-wrap">
        <div className="freeReturn benefit-item">
          <img
            src="f7_shippingbox.png"
            alt=""
            style={{ marginRight: "20px" }}
          />
          <div className="benefit-text ">
            <h3>Free Return</h3>
            <p>
              Enjoy peace of mind with free <br /> returns on all purchases.
            </p>
          </div>
        </div>
        <div className="freeShipping benefit-item">
          <img
            src="hugeicons_shipping-truck-02.png"
            alt=""
            style={{ marginRight: "20px" }}
          />
          <div className="benefit-text">
            <h3>Free Shipping</h3>
            <p>
              Enjoy free shipping on <br />
              order more than $4000.
            </p>
          </div>
        </div>
        <div className="online benefit-item">
          <img
            src="fluent_person-support-24-regular.png"
            alt=""
            style={{ marginRight: "20px" }}
          />
          <div className="benefit-text  ">
            <h3>Online</h3>
            <p>
              8am-6pm online support,
              <br /> 7 days a week.
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-neutral-900 text-white p-10">
        <div className="footerDiv flex justify-around flex-wrap">
          <div>
            <img src="Logo.png" alt="LushScent logo" />
          </div>
          <div>
            <h4>Products</h4>
            <ul className="text-neutral-300">
              <li className="gap">Scented Candles</li>
              <li className="gap">Diffussers</li>
              <li className="gap">Fragrance Oil</li>
              <li className="gap">Air-Freshners</li>
            </ul>
          </div>
          <div>
            <h4>Links</h4>
            <div className="text-neutral-300 flex flex-col gap-3">
              <a href="">Home</a>
              <a href="">Products</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">FAQs</a>
            </div>
          </div>
          <div>
            <h4>Get in touch</h4>
            <p className="text-neutral-300 mb-3">
              Got a question or needs an assistance? <br /> We are here to help.
              Our dedicated <br /> support team is ready to assist you and{" "}
              <br />
              answer any of your questions.
            </p>
            <div
              className="iconsMainDiv"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "230px",
              }}
            >
              <button>
                <IconContext.Provider
                  value={{ style: { verticalAlign: "middle" } }}
                >
                  <FaInstagram />
                </IconContext.Provider>
              </button>
              <button>
                <IconContext.Provider
                  value={{ style: { verticalAlign: "middle" } }}
                >
                  <FaWhatsapp />
                </IconContext.Provider>
              </button>
              <button>
                <IconContext.Provider
                  value={{ style: { verticalAlign: "middle" } }}
                >
                  <FaFacebook />
                </IconContext.Provider>
              </button>
              <button>
                <IconContext.Provider
                  value={{ style: { verticalAlign: "middle" } }}
                >
                  <FaPhone />
                </IconContext.Provider>
              </button>
            </div>
          </div>
        </div>
        <hr
          style={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "15px",
          }}
        />
        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          Copyright 2024. All right reserved.
        </p>
      </footer>
    </>
  );
};
