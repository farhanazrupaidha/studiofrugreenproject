import { useRouter } from "next/router";

import i18n from "../lib/i18n";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Location () {
const { locale } = useRouter();
const formattedLocale = locale.split("-")[0];
  return (
    <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:2, mb:5}}>
        <Typography variant='h6' sx={{mr:1}}>{i18n.intro.lokasi[formattedLocale]}</Typography>
        <Button size="small" href='/locations/bali' variant="contained" color="primary" sx={{borderRadius: 5}}>
            Bali
        </Button> 
        <Button size="small" href='/locations/jawabarat' variant="contained" color="primary" sx={{borderRadius: 5}}>
            Jawa Barat
        </Button>
        <Button size="small" href='/locations/jawatengah' variant="contained" color="primary" sx={{borderRadius: 5}}>
                    Jawa Tengah
        </Button>
        <Button size="small" href='/locations/jawatimur' variant="contained" color="primary" sx={{borderRadius: 5}}>
                    Jawa Timur
        </Button>
        <Button size="small" href='/locations/setupatok' variant="contained" color="primary" sx={{borderRadius: 5}}>
            Setu Patok
        </Button>        
    </Stack>
  );
}
