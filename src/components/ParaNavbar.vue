<template>
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'
        :style="'--nav-links-color: '+navLinksColor+';'
          +'; --logo-color:' +logoColor"
    >
      <button class='navbar-toggler'
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor02"
      aria-controls="navbarColor02"
      aria-expanded="false"
      aria-label="Toggle navigation">
        <span class='navbar-toggler-icon'></span>
      </button>

      <div class='collapse navbar-collapse' id='navbarColor02'>
        <ul class='navbar-nav mr-auto'>
          <li v-for="item in navItems.data" :key="item.id" class='nav-item'>
            <a
              @click="handleClick"
              class='nav-link' :data-id="item.id"
              :href="item.href"
            >{{item.title}}</a>
          </li>
          <ParaLine
            class='nav-link-divider'
            :background=navLinksColor
            length='100px'
            height='3px'
          >
          </ParaLine>
        </ul>
      </div>
      <h2 class='logo' @click="handleLogoClick">{{title}}</h2>
    </nav>
</template>

<script>

import ParaLine from './ParaLine.vue';

export default {
  name: 'TheNavBar',
  props: {
    navItems: {
      type: Object,
    },
    title: {
      type: String,
    },
    // eslint-disable-next-line vue/require-prop-type-constructor
    show: true,
    logoColor: {
      type: String,
      default: 'black',
    },
    navLinksColor: {
      type: String,
      default: 'black',
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
  components: {
    ParaLine,
  },
  methods: {
    handleLogoClick() {
      this.$emit('logoClicked');
    },
    handleClick(e) {
      this.$emit('navItemClicked', e.target.dataset.id);
    },
  },
};
</script>

<style lang="stylus" scoped>
  .logo
    color var(--logo-color)
    background var(--nav-links-color)

    @media screen and (max-width: 600px)
     margin-top -8px

    @media screen and (max-width: 768px)
     margin-top -8px

  .nav-link
    color var(--nav-links-color) !important
    cursor pointer
    opacity .8
    transition: all .3s cubic-bezier(0.6, -0.28, 0.735, 0.045)

  .nav-item.active a
    font-weight: bold;
    opacity 1

  .nav-item:not(.active):hover a
    font-weight: bold;
    opacity 1

  .nav-link-divider
    margin-left 30px
</style>
