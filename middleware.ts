import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(
  async function middleware() {},
  {
    // Middleware still runs on all routes, but doesn't protect the blog route
    publicPaths: ["/"],
  }
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
}

// import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   async function middleware(req) {
//     const { isAuthenticated } = req.auth;

//     if (!isAuthenticated) {
//       // Redirect unauthenticated users to /login
//       return NextResponse.redirect(new URL("/login", req.url));
//     }

//     return NextResponse.next(); // Allow access if authenticated
//   },
//   {
//     publicPaths: ["/", "/login", "/register"], // public pages that don't require auth
//   }
// );

// export const config = {
//   matcher: [
//     // Protect all routes except static assets and APIs
//     "/((?!_next|api|.*\\..*).*)",
//   ],
// };

