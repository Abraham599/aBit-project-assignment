import { useEffect, useState } from "react";
import man from "../assets/man.png";

const Releases = () => {
    const [clickedBox1,setClickedBox1] = useState(false);
    const [clickedBox2,setClickedBox2] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setClickedBox1(false);
            setClickedBox2(false);
        },300);

        return clearTimeout(setTimeout,300);
    },[clickedBox1,clickedBox2]);

  return (
    <div className="pl-[87px] pt-[87px] w-[1460px] h-min flex flex-row space-x-9">
      <div onClick={()=>setClickedBox1(true)} className={`w-[283.64px] h-[312px] cursor-pointer rounded-[24px] bg-[#EDEDED] flex flex-col items-center justify-center shadow-md ${clickedBox1 ? 'animate-dissolve' : ''}`}>
        <div className="text-[#95959591] text-[32px]">+</div>
        <div className={`pt-2 w-[222px] h-[44px] font-normal text-[14px] text-[#A0A0A0] text-center font-inter`} >
          You haven’t uploaded any videos with aBit yet. Add now!
        </div>
      </div>
      <div onClick={()=>setClickedBox2(true)} className={`w-[283.64px] h-[312px] cursor-pointer bg-[url('src/assets/man.png')] bg-center bg-cover rounded-[24px] relative overflow-hidden ${clickedBox2 ? 'animate-dissolve' : ''}`}>
        <p className="p-4 text-nowrap w-[188px] h-[24px] font-bold text-[20px] leading-[24.2px] tracking-[-0.05em] text-[#FFFFFF] text-inter">
          The Sound of Silence
        </p>
        <div className="absolute bottom-[10px] left-[17.5px] w-[246.76px] h-[52.36px] rounded-[12px] bg-white bg-opacity-20 backdrop-blur-md text-[#FFFFFF] flex items-center justify-center">
            <div className="w-[209px] h-[36.09px] flex flex-row items-center justify-around text-center font-inter">
            <div className="">
                <p className=" text-[12px] leading-[14.52px] font-semibold">Shared</p>
                <p className=" font-bold text-[14px] leading-[16.94 px]">317</p>
            </div>
            <div>
            <p className=" text-[12px] leading-[14.52px] font-semibold">Offered</p>
            <p className=" font-bold text-[14px] leading-[16.94 px]">75%</p>
            </div>
            <div>
            <p className=" text-[12px] leading-[14.52px] font-semibold">Raised</p>
            <p className=" font-bold text-[14px] leading-[16.94 px]">$9510</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Releases;
