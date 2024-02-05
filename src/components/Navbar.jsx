import wallet from "../assets/icons8-wallet-50 1.png";
import notification from "../assets/icons8-notification-96 1.png";
import profile from "../assets/Profile pic.png";
import arrow from "../assets/icons8-expand-arrow-24 1.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [clickedButton, setClickedButton] = useState(false);
  const [clickedWallet,setClickedWallet] = useState(false);
  const [clickedNoti, setClickedNoti] = useState(false);
  const [clickedProfile, setClickedProfile] = useState(false);
  const [clickedArrow, setClickedArrow] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setClickedButton(false);
      setClickedWallet(false);
      setClickedNoti(false);
      setClickedProfile(false);
      setClickedArrow(false);
    },300)
    return ()=>clearTimeout(setTimeout,300);

  },[clickedButton, clickedProfile,clickedArrow, clickedNoti, clickedWallet]);

  return (
    <div className="w-full h-28 flex items-center justify-between px-7">
      <div className="text-base font-bold font-inter">aBit</div>
      <div className="flex items-center space-x-4">
        <button onClick={()=>setClickedButton(true)} className={`py-4 px-4 w-32 h-10 border border-indigo-600 font-raleway rounded-full text-xs font-bold text-indigo-600 flex items-center ${clickedButton ? 'animate-dissolve':''}`} >
          Share new video
        </button>
        <img src={wallet} alt="" className={`w-7 h-7 cursor-pointer ${clickedWallet ? 'animate-dissolve':''}`} onClick={()=>setClickedWallet(true)} />
        <img src={notification} alt="" className={`w-9 h-9 cursor-pointer ${clickedNoti ? 'animate-dissolve':''} `} onClick={()=>setClickedNoti(true)}/>
        <img src={profile} alt="" className={`w-8 h-8 border rounded-3xl cursor-pointer ${clickedProfile ? 'animate-dissolve':''}`} onClick={()=>setClickedProfile(true)}/>
        <img src={arrow} alt="" className={`w-6 h-6 mt-1 cursor-pointer ${clickedArrow ? 'animate-dissolve':''}`} onClick={()=>setClickedArrow(true)}/>
      </div>
    </div>
  );
};

export default Navbar;
