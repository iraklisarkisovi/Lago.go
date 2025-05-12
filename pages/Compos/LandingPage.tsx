import React from 'react'
import { InterFont } from '..';

const LandingPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-[650px] "
      style={{ fontFamily: InterFont.style.fontFamily }}
    >
      <img
        src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="top-0 w-full opacity-80 h-full -z-10 fixed"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <section className="parallax-bg h-screen flex flex-col items-center justify-start mt-26 text-white text-center px-4">
        <h1 className="text-2xl font-extralight mb-2">Welcome to lagodekhi</h1>
        <p className="text-base font-slight max-w-xl">
          This website is created for users who
          <br />
          need to know more about Lagodekhi
        </p>
      </section>
    </div>
  );
}

export default LandingPage
