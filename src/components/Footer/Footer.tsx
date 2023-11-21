import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__block">
        <h2 className="footer__subtitle">О КОМПАНИИ</h2>
        <ul className="footer__list">
          <li className="footer__list-element">
            <a href="#" className="footer__list-element-link">
              Партнёрская программа
            </a>
          </li>
          <li className="footer__list-element">
            <a href="#" className="footer__list-element-link">
              Вакансии
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__block">
        <h2 className="footer__subtitle">МЕНЮ</h2>
        <div className="footer__menu">
          <ul className="footer__list">
            <li className="footer__list-element">
              <a href="#" className="footer__list-element-link">
                Расчёт стоимости
              </a>
            </li>
            <li className="footer__list-element">
              <a href="#" className="footer__list-element-link">
                Услуги
              </a>
            </li>
            <li className="footer__list-element">
              <a href="#" className="footer__list-element-link">
                Виджеты
              </a>
            </li>
            <li className="footer__list-element">
              <a href="#" className="footer__list-element-link">
                Интеграция
              </a>
            </li>
            <li className="footer__list-element">
              <a href="#" className="footer__list-element-link">
                Наши клиенты
              </a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__list-element">
              <a href="#" className="footer__list-element-link">
                Кейсы
              </a>
            </li>
            <li className="footer__list-element">
              <a href="#" className="footer__list-element-link">
                Благодарственные письма
              </a>
            </li>
            <li className="footer__list-element">
              <a href="#" className="footer__list-element-link">
                Сертификаты
              </a>
            </li>
            <li className="footer__list-element">
              <a href="#" className="footer__list-element-link">
                Блог на Youtube
              </a>
            </li>
            <li className="footer__list-element">
              <a href="#" className="footer__list-element-link">
                Вопрос / Ответ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contacts footer__contacts">
        <h2 className="footer__subtitle">КОНТАКТЫ</h2>
        <button className="contacts__button-phone contacts__button-phone-footer">+7 555 555-55-55</button>
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
          <a href="#" className="footer__signature-link">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
