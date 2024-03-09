import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as gtag from '../lib/gtag'
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from '@mui/material-nextjs/v13-pagesRouter';

export default function MyDocument(props) {
    return (
      <Html>
        <Head>
            <DocumentHeadTags {...props} />
            <link rel="icon" href="/images/favicon.ico" />  
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="revisit-after" content="3 days" />
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
            <meta name="google-adsense-account" content="ca-pub-1624631757856478"/>
            {/* google adsense */}  
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}

MyDocument.getInitialProps = async (ctx) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};