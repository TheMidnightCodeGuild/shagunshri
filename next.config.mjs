/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.integratedindia.in",
        port: "",
        pathname: "/assets/img/blog/**",
      },
    ],
  },
};

export default nextConfig;
