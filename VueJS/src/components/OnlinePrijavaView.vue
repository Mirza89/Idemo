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

      <v-parallax src="https://wallpapersite.com/images/wallpapers/geometric-3840x2160-material-design-stock-blue-hd-10122.jpg" height="300" id="Paralax">
      <h4 id="Naslov1">ON-LINE PRIJAVA</h4>
    </v-parallax>
    <br><br><br><br><br>

      <p id="ContentNaslov">Ovdje se možete prijaviti na neki od naših kurseva. Popunite podate podatke i odaberite na koji se kurs prijavljujete.</p>
      <br>
      <p id="ContentNaslov1">Molimo Vas da popunite istinite podatke.</p>
      <br>
      <p id="ContentNaslov2">Odgovorićemo Vam u najkraćem roku.</p>

      <br><br><br>
      <v-cv-container id="ImeiPrezime">
      <form id="FormaPrijave">
     <v-text-field
       v-validate="'required|max:30'"
       v-model="model.name"
       :counter="30"
       :error-messages="errors.collect('name')"
       label="Name"
       data-vv-name="name"
       required
       outline
       id="ImeIprezime"
       hint="Please enter your First and Last name"
     ></v-text-field>

     <v-text-field
       v-validate="'required|max:21'"
       v-model="model.BrojTelefona"
       :counter="21"
       :error-messages="errors.collect('BrojTelefona')"
       label="Phone Number"
       data-vv-name="BrojTelefona"
       required
       outline
       hint="Please enter you phone number"
     ></v-text-field>

     <v-text-field
       v-validate="'required|email'"
       v-model="model.email"
       :error-messages="errors.collect('email')"
       label="E-mail"
       :counter="20"
       data-vv-name="email"
       outline
       required
       hint="Enter you valid email address"
     ></v-text-field>


     <v-text-field
       v-validate="'required|max:30'"
       v-model="model.AdresaStanovanja"
       :counter="30"
       :error-messages="errors.collect('AdresaStanovanja')"
       label="Address"
       data-vv-name="AdresaStanovanja"
       required
       outline
       hint="Enter you valid home address"
     ></v-text-field>

     <v-select
       v-validate="'required'"
       :items="items"
       v-model="model.SelectedValue"
       :error-messages="errors.collect('select')"
       label="Select a Course"
       data-vv-name="select"
       required
       outline
       hint="Select a course"
       open-on-hover
     ></v-select>


     <v-checkbox
       v-validate="'required'"
       v-model="checkbox"
       :error-messages="errors.collect('checkbox')"
       value="1"
       label="Click here to proceed"
       data-vv-name="checkbox"
       type="checkbox"
       required
     ></v-checkbox>



     <v-layout row justify-center>
     <v-dialog v-model="dialog" persistent max-width="570px">
       <v-btn slot="activator" color="green" @click="PrikazUdialogu()">Pošalji</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Are you sure you want to send this information ???</span>
        </v-card-title>
        <v-container id="DialogContainer">
          <v-cardv-card-text>
            <v-fv-flex>
              <v-card-text id="DialogKonfirmacije">Is this the name you have entered ?<p id="Boja">{{ model.name }}</p></v-card-text>
            </v-fv-flex>
          </v-cardv-card-text>
          <v-cardv-card-text>
            <v-fv-flex>
              <v-card-text id="DialogKonfirmacije">Is this the email you have entered ?<p id="Boja">{{ model.email }}</p></v-card-text>
            </v-fv-flex>
          </v-cardv-card-text>
          <v-cardv-card-text>
            <v-fv-flex>
              <v-card-text id="DialogKonfirmacije">Is this the phone number you have entered ?<p id="Boja">{{ model.BrojTelefona }}</p></v-card-text>
            </v-fv-flex>
          </v-cardv-card-text>
          <v-cardv-card-text>
            <v-fv-flex>
              <v-card-text id="DialogKonfirmacije">Is this the Address you have entered ?<p id="Boja">{{ model.AdresaStanovanja }}</p></v-card-text>
            </v-fv-flex>
          </v-cardv-card-text>
          <v-cardv-card-text>
            <v-fv-flex>
              <v-card-text id="DialogKonfirmacije">Is this the course you have Selected ?<p id="Boja">{{ model.SelectedValue }}</p></v-card-text>
            </v-fv-flex>
          </v-cardv-card-text>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
     </v-dialog>
     <v-btn color="yellow" @click="clear">Reset polja</v-btn>
     </v-layout>

 </form>
</v-cv-container>
     <v-footer color="white" flat app>
       <span class="black--text">&copy; 2018</span>
     </v-footer>
   </v-app>
</template>

<style>
  #MainMenu{
    margin-left: 55px;
  }

  #Card1{
    text-decoration: underline;
    font-size: 15px;
  }

  #DialogContainer{
    text-align: center;
  }

  #Boja{
    color: red;
  }

  #Paralax{
    width: 100%;
  }

  #ContentNaslov{
    text-align: center;
    font-size: 18px;
  }

  #ContentNaslov1{
    text-align: center;
    font-size: 18px;
  }

  #ContentNaslov2{
    text-align: center;
    font-size: 18px;
  }

  #Naslov1{
    text-align: center;
    font-family: monospace;
    font-style: normal;
    font-size: 30px;
  }

  #FormaPrijave{
    text-align: center;
  }

  #ImeiPrezime{
    width: 600px;
    margin: auto;
  }

</style>




<script>
export default {
  $_veeValidate: {
     validator: 'new'
   },
 data: () => {
   return {
     model: {
       name: "",
       email:"",
       AdresaStanovanja:"",
       BrojTelefona:"",
       SelectedValue:[]
     },
     drawer: null,
     dialog: false,
     cards: [
          { title: 'Iskusni Predavači', src: 'https://cdn.lynda.com/course/83603/83603-636216266356158373-16x9.jpg', flex: 3},
          { title: 'Kvalitetna nastava', src: 'http://www.onlinecollegecourses.com/wp-content/uploads/2012/08/50codeonline1.jpg', flex: 3 },
          { title: 'Priznati Certifikati', src: 'http://www.cinematicwaves.com/uploads/2/1/0/1/21017922/programi_orig.jpg', flex:  3},
          { title: 'Najnovija Literatura', src: 'https://elgarblog.files.wordpress.com/2014/01/education-books.jpg', flex:  3}
        ],
        name: '',
      email: '',
      select: null,
      items: [
        'Sa JAVOM na ti',
        'Programiranje za djecu',
        'Android programiranje',
        'Catia',
        'AutoCAD',
        'Autodesk 3DS Max',
        'Digitalna Fotografija',
        'Adobe Photoshop za fotografe',
        'Njemački jezik',
        'Engleski jezik',
        'Web dizajn - Wordpress',
        'HTML, CSS, BOOTSTRAP',
        'Grafički dizajn',
        'Napredni Excel',
        'Kurs Informatike',
        'Profesionalna orjentacija',
        'Video produkcija',
        'Kako se zaposliti na turističkom kruzeru',
        'Soft skills',
        'Besplatno savjetovanje iz oblasti javnog zdravstva'
      ],
      checkbox: null,
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Ovo polje ne moze biti prazno',
          },
          email: {
            required: () => 'Unesite validnu email adresu'
          },
          BrojTelefona: {
            required: () => 'Broj telefona ne moze biti prazan'
          },
          AdresaStanovanja: {
            required: () => 'Unesite adresu stanovanja'

          },
          checkbox: {
            required: () => 'Niste oznacili checkbox'

          },
          select: {
            required: 'Odaberite jedan kurs'
          }
        }
      }
   }
 },
  mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.AdresaStanovanja= ''
        this.BrojTelefona = ''
        this.$validator.reset()
      },
      PrikazUdialogu(){

      }
    }
  }
</script>
