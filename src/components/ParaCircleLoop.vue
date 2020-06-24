<template>
  <div class="circle-calmer">
    <ParaCircle
      class="calm-circle"
      :class="getClass()"
      v-for="c in circles"
      :key=c.size
      :size=c.size
      :background=c.background
      :color=c.color
      :opacity=c.opacity
    ></ParaCircle>
  </div>
</template>

<script>

import ParaCircle from './ParaCircle.vue';

export default {
  name: 'ParaCircleLoop',
  components: {
    ParaCircle,
  },
  props: {
    startLoop: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      circles: [
        {
          size: '25px',
          background: 'white',
          color: 'black',
          opacity: '100%',
        },
        {
          size: '45px',
          background: 'green',
          color: 'blue',
          opacity: '100%',
        },
        {
          size: '30px',
          background: 'red',
          color: 'white',
          opacity: '100%',
        },
        {
          size: '40px',
          background: 'orange',
          color: 'skyblue',
          opacity: '100%',
        },
        {
          size: '20px',
          background: 'maroon',
          color: 'lavender',
          opacity: '100%',
        },
      ],
    };
  },
  methods: {
    getClass() {
      return {
        'start-calmer': this.startLoop,
      };
    },
  },
};

</script>

<style lang="stylus" scoped>
  .circle-calmer
    position absolute
    right 50px
    top: 10px
    z-index 2
    display flex
    align-items: center;
    justify-content: flex-end;

  .calm-circle
    position absolute

  random()
    return math(math(0, 'random') * 50 + 101, 'floor')s

  .start-calmer
    animation calmerStart random() linear infinite

  @keyframes calmerStart
    0%
      opacity 70%
      width: calc(var(--size))
      height: calc(var(--size))
    7%
      width: calc(var(--size)*5)
      height: calc(var(--size)*5)
    50%
      width: calc(var(--size)*15)
      height: calc(var(--size)*15)
      opacity 40%
    57%
      width: calc(var(--size)*13)
      height: calc(var(--size)*13)
      opacity 40%
    100%
      opacity 70%
      height: var(--size)
      width: var(--size)

</style>
