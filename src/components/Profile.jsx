    import React from "react";
    import pic from "../assets/Rectangle 203.png";
    import ticket from "../assets/ticket.png";

    const Profile = () => {
    return (
        <div className="relative w-[36rem] h-60 rounded-3xl -translate-y-[10.5rem] translate-x-16 font-inter">
        <img src={ticket} alt="" className="object-cover rounded-3xl" />
        <img src={pic} alt="" className="absolute w-[14.6rem] h-[14.6rem] top-0 left-0 border-r-black" />
        <div className="absolute w-[8.625 rem] h-7 leading-7 font-bold top-[10px] left-[280px]">DAN MACE</div>
        <div className="absolute w-[89px] h-[22px] leading-[1.4rem] size-3.5 top-[10px] left-[400px] font-normal text-[#696969]">/Johny_Films</div>
        <div className="absolute w-[259px] h-[88px] text-sm leading-[1.4rem] top-[80px] left-[280px]">
        <p className="font-bold text-[#696969]">Bio</p>
        <p className="font-normal text-[#696969]">Simply a film fan creating original content for YouTube. Let’s Collaborate.</p>

        </div>

        <div className=" absolute w-[256px] h-[29px] border border-[#000000] rounded-[4px] top-[180px] left-[280px] flex flex-row">
            <div className="w-[129px] h-[29px] border border-[#000000] rounded-[4px] flex items-center justify-center">
                <div className="w-[53px] h-[22px] font-normal text-sm leading-[22.4px] text-[#313131] font-reckless-neue">Creator</div>
            </div>
            <div className="w-[129px] h-[29px] bg-[#535353]" />

        </div>

        </div>
    );
    };

    export default Profile;
