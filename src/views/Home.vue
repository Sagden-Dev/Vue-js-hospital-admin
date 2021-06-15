<template>
  <div>
    <v-container class="pt-10">
      <v-row class="mb-14 ml-1" style="justify-content:space-between">
        <v-col md="2" class="mr-10 pa-3" style="background-color:#fff">
          <v-row>
            <v-col md="4">
              <img src="../assets/img/bag.png" alt="">
            </v-col>
            <v-col md="8">
              Hodimlar <br>
              <span style="color:blue">{{staff}}</span>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="2" class="mr-10 pa-3" style="background-color:#fff">
          <v-row>
            <v-col md="4">
              <img src="../assets/img/patient.png" alt="">
            </v-col>
            <v-col md="8">
              Bemorlar <br>
              <span style="color:blue">{{patient}}</span>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="2" class="mr-10 pa-3" style="background-color:#fff">
          <v-row>
            <v-col md="4">
              <img src="../assets/img/room.png" alt="">
            </v-col>
            <v-col md="8">
              Xonalar <br>
              <span style="color:blue">216</span>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="2" class="pa-3" style="background-color:#fff">
          <v-row>
            <v-col md="4">
              <img src="../assets/img/cash.png" alt="">
            </v-col>
            <v-col md="8">
              Byudjet <br>
              <span style="color:blue">216</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-simple-table class="mb-15">
        <template v-slot:default>
          <thead>
            <tr>
              <th>
                <h3 class="mb-2" style="font-size:40px">Shifokorlar</h3>
              </th>
            </tr>
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

                  <v-button @click="view(human.id)" class="mr-5"><img src="../assets/img/eye.png" alt=""></v-button>
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
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>
                <h1 class="mb-2" style="font-size:40px">Bemorlar</h1>
              </th>
            </tr>
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

                  <v-button @click="viewP(p.id)" class="mr-5"><img src="../assets/img/eye.png" alt=""></v-button>
                </router-link>
                <v-button @click="editP(p.id)" class="mr-5"><img src="../assets/img/pen.png" alt=""></v-button>
                <v-button class="" @click="delP(p.id)">
                  <img src="../assets/img/trash.png" alt="">
                </v-button>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        Pitems: ['1', '2', '3'],
        p: {},
        items: ['Psixologiya', 'Terapiya'],
        human: {},
        dialog: false,
        dialog1: false,
        dialog2: false,
        dialog3: false
      }
    },
    methods: {
      openP() {
        this.$store.dispatch('saveBp', this.p)
        this.dialog = false
        this.dialog1 = false
        this.dialog2 = false
        this.dialog3 = false
      },
      view(id) {
        this.$store.getters.getById(id)
      },
      viewP(id) {
        this.$store.getters.getByIdp(id)
      },
      del(id) {
        this.$store.dispatch('delH', id)

      },
      delP(id) {
        this.$store.dispatch('delHp', id)

      },
      edit(h) {

        this.isBtn = !this.isBtn
        this.dialog1 = true
        this.human = h
      },
      editP(id) {
        this.$store.commit('editHp', id)
        this.dialog1 = true
      }
    },
    created() {
      this.$store.dispatch('getBp')
      this.$store.dispatch('getB')
    },
    computed: {
      patients() {
        return this.$store.getters.getHp
      },
      humans() {
        return this.$store.getters.getH
      },
      staff(){
        return this.$store.getters.getCount
      },
      patient(){
        return this.$store.getters.getNum
      }
    }
  }
</script>