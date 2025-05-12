import React from 'react'
import { InterFont } from '..';

const Footer = () => {
  return (
    <footer
      className="bg-cyan-100 py-8 px-4 text-center text-sm space-y-2"
      style={{ fontFamily: InterFont.style.fontFamily }}
    >
      <p className="font-bold text-lg">Lagodekhi Ways</p>
      <p>+995 ●●●●●●●</p>
      <p>
        <a href="mailto:Lagowayx@gmail.com">Lagowayx@gmail.com</a>
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="hover:underline">
          Facebook
        </a>
        <a href="#" className="hover:underline">
          Instagram
        </a>
      </div>
      <div className="mt-4 flex justify-center space-x-4 text-xs">
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
      <p className="mt-2 text-gray-600">
        &copy; 2025 Lagodekhi Ways all rights reserved
      </p>
    </footer>
  );
}

export default Footer
