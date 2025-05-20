import React, { useEffect, useState } from 'react'
import { InterFont } from '..';
import Link from 'next/link';
import { Eng, Ge } from "../api & maps/Languages/Languages"
import { useDispatch, useSelector } from 'react-redux';
import { LanSwitcher, RootState } from '../api & maps/Redux/ReduxMain';

const Header = () => {
      const [showHeader, setShowHeader] = useState(true);
      const lan = useSelector((state: RootState) => state.main.language);
      const dispatch = useDispatch()

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY < 600) {
            setShowHeader(true);
          } else {
            setShowHeader(false);
          }
          console.log(window.scrollY)
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  return (
    <header
      className={`fixed w-screen text-sm flex bg-gradient-to-t from-transparent to-[#000000ab] flex-row justify-around py-6 text-white z-50`}
      style={{
        top: showHeader ? "0px" : "-80px",
        fontFamily: InterFont.style.fontFamily,
        transition: "top 0.2s ease-in-out",
      }}
    >
      <div>
        <h1 className="text-[20px]">LagoWays</h1>
      </div>
      <div className="flex flex-row absolute gap-6">
        {Ge.header.map((item) => (
          <Link
            key={"ge"}
            className={`hover:text-[#cccc] ${
              lan === false && "hidden"
            } transition-colors`}
            href={item.toLowerCase()}
          >
            {item}
          </Link>
        ))}
        {Eng.header.map((item) => (
          <Link
            key={"Eng"}
            className={`hover:text-[#cccc] ${
              lan && "hidden"
            } transition-colors`}
            href={item.toLowerCase()}
          >
            {item}
          </Link>
        ))}
      </div>
      <div>
        <img
          className="h-9 w-auto rounded-2xl cursor-pointer"
          src={
            lan
              ? "https://img.icons8.com/?size=100&id=AeJiAvL1abrG&format=png&color=000000"
              : "https://img.icons8.com/?size=100&id=15534&format=png&color=000000"
          }
          onClick={() => dispatch(LanSwitcher())}
        />
      </div>
    </header>
  );
}

export default Header
