/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "randomuser.me",  // ← IMPORTANT
    ],
  },
  async redirects() {
    return [
      {
        source: "/blogs/WinterDentalCareBlog",
        destination: "/blogs/winter-dental-care",
        permanent: true, // TRUE = 301 redirect
      },
    ];
  },
};

module.exports = nextConfig;
