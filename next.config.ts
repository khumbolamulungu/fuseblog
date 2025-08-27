// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         hostname: "encrypted-tbn0.gstatic.com",
//         protocol: "https",
//         port: "",
//       },

//       {
//         hostname: "lh3.googleusercontent.com",
//         protocol: "https",
//         port: "",
//       },


//     ]
//   }
// };

// export default nextConfig;


// next.config.js or next.config.ts (you're using TS)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**", // ✅ allow all paths
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**", // ✅ allow all paths
      },
    ],
  },
};

export default nextConfig;
