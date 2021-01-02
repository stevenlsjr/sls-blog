/**
 * Authenticates the axios client for strapi
 * with public authentication
 */

import { Context } from '@nuxt/types';
import { ApolloHelpers } from '@nuxtjs/apollo';
export default async ({ $axios, store, $config, $apolloHelpers }: Context) => {
  if (!store.state.strapi.jwt) {
    const auth = $config.strapiPublicAuth;
    await store.dispatch('strapi/fetchJwt', {
      identifier: auth.identifier,
      password: auth.password,
    });
  }

  setJwt(store.state.strapi.jwt, $apolloHelpers);
  const _subscribe = store.subscribe((mutation, state) => {
    switch (mutation.type) {
      case 'strapi/setJwt':
        setJwt(mutation.payload, $apolloHelpers);
        break;
    }
  }, {});
};

function setJwt(jwt: string | undefined, $apolloHelpers: ApolloHelpers) {
  if (jwt) {
    $apolloHelpers.onLogin(jwt);
  }
}
