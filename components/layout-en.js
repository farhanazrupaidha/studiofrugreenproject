import ResponsiveAppBar from './appbar-en'
import Footer from './footer-en'

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
