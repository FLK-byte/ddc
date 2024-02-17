/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "default",
        remotePatterns: [{protocol: "http", hostname: "localhost"}]
    }
};

export default nextConfig;
