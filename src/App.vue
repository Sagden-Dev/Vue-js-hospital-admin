<template>
  <div>
    <v-app>
      <v-navigation-drawer absolute permanent left app style="height:100vh;" class="pl-3 pt-3">
        <img src="./assets/img/logo-image.png" alt="" class="ml-3 mb-9">
        <div class="mb-6 ml-3">MEDICINE</div>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Bosh sahifa</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-bed</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Palatalar</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/doctor">
          <v-list-item-icon>
            <v-icon>mdi-doctor</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shifokorlar</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/patient">
          <v-list-item-icon>
            <v-icon>mdi-human</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Bemorlar</v-list-item-title>
        </v-list-item>
        <v-list-item link class="mb-9">
          <v-list-item-icon>
            <v-icon>mdi-door</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Bo`limlar</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link style="border-top:1px solid silver">
          <v-list-item-icon>
            <v-icon>mdi-help</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Yordam</v-list-item-title>
        </v-list-item>
      </v-navigation-drawer>
      <v-content style="background-color:#F6F8FB">
        <v-container>
          <div class="mb-8 d-flex">
            <input type="text" style="background:#fff;width:350px;height:40px;border:0px;border-radius:100px;outline:0"
              class="pl-3" placeholder="SEARCH">
            <v-spacer></v-spacer>
            <img src="./assets/img/bell.png" alt="" class="mr-3">
            <img src="./assets/img/man.png" alt="">
          </div>
        </v-container>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({

    }),
  };
</script>