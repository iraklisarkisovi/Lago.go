import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Header from './Compos/Header';
import Footer from './Compos/Footer';
import { InterFont } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './api & maps/Redux/ReduxMain';
import { Eng, Ge } from './api & maps/Languages/Languages';
import translate from 'translate';
 
const { LandingOne, LandingTwo } = Eng.dinamic;
const { LandingOneG, LandingTwoG } = Ge.dinamic;

const page = () => {
  const router = useRouter()
  const { page } = router.query;
  const lan = useSelector((state: RootState) => state.main.language);
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!page) return;

    const fetchTranslation = async () => {
      try {
        if (lan){
          const res = await translate(String(page), { to: "ka" });
          setTranslated(res);
        }else{
          const res = await translate(String(page), { to: "en" });
          setTranslated(res);
        } 

        console.log(translated + lan)
      } catch (error) {
        console.error("Translation error:", error);
      }
    };

    fetchTranslation();
  }, [page, lan]);


  return (
    <>
      <Header />
      <div
        className="flex flex-col items-center justify-center h-[650px]"
        style={{ fontFamily: InterFont.style.fontFamily }}
      >
        <img
          src="https://www.georgianholidays.com/storage/UmYMfBOEUwdwaDVCLlDHRPq7IZ8l7viugEDA35yP.jpeg"
          className="top-0 w-full opacity-80 h-full -z-10 fixed"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {
          <section className="parallax-bg h-screen flex flex-col items-center justify-start mt-40 text-white text-center px-4">
            <h1 className="text-2xl font-extralight mb-2">
              {lan
                ? LandingOneG + " " + translated + " " + LandingTwoG
                : LandingOne + " " + translated + " " + LandingTwo}
            </h1>
          </section>
        }
      </div>
      <div className="w-full h-auto bg-[#DDFFFC] flex flex-col items-center justify-center ">
        <div className="w-[1200px] rounded-xl h-[300px] bg-[#c0faf5] m-10">
          <img src="" alt="" />
        </div>
        <div className="w-[1200px] rounded-xl h-[300px] bg-[#c0faf5] m-10">
          <img src="" alt="" />
        </div>
        <div className="w-[1200px] rounded-xl h-[300px] bg-[#c0faf5] m-10">
          <img src="" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page
