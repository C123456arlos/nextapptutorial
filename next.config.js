/** @type {import('next').NextConfig} */
const nextConfig = {
  // rules: [
  //   {
  //     test: /\.css$/i,
  //     use: ["style-loader", "css-loader", "sass-loader"],
  //   },
  // ],
  logging: {
    level: 'verbose',
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'wembleypark.com']
  }
}
const { withSuperjson } = require('next-superjson')
module.exports = withSuperjson()(nextConfig)
