import React, { useState } from "react";
import "./styles.scss";
import Foto1 from "../../images/1.jpg";
import Foto2 from "../../images/2.jpg";
import Foto3 from "../../images/3.jpg";
import Foto4 from "../../images/4.jpg";
import Foto5 from "../../images/5.jpg";
import Foto6 from "../../images/6.jpg";

export default function Collection() {
  const [position, setPosition] = useState(0);

  const products = [
    {
      foto: Foto2,
      name: "Carteira",
      price: "R$ 125",
    },
    {
      foto: Foto3,
      name: "Sapato Feminino",
      price: "R$ 180",
    },
    {
      foto: Foto4,
      name: "Sapato Masculino",
      price: "R$ 199",
    },
    {
      foto: Foto5,
      name: "Cinto",
      price: "R$ 89",
    },
    {
      foto: Foto6,
      name: "Carteira",
      price: "R$ 110",
    },
  ];

  window.addEventListener("resize", () => {
    if (window.innerWidth > 931) {
      setPosition(0);
    }
  });
  function nextProduct() {
    if (position === -500) {
      return;
    }
    setPosition(position - 100);
  }

  function previousProduct() {
    if (position === 0) {
      return;
    }
    setPosition(position + 100);
  }

  products.map((product, index) => {
    const a = { marginLeft: index == 0 && `${position}%` };
    console.log(a);
  });
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
            <div className="circles">
              <div className="black color" />
              <div className="brown color" />
              <div className="darkbrown color" />
            </div>
            <span className="product-name">Sapato Feminino</span>
            <span className="product-price">R$ 299</span>
          </div>
          {products.map((product, index) => (
            <div key={index} className="collections-card">
              <img alt="asd" src={product.foto} />
              <div className="circles">
                <div className="black color" />
                <div className="brown color" />
                <div className="darkbrown color" />
              </div>
              <span className="product-name">{product.name}</span>
              <span className="product-price">{product.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="controll-page">
        <i class="fas fa-chevron-left next-page"></i>
        <span className="page-number">01 </span>
        <span className="page-number">02 </span>
        <span className="page-number">03 </span>
        <i class="fas fa-chevron-right back-page"></i>
      </div>
      <div className="controll-item">
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
    </div>
  );
}
