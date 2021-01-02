import { ActionTree } from 'vuex';
import type { State as Root } from './';

export interface StrapiUser {
  id: number;
  username: string;
  email: string;
  provider: string;
}

export interface StrapiState {
  jwt?: string;
  user?: StrapiUser;
}

export const state: () => StrapiState = () => ({
  jwt: undefined,
  user: undefined,
});

export const mutations = {
  setJwt(state: StrapiState, payload: string | undefined) {
    state.jwt = payload;
  },

  setUser(state: StrapiState, payload: StrapiUser | undefined) {
    state.user = payload;
  },
};

export const actions: ActionTree<StrapiState, Root> = {
  async fetchJwt(
    { commit, state },
    payload: { identifier: string; password: string }
  ) {
    const { identifier, password } = payload;
    const jwtResponse = await this.$axios.post('/strapi/auth/local/', {
      identifier,
      password,
    });
    commit('setJwt', jwtResponse.data.jwt);
    commit('setUser', jwtResponse.data.user);
  },
};
