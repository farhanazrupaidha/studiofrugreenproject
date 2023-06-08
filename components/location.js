
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Location () {
  return (
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 1 }}
          sx={{mt:2, mb:5}}
        >
        <Typography variant='h6'>Berdasarkan Lokasi</Typography>
        <Button size="small" href='/locations/setupatok' variant="contained" color="primary" sx={{borderRadius: 5}}>
            Setu Patok
        </Button>
        <Button size="small" href='/locations/jawabarat' variant="contained" color="primary" sx={{borderRadius: 5}}>
            Jawa Barat
        </Button>
        <Button size="small" href='/locations/jawatengah' variant="contained" color="primary" sx={{borderRadius: 5}}>
                    Jawa Tengah
        </Button>
        </Stack>
  );
}
