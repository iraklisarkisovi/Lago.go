import React from 'react'
import { InterFont } from '..';
import { useSelector } from 'react-redux';
import { RootState } from '../api & maps/Redux/ReduxMain';

const Footer = () => {
    const lan = useSelector((state: RootState) => state.main.language);

  return (
    <footer
      className="bg-cyan-100 text-black py-8 px-4 text-center text-sm space-y-2"
      style={{ fontFamily: InterFont.style.fontFamily }}
    >
      <div className="flex justify-end space-x-4 mr-22">
        <a href="#" className="hover:underline">
          Facebook
        </a>
        <a href="#" className="hover:underline">
          Instagram
        </a>
      </div>
      <div className="mt-4 ml-22 gap-3 flex flex-col justify-start space-x-4 text-xs">
        <div className="flex flex-col items-start gap-3">
          <p className="font-bold text-3xl">Lagodekhi Ways</p>
          <p>+995 ●●●●●●●</p>
          <p>
            <a href="mailto:Lagowayx@gmail.com">Lagoways@gmail.com</a>
          </p>
        </div>
        <div className="flex flex-row gap-5">
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            City
          </a>
          <a href="#" className="hover:underline">
            Parks
          </a>
          <a href="#" className="hover:underline">
            Markets
          </a>
          <a href="#" className="hover:underline">
            Hiking
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
        </div>
      </div>
      <p className="mt-2 text-gray-600">
        &copy; 2025 Lagodekhi Ways{" "}
        {lan ? "ყველა უფლება დაცულია" : "all rights reserved"}
      </p>
    </footer>
  );
}

export default Footer
