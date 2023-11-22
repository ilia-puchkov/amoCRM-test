import React from 'react'
import headerLogo from '../../images/logo_welbex.png'

function Header() {
  return (
    <section className="header">
      <div className="header__logo-block">
        <img className="header__logo" src={headerLogo} alt="logo" />
        <p className="header__logo-text">
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
      </div>
      <div className="header__navigation">
        <button className="header__navigation-button">Услуги</button>
        <button className="header__navigation-button">Виджеты</button>
        <button className="header__navigation-button">Интеграции</button>
        <button className="header__navigation-button">Кейсы</button>
        <button className="header__navigation-button header__navigation-mobile">
          Сертификаты
        </button>
      </div>
      <div className="contacts">
        <button className="contacts__button-phone">+7 555 555-55-55</button>
        <button className="contacts__button-logo contacts__button-logo-telegram"></button>
        <button className="contacts__button-logo contacts__button-logo-phone"></button>
        <button className="contacts__button-logo contacts__button-logo-whatsApp"></button>
      </div>
    </section>
  )
}

export default Header
