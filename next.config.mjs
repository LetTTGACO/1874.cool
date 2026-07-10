/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "image.1874.cool" },
      { protocol: "https", hostname: "image.1874.run" },
      { protocol: "https", hostname: "cos.codefe.top" },
      { protocol: "https", hostname: "hermes-agent.nousresearch.com" },
      { protocol: "https", hostname: "www.notion.so" },
    ],
  },
}

export default nextConfig
