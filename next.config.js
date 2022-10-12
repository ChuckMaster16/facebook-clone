/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
      domains:[
        "res.cloudinary.com",
        "platform-lookaside.fbsbx.com",
        "firebasestorage.googleapis.com",
      ],
     },
   };

module.exports = nextConfig
