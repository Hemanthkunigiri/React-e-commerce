import React from "react";
import { speakerData } from "../data/speaker";
import { useParams,Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const SpeakerSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = speakerData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt="none" />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <div className="button">
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
            <Link to='/buy'><button>Buy</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakerSingle;
