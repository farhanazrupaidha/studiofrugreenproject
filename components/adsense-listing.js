import React, { useEffect } from "react";

import Box from '@mui/material/Box';

export default function AdsenseListing () {
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
  <Box sx={{mt:2, mb: 3}}>
  <center>
    <ins class="adsbygoogle"
     style={{display:"block", maxWidth: 1000, width:'100%', height:120, margin: 3}}
     data-ad-format="fluid"
     data-ad-layout-key="-6t+ed+2i-1n-4w"
     data-ad-client="ca-pub-5314296649303404"
     data-ad-slot="1053146110">
    </ins>
  </center>
  </Box>
  );
}