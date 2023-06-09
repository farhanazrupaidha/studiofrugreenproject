import React, { useEffect } from "react";

import Box from '@mui/material/Box';

export default function AdsenseDisplay () {
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
  <Box sx={{mt:3, mb: 3}}>
  <center>
    <ins class="adsbygoogle"
     style={{display:"block", maxWidth: 1000, width:'100%', height:120, margin:3}}
     data-ad-client="ca-pub-5314296649303404"
     data-ad-slot="8526286736"
     data-ad-format="auto"
     data-full-width-responsive="true">
    </ins>
  </center>
  </Box>
  );
}