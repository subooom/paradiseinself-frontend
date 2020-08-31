<template>
    <button class="para-button" :class="btnType">{{title}}</button>
</template>

<script>
export default {
  name: 'ParaButton',
  props: {
    title: {
      type: String,
      required: true,
    },
    btnType: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
  .para-button
    border none
    padding 20px 35px
    border-radius 15px
    text-align center
    font-weight 500

  .para-button.primary
    color white
    background #261e56ee
    transition background .3s ease-in

  .para-button.primary:hover
    background #261e56

  .para-button.dashed
    border: 1px dashed #261e566e

  .para-button.light
    background trnsparent
    transition border .3s ease-in

  .para-button.light:hover
    border: 1px dashed #261e56
</style>
