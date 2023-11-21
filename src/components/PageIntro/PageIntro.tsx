import React from 'react'
import pageOptions from './PageOptionsList'

function PageIntro() {
  return (
    <section className="pageIntro">
      <div className="pageIntro_block-title">
        <h1 className="pageIntro__title">
          Зарабатывайте больше <br />
          <span className="pageIntro__title-bright">с WELBEX</span>
        </h1>
        <p className="pageIntro__subtitle">
          Развиваем и контролируем продажи за вас
        </p>
      </div>
      <div className="pageIntro_block-options">
        <h2 className="pageIntro__options-subtitle">
          Вместе с
          <span className="pageIntro__subtitle-bright">
            &nbsp;БЕСПЛАТНОЙ &nbsp;
          </span>
          <span className="pageIntro__subtitle-bright1">
            КОНСУЛЬТАЦИЕЙ&nbsp;
          </span>
          мы дарим:
        </h2>
        <div className="pageIntro__options-list">
          {pageOptions.map((option) => (
            <div className="pageIntro__option" key={option.id}>
              <hr className="pageIntro__option-dash" />
              <h3 className="pageIntro__option-title">{option.title}</h3>
              <p className="pageIntro__option-text">{option.text}</p>
            </div>
          ))}
        </div>
        <button className="pageIntro__button">Получить консультацию</button>
      </div>
    </section>
  )
}

export default PageIntro
