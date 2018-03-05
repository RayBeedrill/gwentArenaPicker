<template>
  <div class="colums">
    <h3>{{ msg }}</h3>
    <button class="card-types button is-primary is-rounded" v-bind:key="key" v-for="(val, key) in types" v-on:click="cardsType=val">{{ val }}</button>
    <card-type v-bind:card-type="cardsType" v-bind:card-list="dataObj"></card-type>
  </div>
</template>

<script>
import cards from './../assets/json/AllCardsImg.json'
import CardType from './CardType'
export default {
  data () {
    return {
      msg: 'All Cards',
      dataObj: cards,
      types:'',
      cardsType:''
    }
  },
  components: {
    CardType
  },

  created () {
    this.types = Object.keys(this.dataObj)
    this.cardsType = this.types[0]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-types {
  margin: 15px;
}
</style>
