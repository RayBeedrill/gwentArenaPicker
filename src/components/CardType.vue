<template>
  <div>
    <card v-bind:card-info="value" v-bind:key="key" v-for="(value, key) in cardsList[cardsType]"></card>
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

