import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Location () {
  return (
    <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:2, mb:5}}>
        <Typography variant='h5' sx={{mr:1}}>Search based on location:</Typography>
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
