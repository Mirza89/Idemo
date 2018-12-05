<template >
  <v-app id="inspire">
     <v-navigation-drawer v-model="drawer" dark clipped app>
       <v-list>

     <v-list-group>
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
       <v-toolbar-side-icon @click.stop="drawer = !drawer" :close-on-click="true"></v-toolbar-side-icon>
       <router-link to="/">
       <img src="http://erazmo.ba/images/logotop.png">
       </router-link>
     </v-toolbar>

      <v-parallax src="https://www.quietrev.com/wp-content/uploads/2016/01/The-Power-of-Quiet-Selling_SOURCE_stocksy.jpg" id="Paralax">
      <h4 id="Naslov1">CENTAR ZA PROMOCIJU CJELOŽIVOTNOG UČENJA</h4>
      <h1 id="Naslov2">ERAZMO TUZLA</h1>
      <h2 id="Naslov3">BIZNIS & EDUKACIJA</h2>
      </v-parallax>

      <br>

      <v-layout row>
      <v-flex v-for="card in cards" :key="card.title">
        <v-card hover="1">
          <v-card-media height="200px" :src="card.src">
            <v-container >
              <v-layout>
                <v-flex>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <h4 id="Card1" v-text="card.title"></h4>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <br><br><br><br><br><br><br><br>
    <v-parallax src="http://hdqwalls.com/wallpapers/material-design-blue-and-white-to.jpg" height="150" id="Paralax1">
    <h4 id="Naslov4">ponuda našeg centra</h4>
    </v-parallax>
<br><br><br><br><br><br>

    <v-layout justify-space-around="" xs3 md3 lg3>
      <v-flex xs3>
        <v-card tile hover raised="">
          <v-card-media
            src="http://www.afrosoftug.com/wp-content/uploads/2016/04/java-bg-940x460.jpg"
            height="350px"
          ></v-card-media>

          <v-card-title primary-title>
            <div>
              <h3 class="headline">Java Programiranje</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">pročitajte više</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs3>
        <v-card hover>
          <v-card-media
            src="http://www.androidguys.com/wp-content/uploads/2014/07/android-for-wallpaper-8.png"
            height="350px"
          ></v-card-media>

          <v-card-title primary-title>
            <div>
              <h3 class="headline">Android Programiranje</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">pročitajte više</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs3>
        <v-card hover>
          <v-card-media
            src="https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Download-Free-Blueprint-Background-PIC-WPB0014325.jpg"
            height="350px"
          ></v-card-media>

          <v-card-title primary-title>
            <div>
              <h3 class="headline">AutoCad</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">pročitajte više</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <br><br><br><br>

    <v-layout justify-space-around="" xs3 md3 lg3>
      <v-flex xs3>
        <v-card tile hover raised="">
          <v-card-media
            src="https://www.cadcam-group.eu/imager/300x200/upload/products2/catia_logo_blue_backgroung_4H558bJBqk.png"
            height="350px"
          ></v-card-media>

          <v-card-title primary-title>
            <div>
              <h3 class="headline">Catia</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">pročitajte više</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs3>
        <v-card hover>
          <v-card-media
            src="https://5.imimg.com/data5/IF/VY/GLADMIN-6873332/autodesk-3ds-max-500x500.jpg"
            height="350px"
          ></v-card-media>

          <v-card-title primary-title>
            <div>
              <h3 class="headline">AutoDesk 3DS Max</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">pročitajte više</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <br><br><br><br>

    <v-layout justify-space-around="" xs3 md3 lg3>
      <v-flex xs3>
        <v-card tile hover raised="">
          <v-card-media
            src="https://udemy-images.udemy.com/course/750x422/394968_538b_7.jpg"
            height="350px"
          ></v-card-media>

          <v-card-title primary-title>
            <div>
              <h3 class="headline">Digitalna Fotografija</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">pročitajte više</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs3>
        <v-card hover>
          <v-card-media
            src="https://estore.pembrokeshire.ac.uk/college/wp-content/uploads/sites/10/2017/06/Photoshop.jpg"
            height="350px"
          ></v-card-media>

          <v-card-title primary-title>
            <div>
              <h3 class="headline">Adobe Photoshop Za Fotografe</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">pročitajte više</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs3>
        <v-card hover>
          <v-card-media
            src="https://cdn3.techadvisor.co.uk/cmsdata/slideshow/3635899/kids-coding_thumb800.jpg"
            height="350px"
          ></v-card-media>

          <v-card-title primary-title>
            <div>
              <h3 class="headline">Programiranje Za Djecu</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">pročitajte više</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>


     <v-footer color="white" flat app>
       <span class="black--text">&copy; 2018</span>
     </v-footer>
   </v-app>
</template>

<style>
  #MainMenu{
    margin-left: 55px;
  }

  #PodNaslov{
    text-align: center;
    text-transform: uppercase;
  }

  #SLova{
    color: white;
    float: right;
  }

  #Card1{
    text-decoration: underline;
    font-size: 15px;
  }

  #Paralax{
    width: 100%;

  }



  #Naslov1{
    text-align: center;
    font-family: monospace;
    font-style: normal;
    font-size: 15px;
  }

  #Naslov2{
    text-align: center;
    font-size: 50px;
    font-family: monospace;
  }

  #Naslov3{
    text-align: center;
    font-size: 30px;
  }

  #Naslov4{
    text-align: center;
    font-family: monospace;
    font-style: normal;
    font-size: 30px;
    text-transform: uppercase;
    color: black;
  }

</style>




<script>
export default {
 data: () => ({
   drawer: null,
   cards: [
        { title: 'Iskusni Predavači', src: 'https://cdn.lynda.com/course/83603/83603-636216266356158373-16x9.jpg', flex: 3},
        { title: 'Kvalitetna nastava', src: 'http://www.onlinecollegecourses.com/wp-content/uploads/2012/08/50codeonline1.jpg', flex: 3 },
        { title: 'Priznati Certifikati', src: 'http://www.cinematicwaves.com/uploads/2/1/0/1/21017922/programi_orig.jpg', flex:  3},
        { title: 'Najnovija Literatura', src: 'https://elgarblog.files.wordpress.com/2014/01/education-books.jpg', flex:  3}
      ]
 })
}
</script>
