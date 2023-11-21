import React from 'react'
import Header from './components/Header/Header'
import PageIntro from './components/PageIntro/PageIntro'
import Footer from './components/Footer/Footer'

export function App() {
  return (
    <div className="page">
      <Header />
      <PageIntro />
      <Footer />
    </div>
  )
}
