import { useEffect, useState } from "react";

const Footer = ()=>{
    const [clickedHome, setClickedHome] = useState(false);
  const [clickedCreator,setClickedCreator] = useState(false);
  const [clickedSupport, setClickedSupport] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setClickedHome(false);
      setClickedCreator(false);
      setClickedSupport(false);
      
    },300)
    return ()=>clearTimeout(setTimeout,300);

  },[clickedHome, clickedCreator,clickedSupport]);
return(
    <div className="pt-[100px] w-screen h-full flex items-center justify-center border-t-[1px] border-[#9F9D9D] my-[100px]">
    <div className="w-[1169px] h-[121px] flex flex-row justify-center space-x-[500px] ">
        <div className="mb-8 ">
        <p className="w-[77px] h-[48px] font-bold text-[40px] leading-[48.14px] text-[#262626] text-center top-0 left-0 font-inter">aBit</p>
        <p className="w-[313px] h-[48px] font-normal text-[20px] leading-[23.99px] font-reckless-neue">Changing the way in which creators and fans interact</p>
        </div>
        <div className="flex flex-col justify-around font-bold text-[14px] leading-[16.94px] border-l-[1px] border-[#9F9D9D] pl-[35px] font-inter">
            <p onClick={()=>setClickedHome(true)} className={`cursor-pointer ${clickedHome ? 'animate-dissolve' : ''}`}>Home</p>
            <p onClick={()=>setClickedCreator(true)} className={` cursor-pointer ${clickedCreator ? 'animate-dissolve' : ''}`}>Are you a Creator ?</p>
            <p onClick={()=>setClickedSupport(true)} className={` cursor-pointer ${clickedSupport ? 'animate-dissolve' : ''}`}>Support</p>
        </div>
    </div>
    </div>
)
}

export default Footer;