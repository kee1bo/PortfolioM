import React from 'react'
import SideBar from './components/SideBar/SideBar';
import Hero from './components/Hero/Hero';
import Medium from './components/Medium/Medium';
import Github from './components/Github/Github';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

const App = ()=>{
  return (
    <div className=' bg-gradient-to-r relative  from-classicBlue2 to-classicBlue2  overflow-auto'>
      <div className=' flex flex-row '>
        <div>
          <SideBar/>
        </div>
        
      </div>

      <div>
        <div className='mt-16 min-h-screen ml-2 mx-auto rounded bg-gradient-to-r from-classicBlue2 to-classicBlue'>

          
          <Hero/>
        </div>

        <div className='flex  justify-start bg-gradient-to-r  from-classicBlue2 to-classicBlue text-xl '>
          <About/>
        </div>
       
        <div className='bg-white'>
          
          <Github/>

        </div>
      
      </div>


      <div className='relative mt-60 ' >
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App