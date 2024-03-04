
import { useEffect, useRef } from "react";

export default function AdsterraBannerDesktop() {
  const banner = useRef();

  const atOptions = {
    key: "3fa7ac7b9bbe35909eb9f443b2d387e1",
    format: "iframe",
    height: 300,
    width: 160,
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