import dynamic from 'next/dynamic'

const ResponsiveAppBar = dynamic(() => import('../components/appbar'), { ssr: false })
const Footer = dynamic(() => import('../components/footer'), { ssr: false })

export default function Layout({ preview, children }) {
  return (
    <>
    <ResponsiveAppBar />
        <main>{children}</main>
      <Footer />
    </>
  )
}