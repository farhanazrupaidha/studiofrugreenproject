import React, { useEffect } from "react";

import Box from '@mui/material/Box';

export default function AdsenseText () {
  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log("adsense error", error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
  <Box sx={{mt:1, mb: 2}}>
  <center>
    <ins
      className="adsbygoogle"
      style={{display:"block"}}
      data-ad-layout-key="-gw-3+1f-3d+2z"
      data-ad-client="ca-pub-5314296649303404"
      data-ad-slot="8787873124"
      data-ad-format="fluid"
      data-full-width-responsive="true"
    ></ins>
  </center>
  </Box>
  );
}