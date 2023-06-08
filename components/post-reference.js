import postStyles from './post-styles.module.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function PostReference ({ reference }) {
  return (
  <>
    <Typography variant="h5" sx={{mt:5}}>Referensi</Typography>
    <Box sx={{mt:5, whiteSpace: 'nowrap', overflowX: 'auto'}}>
        <Typography variant='body2'>
            <div
                className={`post ${postStyles.post}`}
                dangerouslySetInnerHTML={{ __html: reference?.html }}
            />
        </Typography>
    </Box>
  </>
 );
}
