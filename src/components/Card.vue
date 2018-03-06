<template>
  <div class="gwent-card column is-one-fifth">
    <img :src="image" :alt="cardInfo.name.split('+').join(' ')">
    <div :class="styleClass">
      <p>Name: {{cardInfo.name.split('+').join(' ')}}</p>
      <p>Score: {{score}}</p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      styleClass:'',
      lib: {
        10: 'score-border-success',
        9: 'score-border-success',
        8: 'score-border-success',
        7: 'score-border-warning',
        6: 'score-border-warning',
        5: 'score-border-warning',
        4: 'score-border-danger',
        3: 'score-border-danger',
        2: 'score-border-danger',
        1: 'score-border-danger'
      }
    }
  },
  props: ['cardInfo'],
  created() {
    this.checkScore()
  },
  methods:{
    checkScore() {
      this.styleClass = this.lib[this.score]
    }
  },
  computed: {
    score() {
      return Number(this.cardInfo.score)
    },
    image() {
      return 'static/images/' + this.cardInfo.link
    }
  }
}
</script>
<style scoped>
.gwent-card {
  min-height: 483px;
}
.gwent-card img {
  width:233px;
  height: 312px;
}
.score-border-success {
  border-bottom: 3px solid #23d160;
}
.score-border-warning {
  border-bottom: 3px solid #ffdd57;
}
.score-border-danger {
  border-bottom: 3px solid #ff3860;
}
</style>
