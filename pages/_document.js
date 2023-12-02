import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import * as gtag from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8" /> 
            <meta
              name="format-detection"
              content="telephone=no, date=no, email=no, address=no"
            />          
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
            <link rel="icon" href="/images/favicon.ico" />  
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
              dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            /> 
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />                   
        {/* google adsense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script dangerouslySetInnerHTML={{
            __html: `
           (adsbygoogle = window.adsbygoogle || []).push({
             google_ad_client: '${process.env.NEXT_GOOGLE_AD}',
             enable_page_level_ads: true
             });
            `,
         }} />
         {/* google adsense */}  
         <script src="https://t.posthog.com/static/array.js" strategy="afterInteractive" />
         <script dangerouslySetInnerHTML={{
            __html: `
            posthog.init("phc_hIxyJYhMq4PNf6nFh6e5l8JX6tmKnDNgiaWLY6s201j")
            `,
         }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
