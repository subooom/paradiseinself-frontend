<template>
  <div class="line"
        :style="
          '--height: '+height+';'
          +' --length:' +length+ ';'
          +' --background:'+background"></div>
</template>

<script>
export default {
  name: 'ParaLine',
  props: {
    height: {
      type: String,
      default: '3px',
    },
    length: {
      type: String,
      default: '25px',
    },
    background: {
      type: String,
      default: 'black',
    },
  },

};
</script>

<style lang="stylus" scoped>
.line
  height var(--height)
  margin-right 10px
  width var(--length)
  background var(--background)
</style>
