import React from "react";


const Footer = () => {
    return (
       
        <div class="bg-gray-900 font-sans">
        <div class="flex md:justify-center justify-between items-center flex-col p-4 bg-gray-900">
          <div class="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
            <p class="text-white text-base text-center mx-2 cursor-pointer">Market</p>
            <p class="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
            <p class="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
            <p class="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
          </div>
        </div>
        <div class="flex justify-center items-center flex-col mt-5">
          <p class="text-white text-sm text-center">Come join us </p>
          <p class="text-white text-sm text-center font-medium mt-2">www.Sector72.crypto</p>
        </div>
        <div class="sm:w-full w-full h-0.5 bg-gray-400 mt-5"></div>
        <div class="sm:w-full w-full flex justify-between items-center mt-3">
          <p class="text-white text-xs">Sector72.crypto</p>
          <p class="text-white text-xs">All rights reserved</p>
        </div>
      </div>
      
  
    );
}

export default Footer;