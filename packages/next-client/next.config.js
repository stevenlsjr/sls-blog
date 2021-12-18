/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    graphqlUri: process.env.GRAPHQL_URI || 'http://localhost:8000/graphql'
  }
}
