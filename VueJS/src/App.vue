<template>
  <div id="app">

    <v-app id="inspire">
        <v-content>
        <v-container fluid fill-height>

          <v-layout justify-center >
            <v-flex >
                <router-view></router-view>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    drawer: null
  })
};
</script>
