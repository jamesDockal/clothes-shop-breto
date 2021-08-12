import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <div className="header">
      <ul className="categories list">
        <li>Masculino</li>
        <li>Feminino</li>
        <li>Acessórios</li>
      </ul>
      <div className="logo">
        <img src="./images/L1.png" />
      </div>
      <ul className="user-actions list">
        <li>Busca</li>
        <li>Minha Conta</li>
        <li>
          Carrinho
          <span class="material-icons-outlined">shopping_bag</span>
        </li>
      </ul>
    </div>
  );
}
