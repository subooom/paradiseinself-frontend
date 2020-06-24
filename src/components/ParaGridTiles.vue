<template>
    <div class="para-grid-tiles">
      <div class="grid-1"></div>
      <div class="grid-2"></div>
      <div class="grid-3"></div>
      <div class="grid-4"></div>
      <div class="grid-5"></div>
      <div class="grid-6"></div>
      <div class="grid-7"></div>
      <div class="grid-8"></div>
      <div class="grid-9"></div>
      <div class="grid-10"></div>
      <div class="grid-11"></div>
      <div class="grid-12"></div>
    </div>

</template>

<style lang="stylus" scoped>

.para-grid-tiles
  width 40vw
  height 30vw
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  opacity 1

.para-grid-tiles .grid-1
  border-top-left-radius 100% !important
  background #58355E

.para-grid-tiles .grid-2
  border-bottom-right-radius 100% !important
  background #88B7B5

.para-grid-tiles .grid-3
  border-radius 100% !important
  background #88B7B5

.para-grid-tiles .grid-4
  background #30F2F2
  border-bottom-left-radius 100% !important

.para-grid-tiles .grid-5
  background #58355E
  border-radius 100% !important

.para-grid-tiles .grid-6
  background #58355E
  border-top-left-radius: 100% !important

.para-grid-tiles .grid-7
  background #30F2F2
  border-bottom-left-radius 100% !important

.para-grid-tiles .grid-8
  background #88B7B5
  border-top-left-radius: 100% !important

.para-grid-tiles .grid-9
  background #30F2F2
  border-top-left-radius: 100% !important

.para-grid-tiles .grid-10
  background #58355E
  border-bottom-left-radius: 100% !important

.para-grid-tiles .grid-11
  background #30F2F2
  border-radius 100% !important

.para-grid-tiles .grid-12
  background #58355E
  border-bottom-left-radius: 100% !important

</style>
