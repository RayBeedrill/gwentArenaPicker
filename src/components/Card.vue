<template>
  <div :class="styleClass" class="gwent-card column is-one-fifth">
    <img :src="cardInfo.link" :alt="cardInfo.name.split('+').join(' ')">
    <p>Name: {{cardInfo.name.split('+').join(' ')}}</p>
    <p>Score: {{cardInfo.score}}</p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      score: Number(this.cardInfo.score),
      styleClass:''
    }
  },
  props: ['cardInfo'],
  created() {
    this.checkScore()
  },
  methods:{
    checkScore() {
      var lib = {
        10: 'button is-success',
        9: 'button is-success',
        8: 'button is-success',
        7: 'button is-warning',
        6: 'button is-warning',
        5: 'button is-warning',
        4: 'button is-danger',
        3: 'button is-danger',
        2: 'button is-danger',
        1: 'button is-danger',
      }
      this.styleClass = lib[this.score]
    }
  }
}
</script>
<style scoped>
.gwent-card {
  min-height: 483px;
}
</style>
