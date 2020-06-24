<template>
  <div class="top-legend-bar" :style="'--color:' + color">
    <div class="transparent-circle-div">
      <div class='para-slick-dot-container' @click="handleDotsClick" data-id='0'>
        <ParaLine :background=color></ParaLine>
        <ParaCircle
          class="para-slick-dot"
          size="8px"
          opacity="25%"
          :color=color
          :background=background dataID='0'
        ></ParaCircle>
      </div>
      <div class='para-slick-dot-container' @click="handleDotsClick" data-id='1'>
        <ParaLine :background=color></ParaLine>
        <ParaCircle
          class="para-slick-dot"
          size="8px"
          opacity="45%"
          :color=color
          :background=background dataID='1'
        ></ParaCircle>
      </div>
      <div class='para-slick-dot-container' @click="handleDotsClick" data-id='2'>
        <ParaLine :background=color></ParaLine>
        <ParaCircle
          class="para-slick-dot"
          size="8px"
          opacity="65%"
          :color=color
          :background=background dataID='2'
        ></ParaCircle>
      </div>
      <div class='para-slick-dot-container' @click="handleDotsClick" data-id='3'>
        <ParaLine :background=color></ParaLine>
        <ParaCircle
          class="para-slick-dot"
          size="8px"
          opacity="100%"
          :color=color
          :background=background
          dataID='3'
        ></ParaCircle>
      </div>
    </div>
    <p class="legend-pagination">01/04</p>
    <div class="banner-legend">
      <div class="legend-left-div" @click="handlePrevClicked">
        <i class="fa fa-long-arrow-alt-left legend-child-icon"></i>
        <ParaRectangle
          length="80px"
          height='20px'
          :color=color
          :background=background
        ></ParaRectangle>
      </div>
      <div class="legend-right-div" @click="handleNextClicked">
        <i class="fa fa-long-arrow-alt-right legend-child-icon"></i>
        <ParaRectangle
          length="80px"
          height='20px'
          :color=color
          :background=background
        ></ParaRectangle>
      </div>

    </div>
  </div>
</template>

<script>
import ParaCircle from './ParaCircle.vue';
import ParaLine from './ParaLine.vue';
import ParaRectangle from './ParaRectangle.vue';

export default {
  name: 'ParaSliderLegendBar',
  components: {
    ParaCircle,
    ParaLine,
    ParaRectangle,
  },
  props: {
    color: {
      type: String,
      default: 'white',
    },
    background: {
      type: String,
      default: 'black',
    },
  },
  methods: {
    handleDotsClick(e) {
      this.$emit('dotsClicked', e.target.dataset.id);
    },
    handleNextClicked() {
      this.$emit('nextClicked');
    },
    handlePrevClicked() {
      this.$emit('prevClicked');
    },
  },
};
</script>

<style lang="stylus" scoped>

  wiggleLeft()
    animation: wiggleLeft 5s ease-in-out infinite alternate

  wiggleRight()
    animation: wiggleRight 5s ease-in-out infinite alternate-reverse

  timingFunction()
    cubic-bezier(0.6, -0.28, 0.735, 0.045)

  setTransition()
    transition: all .3s timingFunction()

  @keyframes wiggleLeft
    0%
      transform translateX(-5px)
    100%
      transform translateX(5px)

  @keyframes wiggleRight
    0%
      transform translateX(-5px)
    100%
      transform translateX(5px)

  .para-slick-dot-container
    display flex
    align-items center
    flex-direction row

  .para-slick-dot-container .line
    margin: 0 0px;
    width: 0;
    setTransition()

  .para-slick-dot-container .para-slick-dot
    cursor pointer
    width: 8px !important
    height: 8px !important
    setTransition()

  .para-slick-dot-container:not(.active) .para-slick-dot:hover
    transform scale(1.3)

  .para-slick-dot-container.active .para-slick-dot
    width: 12px !important
    height: 12px !important
    --opacity: 100% !important;

  .para-slick-dot-container.active .line
    width: 25px;
    margin: 0 15px;

  .top-legend-bar
    padding-top 100px
    padding-left 100px
    display flex
    flex-direction row
    align-items center
    position: absolute;
    z-index: 5;

    @media screen and (max-width: 600px)
     padding-left 41px

     @media screen and (max-width: 768px)
      padding-left 47px

     @media screen and (max-width: 360px)
      padding-left 14px

  .transparent-circle-div
    display flex
    flex-direction row
    margin-right 20px
    align-items center

  .legend-pagination
    color var(--color)
    font-size 12px
    margin: 0 0 0 20px
    letter-spacing 2px
    font-weight 700

  .banner-legend
    display flex
    flex-direction row
    margin 0 50px

  .banner-legend>div
    position relative
  @media screen and (max-width: 360px)
     margin 0 27px

  .dots-divider
    margin-left 20px

  .legend-left-div,
  .legend-right-div
    opacity .5
    setTransition()
    cursor pointer

  .legend-left-div:hover,
  .legend-right-div:hover
    opacity .9
    transform scaleY(1.1)

  .legend-left-div i
    color var(--color)
    wiggleLeft()

  .legend-right-div i
    color var(--color)
    wiggleRight()

  .legend-child-icon
    position absolute
    font-size: 2em;
    color: #0000006e;
    top: -3px;

  .legend-left-div i
      left: -15%;

  .legend-right-div i
     left: 75%;

</style>
