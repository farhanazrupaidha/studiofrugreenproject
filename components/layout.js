import dynamic from 'next/dynamic'

const ResponsiveAppBar = dynamic(() => import('../components/appbar'), { ssr: false })
const Footer = dynamic(() => import('../components/footer'), { ssr: false })

import Button from '@mui/material/Button';
import RecommendIcon from '@mui/icons-material/Recommend';

export default function Layout({ preview, children }) {
  return (
  <html lang="id" suppressHydrationWarning>
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
          href="https://sociabuzz.com/studiofru/support" 
          target="_blank">
            <RecommendIcon sx={{mr:1}} />
            Beri Dukungan
        </Button>       
        <main>{children}</main>
    </div>
    <Footer />
  </html>
  )
}