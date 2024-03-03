import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/bio/:path*", "/journals/:path*"],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: [
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
    "/lokasi/:path*",
    "en/:path*"
  ],
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};