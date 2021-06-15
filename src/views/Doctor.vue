<template>
  <div class="pa-10 pt-5">
    <h1 class="mb-6" style="font-size:40px">Shifokorlar</h1>
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
              Qabul vaqti
            </th>
            <th class="text-left">
              Mutaxassisligi
            </th>
            <th class="text-left">
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="human of humans" :key="human.id">
            <td>{{human.name}}</td>
            <td>{{human.email}}</td>
            <td>{{human.date}}</td>
            <td>{{human.graph}}</td>
            <td>{{human.spec}}</td>
            <td>
              <router-link :to="'/doctor/'+human.id">
              
                <v-button @click="view(human.id)" class="mr-5" ><img src="../assets/img/eye.png" alt=""></v-button>
              </router-link>
              <v-button @click="edit(human)" class="mr-5"><img src="../assets/img/pen.png" alt=""></v-button>
              <v-button class="" @click="del(human.id)">
                <img src="../assets/img/trash.png" alt="">
              </v-button>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-dialog v-model="dialog2" max-width="800px" class="pa-4">
      <v-card class="pa-5">
        <v-card-title>
          <h2 class="ma-auto">Yangi shifokorni ro`yhatdan o`tkazish</h2>
        </v-card-title>
        <div style="background-color:#56CCF2;width:30px;height:30px;color:#fff;padding:4px 10px;border-radius:50%"
          class="ma-auto mt-4 mb-4">3</div>
        <h3 class="text-center">Ish faoliyat tarixi</h3>
        <v-row class="mb-5">
          <v-col md="12">
            <v-text-field solo placeholder="Ish boshlagan sa`nasi" v-model="human.url"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo placeholder="Ish boshlagan sa`nasi" v-model="human.start"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo v-model="human.finish" placeholder="Ishni tugatgan sa`na"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="human.rank" solo placeholder="Lavozim"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo placeholder="Olding ish joyi manzili" v-model="human.former"></v-text-field>
          </v-col>
          <v-col md="12">
            <v-text-field height="83px" solo placeholder="Qoshimcha ma`lumotlar" v-model="human.other"></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions class="ma-auto" style="width:300px">
          <v-btn style="height:32px;width:130px;color:#fff;font-size:10px" color="red" class="" @click="close()">Bekor qilish</v-btn>
          <v-btn style="height:32px;font-size:10px;width:130px;color:#fff" color="green" @click="open()">Tugatish</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" max-width="800px" class="pa-4">
      <v-card class="pa-5">
        <v-card-title>
          <h2 class="ma-auto">Yangi shifokorni ro`yhatdan o`tkazish</h2>
        </v-card-title>
        <div style="background-color:#56CCF2;width:30px;height:30px;color:#fff;padding:4px 10px;border-radius:50%"
          class="ma-auto mt-4 mb-4">2</div>
        <h3 class="text-center">Mutaxassislik ma`lumotlari</h3>
        <v-row class="mb-5">
          <v-col md="6">
            <v-select
            v-model="human.spec"
          :items="items"
          label="Mutaxassisligi"
          dense
          outlined
        ></v-select>
          </v-col>
          <v-col md="6">
            <v-text-field solo placeholder="Mutaxassisligi" v-model="human.begin"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo placeholder="Faoliyat bo`limi" v-model="human.depart"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo placeholder="Ish staji" v-model="human.exp"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="human.graph" solo placeholder="Ish grafigi"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field solo placeholder="Hafta kunidagi grafigi" v-model="human.week"></v-text-field>
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
            <v-text-field v-model="human.email" solo placeholder="Email manzilis"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="human.name" solo placeholder="Ism sha'rifi"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="human.date" solo placeholder="Tug`ilgan sana"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="human.place" solo placeholder="Tug`ilgan hudud"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="human.dest" solo placeholder="Manzil"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="human.stat" solo placeholder="Oylaviy holat"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="human.bach" solo placeholder="Ma`lumoti"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="human.num" solo placeholder="Telefon raqami"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field v-model="human.numb" solo placeholder="Oila a`zolaridan telefon raqami"></v-text-field>
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
        items:['Psixologiya','Terapiya'],
        human:{},
        dialog: false,
        dialog1: false,
        dialog2:false,
        next:true
      }
    },
    methods: {
      open(){
        this.$store.dispatch('saveB',this.human)
        this.dialog=false
        this.dialog1=false
        this.dialog2=false
      },
      close() {
        this.dialog=false
        this.dialog1=false
        this.dialog2=false
      }, 
      view(id){
        this.$store.getters.getById(id)
      },
      del(id){
        this.$store.dispatch('delH',id)

      },
      edit(h){
        this.dialog1=true
        this.human = h
      },
    },
    created(){
      this.$store.dispatch('getB')
    },
    computed:{
      humans(){
        return this.$store.getters.getH
      }
    }
  }
</script>

<style>

</style>