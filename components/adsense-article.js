import React, { useEffect } from "react";

import Box from '@mui/material/Box';

export default function AdsenseArticle () {
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
  <Box sx={{mt:2, mb: 4}}>
  <center>
    <ins
      className="adsbygoogle"
      style={{display:"block", maxWidth: 1000, width:'100%', height:120, margin:3}}
      data-ad-layout="in-article"
      data-ad-client="ca-pub-5314296649303404"
      data-ad-slot="4444599164"
      data-ad-format="fluid"
      data-full-width-responsive="true"
    ></ins>
  </center>
  </Box>
  );
}