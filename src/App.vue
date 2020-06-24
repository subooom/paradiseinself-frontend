<template>
  <div id="app" class="page-body">
    <!-- <LoadingScreen></LoadingScreen> -->
    <ApolloQuery
      :query="gql => gql`
query {
  apps {
    data {
      title
      slug
      background
      color
      overlayBackground
      url
      buttons
    }
  }
}
`">
        <template v-slot="{ result: { loading, error, data } }">
            <div v-if="loading">loading</div>
            <div v-if="error">{{error}}</div>
            <div v-if="data">
                <ParaNavBar
                :navLinksColor="navLinksColor"
                @navItemClicked="handleNavItemClicked"
                :logoColor="logoColor"
                title="paradiseinself"
                @logoClicked="playMusic"
                :activeIndex="activeIndex"
                :navItems="navItems"
                ></ParaNavBar>
                <ParaCircleLoop :startLoop="logoClicked"></ParaCircleLoop>
                <Home
                    :apps="data.apps.data"
                    @slickIncoming="handleSlickIncoming"
                    :activeIndex="activeIndex"
                    @slideChanged="handleSlideChanged"
                ></Home>
            </div>
        </template>
    </ApolloQuery>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
// import gql from 'graphql-tag';

import ParaNavBar from './components/ParaNavbar.vue';
import ParaCircleLoop from './components/ParaCircleLoop.vue';
import Home from './views/pages/Home.vue';

import LocalStorage from './models/storage';

const DEFAULT_TRANSITION = 'fade';
const DEFAULT_TRANSITION_MODE = 'out-in';


export default {
  name: 'app',
  components: {
    ParaNavBar,
    ParaCircleLoop,
    Home,
  },
  beforeMount() {
    LocalStorage.set('app_mode', 'paradiseinself');

    const url = window.location.href;
    console.log(url.split('#')[2]);

    this.bgMusic = new Audio('./media/background.ogg');
    this.bgMusic.preload = true;
    this.bgMusic.loop = true;
    this.bgMusic.type = 'audio/ogg';
    this.bgMusic.muted = true;

    this.pinDropSound = new Audio('./media/click.mp3');
    this.pinDropSound.preload = true;
    this.pinDropSound.loop = false;
    this.pinDropSound.type = 'audio/mp3';
    this.pinDropSound.muted = true;

    this.timer = setInterval(() => {
      const newVal = LocalStorage.get('app_mode');
      if (newVal !== this.appMode) {
        this.appMode = newVal;
      }
    }, 1000);
  },
  mounted() {
    console.log(this, 'graphql');
  },
  beforeDestroy() {
    // window.cleaInterval(this.timer);
  },
  data() {
    return {
      showNavbar: true,
      apps: {},
      navItems: {
        data: [
          {
            id: 0,
            title: 'radicle flow!',
            slug: 'radicle-flow',
            href: '/#/#radicle-flow',
          },
          {
            id: 1,
            title: 'jod ghatau?',
            slug: 'jod-ghatau',
            href: '/#/#jod-ghatau',
          },
          {
            id: 2,
            title: 'ktm rock.',
            href: '/#/#ktm_rock',
          },
          {
            id: 3,
            title: 'about!',
            href: '/#/#about',
          },
        ],
        navInfo: {
          title: 'paradiseinself',
        },
      },
      logoClicked: false,
      slickSlider: undefined,
      logoColor: '',
      slick: undefined,
      navLinksColor: '',
      activeIndex: 0,
      bgMusic: undefined,
      timer: null,
      appMode: 'paradiseinself',
      prevHeight: 0,
      transitionName: DEFAULT_TRANSITION,
      transitionMode: DEFAULT_TRANSITION_MODE,
      transitionEnterActiveClass: '',
    };
  },
  methods: {
    handleSlickIncoming(slick) {
      this.slick = slick;
    },
    handleNavItemClicked(id) {
      this.slick.slickGoTo(id);
      console.log(id);
      // this.slickSlider.goTo(id);
    },
    updateNavBar() {
      const navbar = document.querySelectorAll('.navbar-nav')[0];
      navbar.children.forEach((element) => element.classList.remove('active'));
      if (this.activeIndex < 4 && this.activeIndex >= 0) {
        navbar.children[parseInt(this.activeIndex, 10)].classList.add('active');
      }
    },
    handleSlideChanged([navLinksColor, logoColor, i]) {
      this.playPinDrop();
      this.navLinksColor = navLinksColor;
      this.logoColor = logoColor;
      this.activeIndex = i;
      this.updateNavBar();
    },
    playPinDrop() {
      this.pinDropSound.volume = 0.4;
      this.pinDropSound.muted = false;
      const playPromise = this.pinDropSound.play();
      if (playPromise) {
        playPromise.then(() => {
          console.log('Did you hear that?');
        }).catch((error) => {
          console.log(`playSound error: ${error}`);
        });
      }
    },
    playMusic() {
      this.logoClicked = true;
      this.bgMusic.muted = false;
      const playPromise = this.bgMusic.play();
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
  body
    background var(--background) !important
</style>
