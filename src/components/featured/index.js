import React from "react";
import "./styles.scss";

export default function Featured() {
  return (
    <div className="banner">
      <strong className="featured-product">Sapato</strong>
      <span className="about-product">
        Sapatos masculinos para todos os estilos
      </span>
      <span className="about-product">Elegancia e conforto nos seus pés</span>
      <button className="buy-button">Comprar</button>
      <div className="three-dots">
        <div className="dot active" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </div>
  );
}
