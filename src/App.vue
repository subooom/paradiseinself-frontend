<template>
  <div id="app" class="page-body">

    <ParadiseInSelfNavbar
      :navLinksColor="navLinksColor"
      @navItemClicked="handleNavItemClicked"
      :logoColor="logoColor"
      @logoClicked="playMusic"
      :activeIndex="activeIndex"
      v-show="appMode==='paradiseinself'"
    ></ParadiseInSelfNavbar>
    <ParaCircleLoop :startLoop="logoClicked"></ParaCircleLoop>
    <!-- <LoadingScreen></LoadingScreen> -->
    <ProjectsTrackerSideBar v-show="appMode==='projects_tracker'"></ProjectsTrackerSideBar>
    <Home
      @slickIncoming="handleSlickIncoming"
      :activeIndex="activeIndex"
      @slideChanged="handleSlideChanged"
    ></Home>
  </div>
</template>

<script>

import ParadiseInSelfNavbar from './components/ParadiseInSelfNavbar.vue';
import ProjectsTrackerSideBar from './components/ProjectsTrackerSideBar.vue';
import ParaCircleLoop from './components/ParaCircleLoop.vue';
import Home from './views/pages/Home.vue';

import LocalStorage from './models/storage';

const DEFAULT_TRANSITION = 'fade';
const DEFAULT_TRANSITION_MODE = 'out-in';


export default {
  name: 'app',
  components: {
    ParadiseInSelfNavbar,
    ProjectsTrackerSideBar,
    ParaCircleLoop,
    Home,
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName || DEFAULT_TRANSITION;

      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }

      this.transitionMode = DEFAULT_TRANSITION_MODE;
      this.transitionEnterActiveClass = `${transitionName}-enter-active`;

      if (to.meta.transitionName === 'zoom') {
        this.transitionMode = 'in-out';
        this.transitionEnterActiveClass = 'zoom-enter-active';
        // Disable scrolling in the background.
        document.body.style.overflow = 'hidden';
      }

      if (from.meta.transitionName === 'zoom') {
        this.transitionMode = null;
        this.transitionEnterActiveClass = null;
        // Enable scrolling again.
        document.body.style.overflow = null;
      }

      this.transitionName = transitionName;

      next();
    });
  },
  beforeMount() {
    LocalStorage.set('app_mode', 'paradiseinself');

    this.audio = new Audio('./media/background.ogg');
    this.audio.preload = true;
    this.audio.loop = true;
    this.audio.type = 'audio/ogg';
    this.audio.muted = true;

    this.timer = setInterval(() => {
      const newVal = LocalStorage.get('app_mode');
      if (newVal !== this.appMode) {
        this.appMode = newVal;
        console.log(newVal);
      }
    }, 1000);
  },
  beforeDestroy() {
    // window.cleaInterval(this.timer);
  },
  data() {
    return {
      showNavbar: true,
      logoClicked: false,
      slickSlider: undefined,
      logoColor: '',
      slick: undefined,
      navLinksColor: '',
      activeIndex: 0,
      audio: undefined,
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
      this.navLinksColor = navLinksColor;
      this.logoColor = logoColor;
      this.activeIndex = i;
      this.updateNavBar();
    },
    playMusic() {
      this.logoClicked = true;
      this.audio.muted = false;
      console.log(this.audio);
      const playPromise = this.audio.play();
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
