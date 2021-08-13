import React, { useState } from "react";
import "./styles.css";
import Foto1 from "../../images/1.jpg";
import Foto2 from "../../images/2.jpg";
import Foto3 from "../../images/3.jpg";
import Foto4 from "../../images/4.jpg";
import Foto5 from "../../images/5.jpg";
import Foto6 from "../../images/6.jpg";

export default function Collection() {
  const [position, setPosition] = useState(0);
  function nextProduct() {
    if (position == -500) {
      return;
    }
    setPosition(position - 100);
  }

  function previousProduct() {
    if (position == 0) {
      return;
    }
    setPosition(position + 100);
  }

  return (
    <div className="collections">
      <h1>Collection</h1>
      <div className="products-card">
        <div className="products-wrapper">
          <div
            style={{ marginLeft: `${position}%` }}
            className="collections-card"
          >
            <img alt="asd" src={Foto1} />
            <div className="colors">
              <div className="black color" />
              <div className="brown color" />
              <div className="darkbrown color" />
            </div>
            <span className="product-name">Sapato Feminino</span>
            <span className="product-price">R$ 299</span>
          </div>
          <div className="collections-card">
            <img alt="asd" src={Foto2} />
            <div className="colors">
              <div className="black color" />
              <div className="brown color" />
              <div className="darkbrown color" />
            </div>
            <span className="product-name">Carteira</span>
            <span className="product-price">R$ 125</span>
          </div>
          <div className="collections-card">
            <img alt="asd" src={Foto3} />
            <div className="colors">
              <div className="black color" />
              <div className="brown color" />
              <div className="darkbrown color" />
            </div>
            <span className="product-name">Sapato Feminino</span>
            <span className="product-price">R$ 180</span>
          </div>
          <div className="collections-card">
            <img alt="asd" src={Foto4} />
            <div className="colors">
              <div className="black color" />
              <div className="brown color" />
              <div className="darkbrown color" />
            </div>
            <span className="product-name">Sapato Masculino</span>
            <span className="product-price">R$ 199</span>
          </div>
          <div className="collections-card">
            <img alt="asd" src={Foto5} />
            <div className="colors">
              <div className="black color" />
              <div className="brown color" />
              <div className="darkbrown color" />
            </div>
            <span className="product-name">Cinto</span>
            <span className="product-price">R$ 89</span>
          </div>
          <div className="collections-card">
            <img alt="asd" src={Foto6} />
            <div className="colors">
              <div className="black color" />
              <div className="brown color" />
              <div className="darkbrown color" />
            </div>
            <span className="product-name">Carteira</span>
            <span className="product-price">R$ 110</span>
          </div>
        </div>
      </div>
      <div className="controll-page">
        <i class="fas fa-chevron-left next-page"></i>
        <span className="page-number">01 </span>
        <span className="page-number">02 </span>
        <span className="page-number">03 </span>
        <i class="fas fa-chevron-right back-page"></i>
      </div>
      <button
        className={`${
          position !== 0 && "enable-button"
        } controll-button previous`}
        onClick={() => previousProduct()}
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button
        className={`
        ${position !== -500 && "enable-button"} controll-button next`}
        onClick={() => nextProduct()}
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
