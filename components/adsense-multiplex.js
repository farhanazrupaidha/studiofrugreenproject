import React, { useEffect } from "react";

import Box from '@mui/material/Box';

export default function AdsenseMultiplex () {
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
  <Box sx={{mt:2, mb:2}}>
  <center>
    <ins class="adsbygoogle"
     style={{display:"block", maxWidth:"1000", width:'100%'}}
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-5314296649303404"
     data-ad-slot="4332247273">
    </ins>
  </center>
  </Box>
  );
}