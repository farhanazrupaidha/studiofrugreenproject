import Link from "next/link";
import { useRouter } from "next/router";

import Button from '@mui/material/Button';
import TranslateIcon from '@mui/icons-material/Translate';

export default function LocaleSwitcher() {
 const { locales, locale, pathname, query, asPath } = useRouter();
 const otherLocales = locales.filter((l) => l !== locale); // Find all the locales apart from the current locale.

 return (
   <>
     {otherLocales.map((locale) => {
       return (
         <center>
         <Link
           key={locale}
           href={{ pathname, query }}
           as={asPath}
           locale={locale}
         >
           <Button color= 'secondary' variant="contained" sx={{ my: 2, width:85, display: 'block' }}><TranslateIcon sx={{mr:1}} />{locale}</Button>
         </Link>
         </center>
       );
     })}
   </>
 );
}