<template>
  <div class="side-nav-container">
    <div class="side-nav">
      <LogoBar color="white" fontSize="20px"></LogoBar>
      <div class="nav-links">
        <router-link class="active" to="/">
          <i class="fas fa-info"></i> <span>Details</span></router-link>
        <router-link to="/progress">
          <i class="fas fa-chart-line"></i> <span>Progress</span></router-link>
        <router-link to="/task"><i class="fas fa-tasks"></i><span>Tasks</span></router-link>
        <router-link to="/settings"><i class="fas fa-cogs"></i><span>Settings</span></router-link>
        <router-link to="/vision"><i class="fab fa-first-order"></i><span>Vision</span></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.side-nav-container{
  width: 60px;
  transition: width .4s cubic-bezier(0.075, 0.82, 0.165, 1)
}
.side-nav{
  margin-top: 30px;
  background: #261e56;
  z-index: -1;
  display: flex;
  flex-direction: column;
  width: 200px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
.side-nav>.nav-links{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  position: relative;
}

.side-nav .nav-links > a{
  text-decoration: none;
  padding: 10px 30px;
  color: #8f8ba7;
  width: 100%;
  display: flex;
  align-items: center;
    justify-content: space-between;
}


.side-nav .nav-links > a:not(.active):hover{
  background: rgba(0,0,0,.2)
}


.side-nav .nav-links a>i{
  font-size: 20px;
  padding: 0 20px;
}
.side-nav .nav-links a.active{
  font-size: 20px;
  color: white;
}
</style>

<script>

import LogoBar from './LogoBar.vue';


export default {
  name: 'ProjectsTrackerSideBar',
  components: {LogoBar},
  mounted() {
    document.onload = () => {
      const sidenav = document.querySelectorAll('.side-nav-container')[0];
      const activeDiv = document.querySelectorAll('.side-nav::after')[0];
      const activeLink = document.querySelectorAll('.side-nav .nav-links a.active')[0];
      const position = activeLink.getBoundingClientRect();
      const x = position.left;
      const y = position.top;
      console.log(activeDiv);
      activeDiv.style.top = y;
      activeDiv.style.left = x;
        // const logoDiv = document.querySelectorAll('.logo-panel')[0];
        const content = document.querySelectorAll('.main-content')[0];
        // let loader = document.querySelectorAll('.loader-container')[0];

        console.log(content);

        // setTimeout(_=>{
        //   loader.remove()
        // }, 2000)
        content.style.zIndex = 2;

        function updateMainDiv() {
          content.style.width = `${window.innerWidth - sidenav.style.width.replace('px', '')}px`;
        }

        updateMainDiv();

        sidenav.addEventListener('mouseenter', () => {
          sidenav.style.width = `${200}px`;
          sidenav.style.zIndex = 3;
          updateMainDiv();
        });
        sidenav.addEventListener('mouseleave', () => {
          sidenav.style.zIndex = 0;
          sidenav.style.width = `${60}px`;
          updateMainDiv();
        });
    };
  },
};
</script>
