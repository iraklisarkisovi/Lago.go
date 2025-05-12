import Script from "next/script";
import { useEffect, useRef } from "react";

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;

  useEffect(() => {
    const interval = setInterval(() => {
      if ((window as any).google && mapRef.current) {
        clearInterval(interval);

        const map = new (window as any).google.maps.Map(mapRef.current, {
          center: { lat: 41.8225, lng: 46.2764 },
          zoom: 15,
          mapTypeId: "satellite",
          fullscreenControl: false, 
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
        src={`https://maps.googleapis.com/maps/api/js?key=${mapKey}&libraries=maps,marker&v=beta`}
        async
        defer
        strategy="afterInteractive"
      />
      <div
        ref={mapRef}
        className="w-screen h-screen "
      />
    </>
  );
};

export default MapComponent;
