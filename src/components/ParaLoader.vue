<template>
  <div class="para-loader" style="margin-top:25px;"
    :style="'--color:'+color+';--transparent-color-0:'+color+'22'+
    ';--transparent-color-1:'+color+'11; --perc-comp='+parseInt(percentageComplete)">
    <div class="para-loader-title">
        <i class="fas" :class="icon" aria-hidden="true"></i>
        <span class="para-loader-title-text">{{title}}</span>
    </div>
    <span class="para-loader-subtitle">{{subtitle}}</span>
  </div>
</template>

<script>
export default {
  name: 'ParaLoader',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    color: {
      type: String,
      default: '#62e7a7',
    },
    percentageComplete: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.para-loader
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(to right,
    var(--transparent-color-0),
    var(--transparent-color-0) 70%, var(--transparent-color-1) 30%);
  height: 58px;
  width: 205px;
  border: none;

  border-radius: 15px;
  line-height: 4;

.para-loader-title i,
.para-loader-title-text
.para-loader-subtitle
  color var(--color)

.para-loader-title-text
  padding-left 20px
  font-weight 600
</style>
