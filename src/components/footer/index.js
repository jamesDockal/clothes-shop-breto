import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="services">
        <ul>
          <li>Marca</li>
          <li>Acompanhe seu pedido</li>
          <li>garantia Breto</li>
          <li>Como Cuidar</li>
          <li>Política de Troca</li>
          <li>Pagamentos</li>
          <li>Privacidade</li>
        </ul>
        <span>@2021 - CNPJ:15.265.365/0001-95 - Breto Calçados - ME</span>
      </div>
      <div className="get-us">
        <form className="newsletter">
          <strong>Newsletter</strong>
          <div className="newsletter-explain">
            Receba ofertas e novidades preparadas especialmente para você.
          </div>
          <div className="add-email">
            <input required name="email" placeholder="Adicione seu email" />
            <button>OK</button>
          </div>
        </form>
        <div className="social-medias">
          <strong>Redes Sociais</strong>
          <div className="medias">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
