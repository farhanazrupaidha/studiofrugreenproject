
import postStyles from './post-styles.module.css'

import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PostReference({ reference }) {
  return (
<> 
  <Box sx={{width:'100%', maxWidth:1000, overflow:'auto', m:'auto'}}>
              <Accordion sx={{mt:5}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content" 
                  id="panel1a-header"
                  >        
                  <Typography variant="h6">Reference</Typography>   
                </AccordionSummary>
                <AccordionDetails>   
                    <Box sx={{mt:4, whiteSpace: 'nowrap', overflowX: 'auto'}}>
                        <Typography variant='body2'>
                            <div
                                dangerouslySetInnerHTML={{ __html: reference?.html }}
                            />
                        </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>    
  </Box>          
  </>     
  )
}
