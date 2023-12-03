import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GoogleTagManager } from '@next/third-parties/google'
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
           <GoogleTagManager gtmId="${gtag.GA_TRACKING_ID}" />  
      {/* Global Site Tag (gtag.js) - Google Analytics */}                
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
