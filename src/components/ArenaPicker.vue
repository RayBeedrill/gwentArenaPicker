<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
     <button class="card-types button is-primary is-rounded" v-bind:key="key" v-for="(val, key) in types" v-on:click="changeType(val)">{{ val }}</button>
      <div class="columns is-centered is-multiline">
      <card
        v-if="oneCard.name == pick1"
        v-bind:key="key"
        v-bind:card-info="oneCard"
        v-for="(oneCard, key) in dataObj[cardsType]">
      </card>
      <card
        v-if="oneCard.name == pick2"
        v-bind:key="key"
        v-bind:card-info="oneCard"
        v-for="(oneCard, key) in dataObj[cardsType]">
      </card>
      <card
        v-if="oneCard.name == pick3"
        v-bind:key="key"
        v-bind:card-info="oneCard"
        v-for="(oneCard, key) in dataObj[cardsType]">
      </card>
      <card
        v-if="oneCard.name == pick4 && cardsType != 'leader'"
        v-bind:key="key"
        v-bind:card-info="oneCard"
        v-for="(oneCard, key) in dataObj[cardsType]">
      </card>
     </div>
     <div>
     <div class="select">
      <select v-model="pick1">
        <option :value="card.name" v-bind:key="key" v-for="(card, key) in dataObj[cardsType]">{{ card.name.split('+').join(' ') }}</option>
      </select>
     </div>
     <div class="select">
      <select v-model="pick2">
        <option :value="card.name" v-bind:key="key" v-for="(card, key) in dataObj[cardsType]">{{ card.name.split('+').join(' ') }}</option>
      </select>
     </div>
     <div class="select">
      <select v-model="pick3">
        <option :value="card.name" v-bind:key="key" v-for="(card, key) in dataObj[cardsType]">{{ card.name.split('+').join(' ') }}</option>
      </select>
     </div>
     <div class="select">
      <select v-if="cardsType != 'leader'" v-model="pick4">
        <option :value="card.name" v-bind:key="key" v-for="(card, key) in dataObj[cardsType]">{{ card.name.split('+').join(' ') }}</option>
      </select>
     </div>
     </div>
  </div>
</template>

<script>
import cards from './../assets/json/AllCardsImg.json'
import Card from './Card'
export default {
  data () {
    return {
      msg: 'Arena Picker',
      dataObj: cards,
      types:'',
      cardsType:'',
      pick1:'',
      pick2:'',
      pick3:'',
      pick4:'',
    }
  },
  components:{
    Card
  },
  created() {
    this.types = Object.keys(this.dataObj)
    this.cardsType = this.types[0]
    this.setDefaultPicks()
  },
  methods:{
    changeType(type) {
      this.cardsType = type
      this.setDefaultPicks()
    },
    setDefaultPicks() {
      this.pick1 = this.dataObj[this.cardsType][0].name
      this.pick2 = this.dataObj[this.cardsType][1].name
      this.pick3 = this.dataObj[this.cardsType][2].name
      this.pick4 = this.dataObj[this.cardsType][3].name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-types {
  margin: 15px;
}
</style>
