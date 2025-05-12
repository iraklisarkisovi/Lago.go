import React, { useEffect, useState } from 'react'
import { InterFont } from '..';

const Header = () => {
      const [showHeader, setShowHeader] = useState(true);

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
      <div className="flex flex-row gap-6">
        <a href="#" className="hover:text-[#cccccc] transition-colors">
          Services
        </a>
        <a href="#" className="hover:text-[#cccccc] transition-colors">
          City
        </a>
        <a href="#" className="hover:text-[#cccccc] transition-colors">
          Parks
        </a>
        <a href="#" className="hover:text-[#cccccc] transition-colors">
          Markets
        </a>
        <a href="#" className="hover:text-[#cccccc] transition-colors">
          Hiking
        </a>
        <a href="#" className="hover:text-[#cccccc] transition-colors">
          Help
        </a>
      </div>
    </header>
  );
}

export default Header
