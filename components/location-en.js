import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Location () {
  return (
    <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" sx={{mt:2, mb:5}}>
        <Typography variant='h5' sx={{mr:1}}>Search based on location:</Typography>
        <Button size="small" href='/en/locations/bali' variant="contained" color="primary" sx={{borderRadius: 5}}>
            Bali
        </Button> 
        <Button size="small" href='/en/locations/westjava' variant="contained" color="primary" sx={{borderRadius: 5}}>
            West Java
        </Button>
        <Button size="small" href='/en/locations/centraljava' variant="contained" color="primary" sx={{borderRadius: 5}}>
            Central Java
        </Button>
        <Button size="small" href='/en/locations/eastjava' variant="contained" color="primary" sx={{borderRadius: 5}}>
            East Java
        </Button>
        <Button size="small" href='/en/locations/setupatok' variant="contained" color="primary" sx={{borderRadius: 5}}>
            Setu Patok
        </Button>        
    </Stack>
  );
}
