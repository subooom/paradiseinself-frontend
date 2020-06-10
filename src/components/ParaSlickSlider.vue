/* eslint-disable vue/comment-directive */
<template>
  <Slick
    id="slick-slider-main"
    ref="slick"
    :options="slickOptions"
    @afterChange="handleAfterChange"
    @beforeChange="handleBeforeChange"
    @breakpoint="handleBreakpoint"
    @destroy="handleDestroy"
    @edge="handleEdge"
    @init="handleInit"
    @reInit="handleReInit"
    @setPosition="handleSetPosition"
    @swipe="handleSwipe"
    @lazyLoaded="handleLazyLoaded"
    @lazyLoadError="handleLazeLoadError">
    <slot></slot>
  </Slick>
</template>

<script>
import Slick from 'vue-slick';
import $ from 'jquery';

export default {
  name: 'ParaSlickSlider',
  components: { Slick },

  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        accessibility: true,
        pauseOnHover: false,
        cssEase: 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
        // Any other options that can be got from plugin documentation
      },
    };
  },
  mounted() {
    const slickTrack = document.querySelectorAll('.slick-track')[0];
    setTimeout(() => {
      $(document).find('.slick-list').attr('tabindex', 0).focus();
      slickTrack.style.display = 'flex';
    }, 300);
  },

  // All slick methods can be used too, example here
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },

    // Events listeners
    handleAfterChange() {
      // console.log('handleAfterChange', event, slick, currentSlide);
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      this.$emit('appSlideChanged', [nextSlide, slick]);
      const circles = document.querySelectorAll('.transparent-circle-div')[0];

      const pagination = document.querySelectorAll('.legend-pagination')[0];

      pagination.innerHTML = `0${nextSlide + 1}/04`;
      circles.children.forEach((elem) => elem.classList.remove('active'));
      circles.children[nextSlide].classList.add('active');
      // console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
    },
    handleBreakpoint() {
      // console.log('handleBreakpoint', event, slick, breakpoint);
    },
    handleDestroy() {
      // console.log('handleDestroy', event, slick);
    },
    handleEdge() {
      // console.log('handleEdge', event, slick, direction);
    },
    handleInit(event, slick) {
      this.$emit('appSlideInit', [0, slick]);
      const circles = document.querySelectorAll('.transparent-circle-div')[0];
      const pagination = document.querySelectorAll('.legend-pagination')[0];

      pagination.innerHTML = '01/04';

      circles.children[0].classList.add('active');
    },
    handleReInit() {
      // console.log('handleReInit', event, slick);
    },
    handleSetPosition() {
      // console.log('handleSetPosition', event, slick);
    },
    handleSwipe() {
      // console.log('handleSwipe', event, slick, direction);
    },
    handleLazyLoaded() {
      // console.log('handleLazyLoaded', event, slick, image, imageSource);
    },
    handleLazeLoadError() {
      // console.log('handleLazeLoadError', event, slick, image, imageSource);
    },
  },
};
</script>

<style lang="stylus" scoped>

.slick-arrow
  position absolute
  z-index 5

.slick-track
  display flex !important

</style>
