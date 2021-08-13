import React, { useState } from "react";
import "./styles.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <ul className="categories list">
        <li>Masculino</li>
        <li>Feminino</li>
        <li>Acessórios</li>
      </ul>
      <div className="logo" />

      <ul className={`${isOpen ? "show" : "not-showed"} user-actions list `}>
        <li>Busca</li>
        <li>Minha Conta</li>
        <li>
          Carrinho
          <span class="material-icons-outlined">shopping_bag</span>
        </li>
      </ul>
      <i
        onClick={() => setIsOpen(!isOpen)}
        class={`fas fa-bars hamburger ${isOpen && "open"}`}
      ></i>
    </div>
  );
}
