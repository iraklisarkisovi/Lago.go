import React from 'react'

const Serviced = [
  {
    name: "City",
    Desc: "City hall, Schools, Justice house, Protected territories, etc.",
    Color: "#55DABF",
    Image:
      "https://img.icons8.com/?size=100&id=ffeQBIQ6lSmI&format=png&color=000000",
  },
  {
    name: "Entertainment",
    Desc: "Parks, Sport fields, Picnic fields, Events, Cinema, etc",
    Color: "#F8BFC2",
    Image:
      "https://img.icons8.com/?size=100&id=jF5P5A3iVWWh&format=png&color=000000",
  },
  {
    name: "Services",
    Desc: "Hotels, Restaurants, Banks, Cafes, Gas stations, Post offices, etc.",
    Color: "#BADA55",
    Image:
      "https://img.icons8.com/?size=100&id=ueuM3zOn0DyQ&format=png&color=000000",
  },
];

const Sections = () => {
  return (
    <div className="bg-[#DDFFFC] flex items-center justify-center w-screen h-[500px]">
      <div className="flex flex-col h-full items-center justify-center gap-7">
        {Serviced.map(({ name, Desc, Color, Image }) => (
          <section
            style={{ backgroundColor: `${Color}` }}
            className={`px-10 py-4 flex items-center justify-between mx-auto w-[1000px] rounded-full`}
          >
            <div className="flex text-black items-center w-full text-start justify-between">
              <img src={Image} alt="" width={50} height={50} />
              <h2 className="text-lg font-ligt">{name}</h2>
              <p className="text-sm">{Desc}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Sections
