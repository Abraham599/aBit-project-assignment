const Dashboard = () => {
    return (
      <div className="flex items-center justify-evenly">
        <div className="pt-4 w-[1240px] h-[75px] flex flex-row justify-between items-center">
          <div className="mr-4 pr-8">
            <p className="w-[110px] h-[34px] font-normal text-[28px] leading-[33.5px] font-reckless-neue">Releases</p>
            <p className="font-normal w-[461px] h-[22px] text-[16px] leading[22.48px] text-[#696969]">
              Videos that you upload in collaboration with aBit appear here.
            </p>
          </div>
          <div className="w-full flex flex-row justify-around divide-x-[0.5px] divide-[#7A7A7A] font-inter">
            <div className="border-l-[0.5px] border-[#7A7A7A] pl-4">
              <p className="w-[8px] h-[26px] font-bold text-[16px] leading-[25.6px] text-[#696969]">1</p>
              <p className="w-[51px] h-[44px] font-normal text-[14px] leading-[22.4px] text-[#696969]">
                Shared Videos
              </p>
            </div>
            <div className="pl-4">
              <p className="w-[8px] h-[26px] font-bold text-[16px] leading-[25.6px] text-[#696969]">$9510</p>
              <p className="w-[51px] h-[44px] font-normal text-[14px] leading-[22.4px] text-[#696969]">
                Funds Raised
              </p>
            </div>
            <div className="pl-4">
              <p className="w-[8px] h-[26px] font-bold text-[16px] leading-[25.6px] text-[#696969]">317</p>
              <p className="w-[77px] h-[44px] font-normal text-[14px] leading-[22.4px] text-[#696969]">
                Co-owner community
              </p>
            </div>
            <div className="pl-4">
              <p className="w-[8px] h-[26px] font-bold text-[16px] leading-[25.6px] text-[#696969]">$3804</p>
              <p className="w-[77px] h-[44px] font-normal text-[14px] leading-[22.4px] text-[#696969]">
                Co-owner Earnings
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  