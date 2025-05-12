import { AppProps } from 'next/app';
import Script from 'next/script';
import React from 'react'



const Maps = ({ Component, pageProps }: AppProps) => {
  const MapKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${MapKey}&callback=console.debug&libraries=maps,marker&v=beta`}
        strategy="afterInteractive"
      />
      <Component {...pageProps}/>
    </>
  );
};

export default Maps
