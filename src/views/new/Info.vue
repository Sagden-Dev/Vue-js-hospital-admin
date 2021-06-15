<template>
  <div>
    <v-container>
      <v-row class="p-0" style="background-color:#fff;border-bottom:1px solid silver">
        <v-col md="2" class="pa-0">
          <img style="height:216px" src="../../assets/img/doctor.png" alt="">
        </v-col>
        <v-col md="3" class="pl-8 pt-2">
          <h2 class="mb-4">{{human.name}}</h2>
          <v-row>
            <v-col class="txt" md="6">Mutaxassisligi</v-col>
            <v-col md="6" class="title">{{human.spec}}</v-col>
          </v-row>
          <v-row class="mt-3 mb-3">
            <v-col class="txt" md="6">Ishlayotgan bo`lim</v-col>
            <v-col md="6" class="title">{{human.depart}}</v-col>
          </v-row>
          <v-row>
            <v-col class="txt" md="6">Ish staji</v-col>
            <v-col md="6" class="title">{{human.exp}}</v-col>
          </v-row>
        </v-col>
        <v-col md="3" class="pt-12 ml-5">
          <v-row class="mt-3 mb-3">
            <v-col class="txt" md="6">Ishga kirgan sana</v-col>
            <v-col md="6" class="title">{{human.begin}}</v-col>
          </v-row>
          <v-row>
            <v-col class="txt" md="6">Ish grafigi</v-col>
            <v-col md="6" class="title">{{human.graph}}</v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row style="background-color:#fff" class="pa-4">
        <v-col md="4" class="pl-8 pt-6">
          <h3>Shaxsiy ma`lumotlar</h3><br>
          <v-row>
            <v-col class="txt" md="4">Tug'ilgan sa`nasi</v-col>
            <v-col md="6" class="title">{{human.date}}</v-col>
          </v-row>
          <v-row class="mt-3 mb-3">
            <v-col class="txt" md="4">Tug`ilgan hudud</v-col>
            <v-col md="6" class="title">{{human.dest}}</v-col>
          </v-row>
          <v-row>
            <v-col class="txt" md="4">Manzil</v-col>
            <v-col md="6" class="title">{{human.dest}}</v-col>
          </v-row>
        </v-col>
        <v-col md="4" class="pt-12 ml-5">
          <v-row class="mt-3 mb-3">
            <v-col class="txt" md="4">Ishga kirgan sana</v-col>
            <v-col md="6" class="title">{{human.begin}}</v-col>
          </v-row>
          <v-row>
            <v-col class="txt" md="4">Ish grafigi</v-col>
            <v-col md="6" class="title">{{human.graph}}</v-col>
          </v-row>
        </v-col>
        <v-col md="3" class="pt-12 ml-5">
          <v-row class="mt-3 mb-3">
            <v-col class="txt" md="4">Ishga kirgan sana</v-col>
            <v-col md="6" class="title">{{human.begin}}</v-col>
          </v-row>
          <v-row>
            <v-col class="txt" md="4">Ish grafigi</v-col>
            <v-col md="6" class="title">{{human.graph}}</v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="mt-6 pa-8" style="background-color:#fff">
        <v-row style="justify-content:space-between" class="mb-4">

          <h3 class="mb-4">Mehnat faoloiyati</h3>
          <button class="mr-4" style="background-color:#336CFB;width:141px;height:26px;border-radius:40px;color:#fff;font-size:11px">
            <img src="../../assets/img/plus.png" alt="">
            Yangi ish tarixi
          </button>
        </v-row>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr style="background-color:#E8E8E8">
                <th class="text-left">
                  Muassasa nomi
                </th>
                <th class="text-left">
                  Ish faoliytai muddati
                </th>
                <th class="text-left">
                  Lavozimi
                </th>
                <th class="text-left">
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {{human.former}}
                </td>
                <td>
                  {{human.start}} dan {{human.finish}} gacha
                </td>
                <td>
                  {{human.rank}}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </v-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        begin: ''
      }
    },
    computed: {
      human() {
        return this.$store.getters.getHuman
      }
    }
  }
</script>

<style>

</style>