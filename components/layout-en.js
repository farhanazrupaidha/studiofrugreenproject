import dynamic from 'next/dynamic'

const ResponsiveAppBar = dynamic(() => import('../components/appbar-en'), { ssr: false })
const Footer = dynamic(() => import('../components/footer-en'), { ssr: false })

export default function Layout({ preview, children }) {
  return (
    <>
    <ResponsiveAppBar />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
