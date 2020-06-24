<template>
  <div class="app-banner"
        :style="
          '--background: '+background+';'
          +' --color:' +color+ ';'
          +' --overlayBackground:'+overlayBackground">

    <div class="banner-title">
      <h1 @click=handleTitleClick>{{ title }}

        <ParaLine
          class="title-underline"
          :background=color
          length="75%"
          height="7px"
        ></ParaLine>
      </h1>
      <div class="underlay"></div>
    </div>
    <div class="banner-body">
      <div class="body-left-container">
        <div class="banner-links">
          <div v-for="btn in buttons" :key=btn.title class="body-item"><p>{{ btn.title }}</p></div>
        </div>
        <ParaLine
          class="body-underline"
          :background=color
          length="100px"
          height="5px"
        ></ParaLine>
      </div>
      <div id="scene">
        <div data-depth="1">TESTING</div>
      </div>
    </div>
  </div>
</template>

<script>

import Parallax from 'parallax-js';
import ParaLine from './ParaLine.vue';

export default {
  name: 'AppBanner',
  components: {
    ParaLine,
  },
  data() {
    return {
      audio: undefined,
      reversedAudio: undefined,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      default: 'white',
    },
    color: {
      type: String,
      default: 'black',
    },
    overlayBackground: {
      type: String,
      default: 'gray',
    },
    url: {
      type: String,
      required: true,
    },
    buttons: {
      type: Array,
    },
  },
  beforeMount() {
    this.audio = new Audio('./media/whoosh.wav');
    this.audio.preload = true;
    this.audio.loop = false;
    this.audio.volume = 0.2;
    this.audio.type = 'audio/wav';
    this.audio.muted = true;

    this.reversedAudio = new Audio('./media/whoosh-reverse.wav');
    this.reversedAudio.preload = true;
    this.reversedAudio.loop = false;
    this.reversedAudio.volume = 0.1;
    this.reversedAudio.type = 'audio/wav';
    this.reversedAudio.muted = true;
  },
  mounted() {
    this.initParralax();
  },
  methods: {
    initParralax() {
      const scene = document.getElementById('scene');
      const parallaxInstance = new Parallax(scene);
      console.log(parallaxInstance);
    },
    handleTitleClick(e) {
      this.playAudio(this.audio);
      const header = e.target;
      console.log(header);
      header.classList.remove('rocket-in');
      header.classList.add('rocket-out');
      setTimeout(() => {
        header.classList.remove('rocket-out');
        header.classList.add('rocket-in');
        setTimeout(() => {
          this.playAudio(this.reversedAudio);
        }, 1000);
      }, 2000);
    },
    playAudio(audio) {
      // eslint-disable-next-line no-param-reassign
      audio.muted = false;

      const playPromise = audio.play();
      if (playPromise) {
        playPromise.then(() => {
          console.log('Did you hear that?');
        }).catch((error) => {
          console.log(`playSound error: ${error}`);
        });
      }
    },
  },
};

</script>

<style lang="stylus" scoped>
import("https://fonts.googleapis.com/css2?family=FiraCode&display=swap")
*
  margin 0

timingFunction()
  cubic-bezier(0.6, -0.28, 0.735, 0.045)

setTransition()
  transition: all .3s timingFunction()

.banner-body .body-item p,
.banner-body .body-item,
.banner-body .body-item::before
  setTransition()

.app-banner
  position relative
  top 0
  bottom 0
  left 0
  right 0
  background var(--background)
  height 100vh
  padding-top 130px
  width: 100vw

  @media screen and (max-width: 600px)
   height 100vh

  .banner-title
    width 100%
    margin-top 7rem
    cursor pointer
    display flex
    flex-direction column
    position relative

  hoverTransition(att, t, timing)
    transition att t timing

  .rocket-out
    animation: rocketOut .5s ease-in both;

  .rocket-in
    animation rocketIn 1s ease-in both;

  @keyframes rocketOut
    0%
      transform: translateY(0px)
    10%
      transform: translateY(-5px)
    20%
      transform: translateY(0px)
    30%
      transform: translateY(5px)
    40%
      transform: translateY(0px)
      transform: translateX(0px)
    50%
      transform: translateY(5px)
    100%
      transform: translateX(10000px)

  @keyframes rocketIn
    0%
      transform: translateX(10000px)
    100%
      transform: translateX(0px)

  .banner-title h1
    margin-left 70px
    position absolute
    top: -4rem;
    color var(--color)
    font-family 'Fira Code'
    font-size 6rem
    text-transform lowercase
    position cursor
    z-index 5
    hoverTransition(all, 5s, linear)

    @media screen and (max-width: 600px)
     font-size 4rem

    @media screen and (max-width: 360px)
     font-size 2.5rem

  .banner-title:hover h1
    transform scale(1.1)

  .banner-title .underlay
    hoverTransition(transform, 5s, linear)
    height: 150px
    z-index 2
    width: 100%;
    background: var(--overlayBackground)

  .banner-title:hover .underlay
    transform translateY(-4rem)

  .banner-title .title-underline
    position: absolute;
    left: 10%;
    bottom: -10%;

.banner-body
  padding-left 150px
  padding-right 150px
  margin-top 50px
  display flex
  justify-content: space-between;

.banner-body .body-item
  max-width 350px
  font-size: 2rem;
  color: var(--color)
  cursor pointer
  padding: 5px 10px

  @media screen and (max-width: 600px)
   font-size: 1.3rem;

.banner-body .body-item:hover
  background var(--color)
  position relative

.banner-body .body-item:hover p
  color var(--overlayBackground)

.banner-body .body-item::before
  content '\f30a'
  font-family "Font Awesome\ 5 Free"
  position absolute
  left: -15%
  opacity 0
.banner-body .body-item:hover::before
  content '\f30a'
  opacity 1
  font-weight 900
  position absolute
  left: -15%
  color: color

.banner-body .body-underline
  width 7% !important
  position absolute
  left 14%
  bottom 5%
  margin-top 20px

 @media screen and (max-width: 600px)
  width 10% !important
  left 33%

</style>
