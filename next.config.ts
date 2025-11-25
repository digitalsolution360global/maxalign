/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "randomuser.me",  // ← IMPORTANT
    ],
  },
};

module.exports = nextConfig;
