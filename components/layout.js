import ResponsiveAppBar from '../components/appbar'
import Footer from '../components/footer'

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
