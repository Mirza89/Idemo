<template >
  <v-app id="inspire">
     <v-navigation-drawer flat v-model="drawer" dark clipped fixed app>
       <v-list>
     <v-list-tile  to="/" >
       <v-list-tile-action>
         <v-icon>home</v-icon>
       </v-list-tile-action>
       <v-list-tile-title >Home</v-list-tile-title>
     </v-list-tile>

     <v-list-group prepend-icon="menu" value="true">
       <v-list-tile slot="activator">
         <v-list-tile-title>Menu</v-list-tile-title>
       </v-list-tile>


       <router-link to="/about">
       <v-list-tile id="MainMenu">
       <v-list-tile-title>O nama</v-list-tile-title>
       </v-list-tile>
       </router-link>

       <router-link to="/uslugecentra">
       <v-list-tile id="MainMenu">
       <v-list-tile-title>Usluge centra</v-list-tile-title>
       </v-list-tile>
       </router-link>

       <router-link to="/novosti">
       <v-list-tile id="MainMenu">
       <v-list-tile-title>Novosti</v-list-tile-title>
       </v-list-tile>
       </router-link>

       <router-link to="/onlineprijava">
       <v-list-tile id="MainMenu">
       <v-list-tile-title>On-line Prijava</v-list-tile-title>
       </v-list-tile>
       </router-link>

       <router-link to="/blog">
       <v-list-tile id="MainMenu">
       <v-list-tile-title>Blog</v-list-tile-title>
       </v-list-tile>
       </router-link>

       <router-link to="/kontakt">
       <v-list-tile id="MainMenu">
       <v-list-tile-title>Kontakt</v-list-tile-title>
       </v-list-tile>
       </router-link>

       </v-list-group>

   </v-list>
     </v-navigation-drawer>
     <v-toolbar color="white" flat fixed app clipped-left>
       <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
       <v-toolbar-title>Erazmo</v-toolbar-title>
     </v-toolbar>

     <v-footer color="white" flat app>
       <span class="black--text">&copy; 2018</span>
     </v-footer>
   </v-app>
</template>

<style media="screen">
  #MainMenu{
    margin-left: 55px;
  }
</style>




<script>
export default {
 data: () => ({
   drawer: null,

 })
}
</script>
