import './App.css'
import Header from './components/Header'
import FinanceBanner from './components/FinanceBanner'
import Services from './components/Services'
import SideAbout from './components/SideAbout'
import Connect from './components/Connect'
import BuildPlan from './components/BuildPlan'
import Footer from './components/Footer'
import SmartFinanceSection from './components/SmartFinanceSection'
import TestimonialsSection from './components/TestimonialsSection'

function App() {

  return (
    <>
      <Header/>
      <FinanceBanner/>
      <Services/>
      <SideAbout/>
      <TestimonialsSection/>
      <SmartFinanceSection/>
      <BuildPlan/>
      <Connect/>
      <Footer/>
    </>
  )
}

export default App
