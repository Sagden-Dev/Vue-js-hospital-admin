<template>
  <div class="pa-10 pt-5">
    <h1 class="mb-6" style="font-size:40px">Bemorlar</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr style="background-color:#E8E8E8">
            <th class="text-left">
              Ism sha`rifi
            </th>
            <th class="text-left">
              Email manzili
            </th>
            <th class="text-left">
              Sana 
            </th>
            <th class="text-left">
              Ma`sul shaxs
            </th>
            <th class="text-left">
              Manzil
            </th>
            <th class="text-left">
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p of patients" :key="p.id">
            <td>{{p.name}}</td>
            <td>{{p.email}}</td>
            <td>{{p.date}}</td>
            <td>{{p.resName}}</td>
            <td>{{p.dest}}</td>
            <td>
              <router-link :to="'/patient/'+p.id">
              
                <v-button @click="view(p.id)" class="mr-5" ><img src="../assets/img/eye.png" alt=""></v-button>
              </router-link>
              <v-button @click="edit(p)" class="mr-5"><img src="../assets/img/pen.png" alt=""></v-button>
              <v-button class="" @click="del(p.id)">
                <img src="../assets/img/trash.png" alt="">
              </v-button>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-dialog v-model="dialog3" max-width="800px" class="pa-4">
      <v-card class="pa-5">
        <v-card-title>
          <h2 class="ma-auto">Yangi bemorni ro`yhatdan o`tkazish</h2>
        </v-card-title>
        <div style="background-color:#56CCF2;width:30px;height:30px;color:#fff;padding:4px 10px;border-radius:50%"
          class="ma-auto mt-4 mb-4">4</div>
        <h3 class="text-center">Kasallik tarixi</h3>
        <v-row class="mb-5">
          <v-col md="12">
            <v-text-field solo placeholder="Davolanish sa`nasi" v-model="p.cure"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo placeholder="Kasallik turi" v-model="p.type"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo v-model="p.resName" placeholder="Shifokor ism-sha`rifi"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="p.adress" solo placeholder="Davolangan shifoxona manzili"></v-text-field>
          </v-col>
          <v-col md="12">
            <v-text-field height="83px" solo placeholder="Diagnoz" v-model="p.anal"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo placeholder="Rasm url" v-model="p.url"></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions class="ma-auto" style="width:300px">
          <v-btn style="height:32px;width:130px;color:#fff;font-size:10px" color="red" class="" @click="close()">Bekor qilish</v-btn>
          <v-btn style="height:32px;font-size:10px;width:130px;color:#fff" color="green" @click="open()">Tugatish</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" max-width="800px" class="pa-4">
      <v-card class="pa-5">
        <v-card-title>
          <h2 class="ma-auto">Yangi bemorni ro`yhatdan o`tkazish</h2>
        </v-card-title>
        <div style="background-color:#56CCF2;width:30px;height:30px;color:#fff;padding:4px 10px;border-radius:50%"
          class="ma-auto mt-4 mb-4">3</div>
        <h3 class="text-center">Tashrif ma`lumotlari</h3>
        <v-row class="mb-5">
          <v-col md="12">
            <v-text-field solo placeholder="Tashrif  sa`nasi" v-model="p.dateV"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo placeholder="Chiqish sa`nasi" v-model="p.out"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo v-model="p.depart" placeholder="Davolangan bo`lim"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="p.w" solo placeholder="Vazni"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo placeholder="Boyi" v-model="p.h"></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions class="ma-auto" style="width:300px">
          <v-btn style="height:32px;width:130px;color:#fff;font-size:10px" color="red" class="" @click="close()">Bekor qilish</v-btn>
          <v-btn style="height:32px;font-size:10px;width:130px;color:#fff" color="green" @click="dialog3=true">Keyingi bo`lim</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" max-width="800px" class="pa-4">
      <v-card class="pa-5">
        <v-card-title>
          <h2 class="ma-auto">Yangi bemorni ro`yhatdan o`tkazish</h2>
        </v-card-title>
        <div style="background-color:#56CCF2;width:30px;height:30px;color:#fff;padding:4px 10px;border-radius:50%"
          class="ma-auto mt-4 mb-4">2</div>
        <h3 class="text-center">Tibbiy ma`lumotlari</h3>
        <v-row class="mb-5">
          <v-col md="6">
            <v-select
            v-model="p.group"
          :items="items"
          label="Qon guruhi"
          dense
          outlined
        ></v-select>
          </v-col>
          <v-col md="6">
            <v-text-field solo placeholder="Sug`urta firmasi" v-model="p.ins"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo placeholder="Allergiya reaksiyasi" v-model="p.reac"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo placeholder="Qon bosimi" v-model="p.press"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="p.imt" solo placeholder="Imtiyozlari"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo placeholder="Sug`urta muddati" v-model="p.per"></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions class="ma-auto" style="width:300px">
          <v-btn style="height:32px;width:130px;color:#fff;font-size:10px" color="red" class="" @click="close">Bekor qilish</v-btn>
          <v-btn style="height:32px;font-size:10px;width:130px;color:#fff" color="green" @click="dialog2 = !dialog2">Keyingi bo`lim</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog1" max-width="800px" class="pa-4">
      <template v-slot:activator="{ on, attrs }">
        <v-btn style="bottom:24px;right:24px" fixed color="primary" dark fab large v-bind="attrs" v-on="on">
          <img src="../assets/img/adder.png" alt="">
        </v-btn>
      </template>
      <v-card class="pa-5">
        <v-card-title>
          <h2 class="ma-auto">Yangi shifokorni ro`yhatdan o`tkazish</h2>
        </v-card-title>
        <div style="background-color:#56CCF2;width:30px;height:30px;color:#fff;padding:4px 10px;border-radius:50%"
          class="ma-auto mt-4 mb-4">1</div>
        <h3 class="text-center">Shaxsiy ma`lumotlar</h3>
        <v-row class="mb-5">
          <v-col md="12">
            <v-text-field v-model="p.email" solo placeholder="Email manzilis"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="p.name" solo placeholder="Ism sha'rifi"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="p.date" solo placeholder="Tug`ilgan sana"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="p.place" solo placeholder="Tug`ilgan hudud"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="p.dest" solo placeholder="Manzil"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="p.stat" solo placeholder="Oylaviy holat"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="p.busy" solo placeholder="Bandlik holati"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="p.bach" solo placeholder="Ma`lumoti"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="p.num" solo placeholder="Telefon raqami"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="p.numb" solo placeholder="Oila a`zolaridan telefon raqami"></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions class="ma-auto" style="width:300px">
          <v-btn style="height:32px;width:130px;color:#fff;font-size:10px" color="red" class="" @click="close">Bekor qilish</v-btn>
          <v-btn style="height:32px;font-size:10px;width:130px;color:#fff" color="green" @click="dialog=!dialog,dialog1=!dialog1">Keyingi bo`lim</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items:['1','2','3'],
        p:{},
        dialog: false,
        dialog1: false,
        dialog2:false,
        dialog3:false
      }
    },
    methods: {
      open(){
        this.$store.dispatch('saveBp',this.p)
        this.dialog=false
        this.dialog1=false
        this.dialog2=false
        this.dialog3=false
      },
      close() {
        this.dialog=false
        this.dialog1=false
        this.dialog2=false
        this.dialog3=false
      }, 
      view(id){
        this.$store.getters.getByIdp(id)
      },
      del(id){
        this.$store.dispatch('delHp',id)

      },
      edit(h){

        this.dialog1=true
        this.p = h
    
      }
    },
    created(){
      this.$store.dispatch('getBp')
    },
    computed:{
      patients(){
        return this.$store.getters.getHp
      }
    }
  }
</script>

<style>

</style>