
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function PostReference ({ referensi }) {
  return (
  <>
  <Typography variant="h5" sx={{mt:5}}>Referensi</Typography>
  <Box sx={{mt:5, whiteSpace: 'nowrap', overflowX: 'auto'}}>
      <Typography variant='body2'>
        <div
            dangerouslySetInnerHTML={{ __html: referensi?.html }}
        />
      </Typography>
    </Box>
    </>
  );
}
