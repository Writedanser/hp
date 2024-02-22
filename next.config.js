/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/minor-circle-hp" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
