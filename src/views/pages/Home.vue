/* eslint-disable no-tabs */
<template>
<div class="full-container" :style="'--total_width: ' + apps.length * 20 + 'vw;'">
<ParaSliderLegendBar
@nextClicked="handleNextClicked"
@prevClicked="handlePrevClicked"
@dotsClicked="handleDotsClicked"
:color="color"
:background="background"
></ParaSliderLegendBar>
<ParaSlickSlider
@appSlideChanged="handleAppSlideChanged"
@appSlideInit="handleAppSlideInit"
>
<ParaAppBanner
v-for="app in apps"
:key="app.title"
:title="app.title"
:background="app.background"
:color="app.color"
:overlayBackground="app.overlayBackground"
:url="app.url"
:buttons="app.buttons"
></ParaAppBanner>
<About></About>
</ParaSlickSlider>
</div>
</template>

<script>
import LocalStorage from '../../models/storage';
import ParaAppBanner from '../../components/ParaAppBanner.vue';
import ParaSlickSlider from '../../components/ParaSlickSlider.vue';
import ParaSliderLegendBar from '../../components/ParaSliderLegendBar.vue';
import About from './About.vue';

export default {
  name: 'Home',
  components: {
    ParaAppBanner,
    ParaSlickSlider,
    ParaSliderLegendBar,
    About,
  },
  props: {
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      slick: undefined,
      color: '',
      background: '',
      apps: [
        {
          title: 'radicle_flow();',
          slug: 'radicle-flow',
          background: '#fef76c',
          color: '#58355E',
          overlayBackground: '#30F2F2',
          url: 'http://localhost:8080',
          buttons: [
            {
              title: "s'up, s'up?",
              url: '#',
            },
            {
              title: 'go get some?',
              url: '#',
            },
            {
              title: 'sauce, raw sauce!',
              url: '#',
            },
          ],
        },
        {
          title: 'jod_ghatau();',
          slug: 'jod-ghatau',
          background: '#FF5964',
          color: '#F7EBE8',
          overlayBackground: '#EF2D56',
          url: 'http://localhost:8080',
          buttons: [
            {
              title: 'what it do tho?',
              url: '#',
            },
            {
              title: 'go get some?',
              url: '#',
            },
            {
              title: 'sass, a lot of sass!',
              url: '#',
            },
          ],
        },
        {
          title: 'ktm_rock();',
          slug: 'ktm-rock',
          background: '#C42021  ',
          color: '#FCBA04 ',
          overlayBackground: '#590004',
          url: 'http://localhost:8080',
          buttons: [
            {
              title: 'no pop, ay!',
              url: '#',
            },
            {
              title: 'go get some?',
              url: '#',
            },
            {
              title: 'sauce, raw sauce!',
              url: '#',
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  beforeMount() {
    LocalStorage.set('app_mode', 'paradiseinself');
  },
  methods: {
    handleDotsClicked(id) {
      this.slick.slickGoTo(id);
    },
    handleNextClicked() {
      this.slick.next();
    },
    handlePrevClicked() {
      this.slick.prev();
    },
    setColors([c, b]) {
      this.color = c;
      this.background = b;
    },
    emitEvent(i = 0, slick) {
      this.slick = slick;
      this.$emit('slickIncoming', slick);

      // For About Page
      if (i === 3) {
        this.setColors(['#2708A0', '#CAFFB9']);
        this.$emit('slideChanged', ['#2708A0', '#CAFFB9', i]);
      } else {
        // For other pages
        this.setColors([this.apps[i].color, this.apps[i].background]);
        this.$emit('slideChanged', [this.apps[i].color, this.apps[i].overlayBackground, i]);
      }
    },
    // To get the current active slide
    handleAppSlideInit([i = 0, slick]) {
      this.emitEvent(i, slick);
    },
    // To update the current active slide
    handleAppSlideChanged([i, slick]) {
      if (i === 3) {
        window.location.href = 'http://localhost:8080/#/about';
      } else {
        window.location.href = `http://localhost:8080/#/${this.apps[i].slug}`;
      }
      this.emitEvent(i, slick);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
