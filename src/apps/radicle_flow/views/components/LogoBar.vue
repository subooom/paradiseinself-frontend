<template>
    <div class="logo-panel" :style="'--font-size: '+fontSize ">
        <i class="fas fa-atom" :style="'color: '+ color+''"></i>
        <h4 :style="'color: '+ color">radicle flow</h4>
    </div>
</template>

<script>
export default {
  name: 'LogoBar',
  props: {
    color: {
        type: String,
        default: 'white',
    },
    fontSize: {
        type: String,
        default: 'large',
    }
  }
}
</script>

<style lang="stylus" scoped>

@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap');

.logo-panel
  display: flex
  align-items: center
  justify-content: center

.logo-panel i
  font-size: var(--font-size);
  margin-right 10px

.logo-panel h4
  font-size: var(--font-size);
  font-family: 'Fira Code', monospace;
  margin: 0

.logo-panel i{
  animation: rotate 3s cubic-bezier(0.165, 0.840, 0.440, 1.000) infinite both;
}

@keyframes rotate {
  0%{
    transform: rotate(0);
  }
  25%{
    transform: rotate(10deg);
  }
  50%{
    transform: rotate(0);
  }
  75%{
    transform: rotate(-10deg);
  }
  100%{
    transform: rotate(0);
  }
}
</style>
