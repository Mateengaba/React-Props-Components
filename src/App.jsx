
import Footer from './components/Footer'
import Future from './components/Future'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import landingPageData from './contant/data'
// import Button from './components/Button'


function App() {

  const { header, hero, features, testimonials } = landingPageData

  return (
    <>
      <Navbar header={header} Home="Home Page" About="About Page" Product="Product Page" />
      <Hero hero={hero} />
      <Future features={features} />
      <Testimonials testimonials={testimonials} />
      <Footer header={header} />



      {/* Button components props   */}
      {/* <div className='flex justify-center text-center'>
  <Button label = "Home"/>
  <Button label = "About"/>
  <Button label = "Contact"/>
  <Button label = "Product"/>
  <Button label = "Chat me"/>

  </div> */}
    </>
  )
}

export default App
