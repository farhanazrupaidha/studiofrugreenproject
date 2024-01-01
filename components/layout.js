import dynamic from 'next/dynamic'

const ResponsiveAppBar = dynamic(() => import('../components/appbar'), { ssr: false })
const Footer = dynamic(() => import('../components/footer'), { ssr: false })

export default function Layout({ preview, children }) {
  return (
  <html lang="id" suppressHydrationWarning>
    <ResponsiveAppBar />
    <div className="min-h-screen">
        <main>{children}</main>
    </div>
    <Footer />
  </html>
  )
}