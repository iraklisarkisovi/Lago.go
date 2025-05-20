import React, { useState } from 'react'
import { Eng, Ge } from "../api & maps/Languages/Languages";
import { useSelector } from 'react-redux';
import { RootState } from '../api & maps/Redux/ReduxMain';

const Serviced = [
  {
    Color: "#55DABF",
    Image:
      "https://img.icons8.com/?size=100&id=ffeQBIQ6lSmI&format=png&color=000000",
  },
  {
    Color: "#F8BFC2",
    Image:
      "https://img.icons8.com/?size=100&id=jF5P5A3iVWWh&format=png&color=000000",
  },
  {
    Color: "#BADA55",
    Image:
      "https://img.icons8.com/?size=100&id=ueuM3zOn0DyQ&format=png&color=000000",
  },
];

const Sections = () => {
  const lan = useSelector((state: RootState) => state.main.language);

  return (
    <div className="bg-[#DDFFFC] flex items-center justify-center w-screen h-[500px]">
      <div className="flex flex-col h-full items-center justify-center gap-7">
        {Serviced.map(({ Color, Image }, index) => {
          const sectionGe = Ge.infbar[index];
          const sectionEng = Eng.infbar[index];

          return (
            <section
              key={index}
              style={{ backgroundColor: `${Color}` }}
              className="px-10 py-4 flex items-center justify-between mx-auto w-[1000px] rounded-full"
            >
              <div className="flex text-black items-center w-full text-start justify-between">
                <img src={Image} alt="" width={50} height={50} />
                <h2 className="text-lg font-light">
                  {lan ? sectionGe?.name : sectionEng?.name}
                </h2>
                <p className="text-sm">
                  {lan ? sectionGe?.inf : sectionEng?.inf}
                </p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Sections
