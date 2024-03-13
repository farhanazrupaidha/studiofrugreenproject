import dynamic from 'next/dynamic'

const ResponsiveAppBar = dynamic(() => import('../components/appbar'), { ssr: false })
const Footer = dynamic(() => import('../components/footer'), { ssr: false })

import Button from '@mui/material/Button';
import RecommendIcon from '@mui/icons-material/Recommend';

export default function Layout({ preview, children }) {
  return (
  <>
    <ResponsiveAppBar />
    <div className="min-h-screen">
    <Button 
        variant="contained" 
        color="secondary" 
        size="large"
        sx={{
          borderRadius: 5, 
          position: 'fixed', 
          bottom: "50px", 
          left:'50%', 
          transform: 'translate(-50%, -50%)', 
          display:'block', 
          boxShadow: 100, 
          fontWeight: 'bold'
          }} 
          href="https://www.profitablegatecpm.com/uk0vqgawc?key=451d8c17e922585785b1275ac708ea0f" 
          target="_blank">
            <RecommendIcon sx={{mr:1}} />
            Beri Dukungan
        </Button>       
          {children}
    </div>
    <Footer />
  </>
  )
}