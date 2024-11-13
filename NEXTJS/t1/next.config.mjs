/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false, // Disable React Strict Mode

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },

  // async headers() {
  //   return [
  //     {
  //       source: "/exam", // Or any other dynamic or static route
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "no-store, must-revalidate", // Disable caching for specific route
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
