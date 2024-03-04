
import { useEffect, useRef } from "react";

export default function AdsterraBannerDesktop() {
  const banner = useRef();

  const atOptions = {
    key: "da63cf0c73cf0fedf2d8d957d26c0f2b",
    format: "iframe",
    height: 90,
    width: 728,
  };

      useEffect(() => {
        if (!banner.current.firstChild) {
          const conf = document.createElement("script");
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.src = `//www.topcreativeformat.com/${atOptions.key}/invoke.js`;
          conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

          if (banner.current) {
            banner.current.append(conf);
            banner.current.append(script);
          }
        }
      }, []);
  

  return <div ref={banner} />;

    }