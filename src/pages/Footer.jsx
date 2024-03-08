import React from "react";
import Instagram from "../images/icons/instagram.png";
import Telegram from "../images/icons/telegram.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className=" container  mx-auto  w-full p-6  pl-4 pr-4 pt-5 md:grid md:pl-16 md:pr-16 lg:pl-32 lg:pr-32">
        <div className="mt-10 grid grid-cols-2 justify-between gap-7 text-center md:flex">
          <div className="flex flex-col gap-3 ">
            <a className="text-base font-semibold leading-normal text-white">
              Home
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              Categories
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              Devices
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              Pricing
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              FAQ
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="text-base font-semibold leading-normal text-white">
              Movies
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              Gernes
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              Trending
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              New Release
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              Popular
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="text-base font-semibold leading-normal text-white">
              Shows
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              Gernes
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              Trending
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              New Release
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              Popular
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="text-base font-semibold leading-normal text-white">
              Support
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              Contact Us
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="text-base font-semibold leading-normal text-white">
              Subscription
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              Plans
            </a>
            <a className=" text-sm font-medium leading-normal text-slate-500">
              Features
            </a>
          </div>
          <div className="flex flex-col items-center gap-3">
            <a className="text-base font-semibold leading-normal text-white">
              Connect With Us
            </a>
            <div className="flex gap-2 ">
              <a href="https://www.instagram.com/maxmudov.mzb?igsh=eWd1d3Z4bW1nNXRj">
                <img src={Instagram} alt="" width={50} />
              </a>
              <a href="https://t.me/mamurjon_maxmudov">
                <img src={Telegram} alt="" width={50} />
              </a>
            </div>
          </div>
        </div>
        <span className="mt-10 block h-px w-full bg-slate-900"></span>
        <div className="mt-8 justify-between md:flex">
          <p className=" text-sm font-normal leading-normal text-slate-600 lg:text-lg ">
            @2023 streamvib, All Rights Reserved
          </p>
          <div className="mt-5 flex gap-8 md:m-0 ">
            <p className="text-sm font-normal leading-normal text-slate-600 lg:text-lg">
              Terms of Use
            </p>
            <p className="text-sm font-normal leading-normal text-slate-600 lg:text-lg">
              Privacy Policy
            </p>
            <p className="text-sm font-normal leading-normal text-slate-600 lg:text-lg">
              Cookie Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
