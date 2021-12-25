declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    graphqlUri: string
  }
  interface PrivateRuntimeConfig {
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}