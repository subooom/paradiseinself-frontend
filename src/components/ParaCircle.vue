<template>
      <div
        class="circle-container"
        :style="
          '--size: '+size+';'
          +' --color:' +color+ ';'
          +' --opacity:' +opacity+ ';'
          +' --background:'+background"
      >
        <div class="inner-circle">

        </div>
      </div>
</template>

<script>
export default {
  name: 'ParaCircle',
  props: {
    size: {
      type: String,
      default: '20px',
    },
    color: {
      type: String,
      default: 'black',
    },
    opacity: {
      type: String,
      default: '100%',
    },
    background: {
      type: String,
      default: 'white',
    },
  },
};

</script>

<style scoped lang="stylus">
flex-center()
  display flex
  align-items center
  justify-content center

.circle-container
  margin 1px
  opacity var(--opacity)
  background var(--color)
  width var(--size)
  height var(--size)
  clip-path  circle(50% at 50% 50%)
  border-radius 50%
  flex-center()

.inner-circle
  width 60%
  height 60%
  border-radius 50%
  clip-path  circle(50% at 50% 50%)
  background var(--background)


</style>
