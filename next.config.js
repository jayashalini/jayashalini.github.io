// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ''
// let basePath = ''

// if (isGithubActions) {
  // const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  // assetPrefix = '/${repo}/'
  // basePath = '/${repo}'
// }

// module.exports =   {
//   env: {
//     REACT_APP_GA_TRACKING_ID: '',
//     RUNTIME_ENV: 'production',
//   }
// }
module.exports = {
  images: {
    unoptimized: true,
  },
}