<template>
  <div ref="paraImageDrops" class="para-image-drops">
    <VueP5
        @preload="preload"
        @setup="setup"
        @draw="draw"
    ></VueP5>
  </div>
</template>
<script>
import VueP5 from 'vue-p5';

export default {
  name: 'ParaImageDrops',
  components: {
    VueP5,
  },
  data() {
    return {
      currentDrop: undefined,
      x: 0,
      y: 0,
      xOffset: 100,
      yOffset: 10000,
    };
  },
  props: {
    url: {
      type: String,
      default: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png',
    },
  },
  mounted() {
    // setInterval(() => {
    //   document.querySelectorAll('.para-image-drops')[0].style.top = `${document.querySelector('.
    // para-image-drops')[0].style.top + this.leavesDrop()} +px`;
    // }, 1000);
  },
  methods: {
    preload(sketch) {
      this.currentDrop = sketch.loadImage(this.url);
      this.currentDrop.style('border-radius', '50%');
    },
    setup(sketch) {
      sketch.resizeCanvas(1000, 768);
      sketch.text('Hello p5!', 20, 20);
    //   sketch.image(this.currentDrop, 0, 0, 50, 75);
    },
    draw(sketch) {
      this.x = sketch.map(sketch.noise(this.xOffset), 0, 1, 0, sketch.width);
      this.y = sketch.map(sketch.noise(this.yOffset), 0, 1, 0, sketch.height);

      sketch.ellipse(this.x, this.y, 20);

      console.log(sketch.frameRate());
      this.xOffset += 0.02;
      this.yOffset += 0.02;
    },
    leavesDrop() {
      // Fr = v / (g hm)1/2

      const hm = 2;
      const g = 9.8;
      const v = 1;

      const secondPart = (g * hm) ** (1 / 2);
      const Fr = v / secondPart;

      return Fr;
    },
  },
  render(h) {
    return h(VueP5, { on: this });
  },
};
</script>

<style lang="stylus" scoped>
  random()
    return math(math(0, 'random') * 1000, 'floor')

  .para-image-drops
    position absolute;
    left: random()px
    z-index: 2;
    top: 0;
    left 0
    transition all .5s linear

  .para-image
    width 50px
</style>
