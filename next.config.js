module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com']
  }
}
