import React from "react";
import "./styles.scss";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="about-us">
        <h1>Fale Conosco</h1>
        <div className="explain">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </div>
      <form className="contact-form">
        <div className="input-box">
          <input required name="name" className="name-input" type="text" />
          <label className="name-label">Nome</label>
        </div>

        <div className="input-box">
          <input required name="email" className="email-input" type="text" />
          <label className="email-label">E-mail</label>
        </div>
        <div className="input-box">
          <input
            required
            name="telephone"
            className="telephone-input"
            type="text"
          />
          <label className="telephone-label">Telefone</label>
        </div>

        <div className="department-box">
          <input
            value=""
            readOnly
            required
            className="department-input"
            type="text"
          />
          <label className="department-label">Departamento</label>
          <i class="fas fa-chevron-down triangulo"></i>
        </div>

        <div className="message-box">
          <textarea required className="message-input" type="text" />
          <label className="message-label">Mensagem</label>
        </div>
        <button onClick={(e) => e.preventDefault()} className="message-button">
          <i class="fas fa-chevron-right"></i>
        </button>
      </form>
    </div>
  );
}
