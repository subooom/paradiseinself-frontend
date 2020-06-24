<template>
  <div id="app">
    <ParaSideBar></ParaSideBar>

    <router-view></router-view>

  </div>
</template>

<script>

import ParaSideBar from '../../components/ParaSideBar.vue';
// import ParaGridTiles from '../../components/ParaGridTiles.vue';

export default {
  name: 'App',
  components: {
    ParaSideBar,
    // ParaGridTiles,
  },
  data() {
    return {
      navLinksColor: '#58355E',
      activeIndex: 0,
      logoColor: '#30F2F2',
      navItems: {
        data: [
          {
            title: 'Home',
            href: '/',
          },
          {
            title: 'About',
            href: '/',
          },
        ],
        navInfo: {
          title: 'radicle_flow',
        },
      },
    };
  },
};
</script>

<style lang="stylus" scoped>
.main-body
  height 100vh
  display flex
  flex-direction row
  justify-content space-around
  align-items center
  padding: 100px 0

.left-content
  width 40vw
  align-self flex-end

.left-content h1
  color: #30F2F2;

.left-content h2
  color: #58355E;

.left-content p
  max-width 260px
  color gray

</style>
