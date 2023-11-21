import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8" />
            <link href='https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css' rel='stylesheet' />
            <link
              rel="icon"
              href="/icon?<generated>"
              type="image/<generated>"
              sizes="<generated>"
            />
            <link
              rel="apple-touch-icon"
              href="/apple-icon?<generated>"
              type="image/<generated>"
              sizes="<generated>"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
            />
             {/* monetag */}
            <meta name="monetag" content="9663b06f2269f23a9530d7c480190dbd" />           
            {/* monetag */}           
            {/* google adsense */}
     	    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
     	    <Script dangerouslySetInnerHTML={{
         	    __html: `
            	(adsbygoogle = window.adsbygoogle || []).push({
              	google_ad_client: "ca-pub-1624631757856478",
              	enable_page_level_ads: true
              	});
             	`,
            }} />
            {/* google adsense */}
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
            <script
                dangerouslySetInnerHTML={{
                __html: `
                 window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
                });
                `,
                }}
            />
            {/* Global Site Tag (gtag.js) - Google Analytics */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
