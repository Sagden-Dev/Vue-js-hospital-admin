import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    humans:[],
    bId:'',
    patients:[]
  },
  getters:{
    getH(state){
      return state.humans
    },
    getById(state){
      return id => {
        console.log(id)
        state.bId = id
      }
    },
    getHuman(state){
      return state.humans.find(f => {
        if (f.id == state.bId) 
          return f
      })
    },
    getHp(state){
      return state.patients
    },
    getByIdp(state){
      return id => {
        console.log(id)
        state.bId = id
      }
    },
    getHumanp(state){
      return state.patients.find(f => {
        if (f.id == state.bId) 
          return f
      })
    },
    getCount(state){
      return state.humans.length
    },
    getNum(state){
      return state.patients.length
    }
  },
  mutations: {
    addH(state,payload){
      state.humans.push(payload)
    },
    newH(state,payload){
      return state.humans.push(payload)
    },
    getD(state,payload){
      return state.humans=payload
    },
    remH(state,payload){
      state.humans.splice(state.humans.findIndex(f=>{
        return f.id===payload
      }),1)
    },
    editH(state,payload){
      state.humans.find(h=>{
        if(h.id==payload){
          console.log(payload);
          console.log(h);
          h = state.humans[payload]
        }
      })
    },
    addHp(state,payload){
      state.patients.push(payload)
    },
    newHp(state,payload){
      return state.patients.push(payload)
    },
    getDp(state,payload){
      return state.patients=payload
    },
    remHp(state,payload){
      state.patients.splice(state.patients.findIndex(f=>{
        return f.id===payload
      }),1)
    },
    editHp(state,payload){
      state.patients.find(h=>{
        if(h.id==payload){
          console.log(payload);
          console.log(h);
          h = state.patients[payload]
        }
      })
    }
  },
  actions: {
    saveB(context,newOne){
      axios.post('http://localhost:3000/doctors',newOne).then(response =>{
        context.commit('newH',response.data)
      })
    },
    getB(context){
      axios.get('http://localhost:3000/doctors').then(response=>{
        context.commit('getD',response.data)
      })
    },
    delH(context,id){
      axios.delete('http://localhost:3000/doctors/'+id).then(response=>{
        console.log(response);
        context.commit('remH',id)
      })
    },
    saveBp(context,newOne){
      axios.post('http://localhost:3000/patients',newOne).then(response =>{
        context.commit('newHp',response.data)
      })
    },
    getBp(context){
      axios.get('http://localhost:3000/patients').then(response=>{
        context.commit('getDp',response.data)
      })
    },
    delHp(context,id){
      axios.delete('http://localhost:3000/patients/'+id).then(response=>{
        console.log(response);
        context.commit('remHp',id)
      })
    }
  },
  modules: {
  }
})
