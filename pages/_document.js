import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
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
            <meta name="monetag" content="9663b06f2269f23a9530d7c480190dbd" />
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
