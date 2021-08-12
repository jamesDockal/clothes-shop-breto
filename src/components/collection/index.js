import React from "react";
import "./styles.css";
import Foto1 from "../../images/1.jpg";
import Foto2 from "../../images/2.jpg";
import Foto3 from "../../images/3.jpg";
import Foto4 from "../../images/4.jpg";
import Foto5 from "../../images/5.jpg";
import Foto6 from "../../images/6.jpg";

export default function Collection() {
  return (
    <div className="collections">
      <h1>Collection</h1>
      <div className="products-card">
        <div className="collections-card">
          <img src={Foto1} />
          <div className="colors">
            <div className="black color" />
            <div className="brown color" />
            <div className="darkbrown color" />
          </div>
          <span className="product-name">Sapato Feminino</span>
          <span className="product-price">R$ 299</span>
        </div>
        <div className="collections-card">
          <img src={Foto2} />
          <div className="colors">
            <div className="black color" />
            <div className="brown color" />
            <div className="darkbrown color" />
          </div>
          <span className="product-name">Carteira</span>
          <span className="product-price">R$ 125</span>
        </div>
        <div className="collections-card">
          <img src={Foto3} />
          <div className="colors">
            <div className="black color" />
            <div className="brown color" />
            <div className="darkbrown color" />
          </div>
          <span className="product-name">Sapato Feminino</span>
          <span className="product-price">R$ 180</span>
        </div>
        <div className="collections-card">
          <img src={Foto4} />
          <div className="colors">
            <div className="black color" />
            <div className="brown color" />
            <div className="darkbrown color" />
          </div>
          <span className="product-name">Sapato Masculino</span>
          <span className="product-price">R$ 199</span>
        </div>
        <div className="collections-card">
          <img src={Foto5} />
          <div className="colors">
            <div className="black color" />
            <div className="brown color" />
            <div className="darkbrown color" />
          </div>
          <span className="product-name">Cinto</span>
          <span className="product-price">R$ 89</span>
        </div>
        <div className="collections-card">
          <img src={Foto6} />
          <div className="colors">
            <div className="black color" />
            <div className="brown color" />
            <div className="darkbrown color" />
          </div>
          <span className="product-name">Carteira</span>
          <span className="product-price">R$ 110</span>
        </div>
      </div>
      <div className="controll-page">
        <span className="back-page">&lt; </span>
        <span className="page-number">01 </span>
        <span className="page-number">02 </span>
        <span className="page-number">03 </span>
        <span className="next-page">&gt; </span>
      </div>
    </div>
  );
}
