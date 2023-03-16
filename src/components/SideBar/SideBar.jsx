 import {RiSlackLine,RiMoonFoggyFill,
    RiMoonFill,RiSunFill,RiSunFoggyFill,RiMediumLine,RiSliceFill,RiGithubLine,RiLinkedinBoxLine, RiMoonFoggyLine} from 'react-icons/ri'
import {FiYoutube} from 'react-icons/fi'
import { GiBatMask,GiSecretBook,GiBookmark,GiBookStorm,GiBookmarklet,GiBoomerangCross} from 'react-icons/gi';

const SideBar=() =>(
    // <div className="sidebar-icon">
    
    <div >
    {/* <SideBarIcon icon={<FaFire size="16>"/>}/> */}
    <div className="fixed top-0 left-0 justify-end h-100 w-screen m-0   shadow-lg flex flex-row bg-classicBlue2 ">
    <a target = "_black" href="https://github.com/kee1bo">
    
    <SideBarIcon icon={<RiGithubLine size="20>"/>}/>
    
    </a>
    {/* <SideBarIcon icon={<RiSlackLine size="20>"/>}/> */}

    <a target="_blank" href="https://medium.com/@neerudisaivikas">

    <SideBarIcon icon={<RiMediumLine size="20>"/>}/>
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/neerudi-sai-vikas-721349226/">
    <SideBarIcon icon={<RiLinkedinBoxLine size="20>"/>}/>
    </a>
    {/* <SideBarIcon icon={<RiMoonFill size="16>"/>}/> */}
    {/* <SideBarIcon icon={<FiYoutube size="20>"/>}/> */}
    <a target="_blank" href="src/assests/techResumeNSV.pdf" >
        {/* <SideBarIcon icon={<GiBookmarklet size="20>"/>}/> */}
        <button className=' rounded-xl text-black py-4 px-4 max-w-sm h-auto w-auto  bg-classicIceBlue '> Resume</button>
    </a>
    
    </div>

    <div className="fixed top-0  left-0 justify-start shadow-lg">
        <a href="">
        <div>
            <SideBarIcon icon={<GiBatMask size="20>"/>}/>
            <h1 className='fixed top-4 text-bold left-20 text-slate-600 text-4xl font-mono'></h1>

        </div>
        </a>
    </div>
    
    </div>
  );

const SideBarIcon=({icon}) => (
    <div className="sidebar-icon">
        {icon}
        {/* <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span> */}
    </div>
);

export default SideBar;
