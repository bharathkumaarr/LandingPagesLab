import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  


  return (
   <div className='layout inter'>
    <div className='container'>
      <div className='left-line' />
      <div className='right-line' />
      <Navbar />
      <Hero />
      <div className='hero-img-container'>
        <div className='mid-line' />
        <img src='/hero-ui-v5.webp' className='hero-image'/> 
      </div>
      
      
    </div>
   </div>
  )
}

export default App
