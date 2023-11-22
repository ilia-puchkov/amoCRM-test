import React from 'react'
import { footerCompanyLinks, footerMenuLinks } from './FooterLinks'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__block">
        <h2 className="footer__subtitle">О КОМПАНИИ</h2>
        <ul className="footer__list">
          {footerCompanyLinks.map((link) => (
            <li className="footer__list-element" key={link.id}>
              <a href={link.link} className="footer__list-element-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__block">
        <h2 className="footer__subtitle">МЕНЮ</h2>
        <div className="footer__menu">
          <ul className="footer__list">
            {footerMenuLinks.slice(0, 5).map((link) => (
              <li className="footer__list-element" key={link.id}>
                <a href={link.link} className="footer__list-element-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="footer__list">
            {footerMenuLinks.slice(5, 11).map((link) => (
              <li className="footer__list-element" key={link.id}>
                <a href={link.link} className="footer__list-element-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="contacts footer__contacts">
        <h2 className="footer__subtitle">КОНТАКТЫ</h2>
        <button className="contacts__button-phone contacts__button-phone-footer">
          +7 555 555-55-55
        </button>
        <div className="contacts__icons">
          <button className="contacts__button-logo contacts__button-logo-telegram"></button>
          <button className="contacts__button-logo contacts__button-logo-phone"></button>
          <button className="contacts__button-logo contacts__button-logo-whatsApp"></button>
        </div>
        <p className="contacts__address">Москва, Путевой проезд 3c1, к 902</p>
        <div className="footer__signature">
          <p className="footer__signature-text">
            ©WELBEX 2022. Bce права защищены.
          </p>
          <a href="#c" className="footer__signature-link">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
