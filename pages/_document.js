import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href='https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css' rel='stylesheet' />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"rel="stylesheet"/>
            <link rel="icon" href="/images/favicon.ico" />
            <meta name="google-site-verification" content="XMX1zwCBJRAaehfHGLaU6xHPlhjOGEmWKdDVIvvt9pk" />
            {/* google adsense */}
     	    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
     	    <script dangerouslySetInnerHTML={{
         	    __html: `
            	(adsbygoogle = window.adsbygoogle || []).push({
              	google_ad_client: "ca-pub-5314296649303404",
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
