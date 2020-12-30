import {
  ActionContext,
  ActionTree,
  createStore,
  useStore as baseUseStore,
  Store,
} from "vuex";
import "@vue/apollo-composable";

import useAxios from "../axios";
import useConfig from "@/config";
import { InjectionKey } from "vue";
const axios = useAxios();
const config = useConfig();

export interface State {
  jwt: string | null;
}

const initialState: State = {
  jwt: null,
};

export const mutations = {
  setJwt(state: State, payload: string | null) {
    state.jwt = payload;
  },
};

export const actions = {
  async loginPublic({ commit, state }: ActionContext<State, State>) {
    const { identifier, password } = config.publicAuth || {
      identifier: "public",
      password: "tryguest",
    };
    try {
      const login = await axios.post("/auth/local", { identifier, password });
      commit("setJwt", login.data.jwt);
      console.log(login);
    } catch (e) {
      commit("setJwt", null);
      throw e;
    }
  },
};

export const store = createStore({
  state: () => initialState,
  mutations,
  actions,
  modules: {},
});

export const key: InjectionKey<Store<State>> = Symbol();

/**
 * Custom useStore hook for composition api
 */
export function useStore(): Store<State> {
  return baseUseStore(key);
}

