import React from 'react'
import Header from './components/Header/Header'
import PageIntro from './components/PageIntro/PageIntro'
import Footer from './components/Footer/Footer'
import Effects from './components/Effects/Effects'

export function App() {
  return (
    <div className="page">
      <Effects />
      <Header />
      <PageIntro />
      <Footer />
    </div>
  )
}
