import Script from "next/script";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../api & maps/Redux/ReduxMain";

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;
  const lan = useSelector((state: RootState) => state.main.language);

  useEffect(() => {
    const interval = setInterval(() => {
      if ((window as any).google && mapRef.current) {
        clearInterval(interval);

        const map = new (window as any).google.maps.Map(mapRef.current, {
          center: { lat: 41.8225, lng: 46.2764 },
          zoom: 15,
          fullscreenControl: false,
          mapTypeId: (window as any).google.maps.MapTypeId.HYBRID,
          
        });

        new (window as any).google.maps.Marker({
          position: { lat: 41.8225, lng: 46.2764 },
          map,
          title: "Lagodekhi",
 
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${mapKey}&libraries=maps,marker&v=beta&language=${lan ? "ka" : "en"}`}
        async
        defer
        strategy="afterInteractive"
      />
      <div ref={mapRef} className="w-screen h-screen" />
    </>
  );
};

export default MapComponent;
