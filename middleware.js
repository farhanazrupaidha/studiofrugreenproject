import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Routes that can always be accessed, and have
  // no authentication information
  publicRoutes: [
    "/", 
    "/404",  
    "/disclaimer", 
    "/en",
    "/endemik",
    "/fauna",
    "/flora",
    "kontak",
    "/kontribusi",
    "/pengetahuan",
    "/sains",
    "/tentang",
    "/termsofuse",
    "/videos",
    "/wisata",
    "/posts/:path*",
    "/lokasi/bali",
    "/lokasi/jawabarat",
    "/lokasi/jawatengah",
    "/lokasi/jawatimur",
    "/lokasi/setupatok",
    "/en/locations/bali",
    "/en/locations/centraljava",
    "/en/locations/eastjava",
    "/en/locations/setupatok",
    "/en/locations/westjava",
    "/en/endemic",
    "/en/fauna",
    "/en/flora",
    "/en/knowledge",
    "/en/science",
    "/en/travel",
    "/en/videos",
    "/en/posts/:path*"
  ],
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};