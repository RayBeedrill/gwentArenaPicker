<template>
  <div class="columns is-multiline">
    <card v-if="cardType == 'bronse'" v-bind:card-info="value" v-bind:key="key" v-for="(value, key) in cardsList['bronse']"></card>
    <card v-if="cardType == 'silver'" v-bind:card-info="value" v-bind:key="key" v-for="(value, key) in cardsList['silver']"></card>
    <card v-if="cardType == 'gold'" v-bind:card-info="value" v-bind:key="key" v-for="(value, key) in cardsList['gold']"></card>
    <card v-if="cardType == 'leader'" v-bind:card-info="value" v-bind:key="key" v-for="(value, key) in cardsList['leader']"></card>
  </div>
</template>

<script>
import Card from './Card'
export default {
  data () {
    return {
      cardsType: this.cardType,
      cardsList: this.cardList
    }
  },
  props: ['cardType', 'cardList'],
  components:{
    Card
  }
}
</script>

