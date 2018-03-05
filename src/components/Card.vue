<template>
  <div class="hello">
    <img :src="cardInfo.link">
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  props: ['cardInfo']
}
</script>
