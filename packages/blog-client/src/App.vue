<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import { ApolloClients, useMutation } from "@vue/apollo-composable";
import { apolloClient } from "./apollo";
import gql from "graphql-tag";
import { useStore } from "./store";

export default defineComponent({
  name: "App",
  setup() {
    provide(ApolloClients, { default: apolloClient });
    const store = useStore();
    store.dispatch("loginPublic").then(() => {
      console.log("logged in ", store.state.jwt);
    });
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
