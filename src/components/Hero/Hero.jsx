// import {RiQuillPenFill} from 'react-icons';
import SideBar from '../SideBar/SideBar';

import {GiBatMask} from 'react-icons/gi'

const Hero = () => {
    return (
        <div >
            <div className=' static  justify-center pt-36 lg:pt-72 overscroll-hidden  '>
           
                <div className=' font font-bold md:ml-32  sm:ml-8 mx-auto '>
                    <span className='text-transparent   bg-gradient-to-b transition-all duration-300 ease-linear hover:text-orange-400 bg-clip-text md:text-7xl text-4xl from-classicIceBlue2 to-classicIceBlue'>Neerudi  Sai  Vikas. 
                    </span>
                    
                <div className='md:p-2 p-0 '>

                </div>
                <div className='ml-30 mt-2 opacity-75'>
                <span className='text-transparent  md:text-7xl text-4xl transition-all duration-300 ease-linear hover:text-orange-400   bg-gradient-to-b bg-clip-text from-classicIceBlue2 to-classicIceBlue'>Aspiring Machine Learning Engineer.
                </span>
                </div>
                <div className='md:p-2 sm:p-0'>

                </div>
                {/* <div className='md:ml-30  ' >
                <span className='text-transparent bg-gradient-to-b hover:text-orange-400 md:text-7xl text-4xl  bg-clip-text from-classicIceBlue2 to-classicIceBlue2'> Researcher,

                </span>
                </div> */}
                
                 
                 </div>
                 

                <div className=' space-x-0 relative  py-6 max-w-xl md:text-2xl text-sm  opacity-75 md:mt-4 mt-0 text-transparent md:ml-32 sm:ml-8 bg-gradient-to-b bg-clip-text from-classicIceBlue2 to-classicIceBlue2 '>
            
                <p >
                    <span className='font-mono '>
                        I am an aspiring Machine Learning Engineer who is interested in building Machine Language Models, especially Language Models and Full Stack Machine Learning. 
                    </span>
                </p>
                </div>
                <a target="_blank" href="https://www.linkedin.com/in/neerudi-sai-vikas-721349226/">
                <button className='lg:ml-32 ml-28 text-black text-bold text-2xl lg:min-h-4xl lg:min-w-4xl min-w-xl min-h-xl px-2 py-2 rounded-xl bg-gradient-to-r from-blue-100 to-classicIceBlue '>Hire Me</button>
                </a>
            </div>

        </div>
    )
}



export default Hero;