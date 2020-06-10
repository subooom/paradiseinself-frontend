<template>
  <div class="rect-container"
        :style="
          '--height: '+height+';'
          +' --length:' +length+ ';'
          +' --color:' +color+ ';'
          +' --background:'+background">
          <div class="inner-rect">
          </div>
  </div>
</template>

<script>
export default {
  name: 'ParaRectangle',
  props: {
    height: {
      type: String,
      default: '3px',
    },
    length: {
      type: String,
      default: '25px',
    },
    color: {
      type: String,
      default: 'white',
    },
    background: {
      type: String,
      default: 'black',
    },
  },

};
</script>

<style lang="stylus" scoped>
.rect-container
  height var(--height)
  margin-right 10px
  width var(--length)
  background var(--color)
  display flex
  align-items center
  justify-content center

.inner-rect
  background var(--background)
  width: 90%;
  height: 70%;

</style>
