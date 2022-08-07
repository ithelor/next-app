/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cgifurniture.com']
  },

  webpack: (config) => {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: { removeViewBox: false }
              }
            }
          ]
        },
        titleProp: true
      },
      test: /\.svg$/
    })

    return config
  }
}

