<template>
    <select class="para-select" :style="
    '--color:'+color+';' +
    '--color--hover:'+color+'cc;'
    "
    @change="e => this.$emit('paraSelectOnChange', e)">
        <option v-for="(option, index) in options"
            :key=option.id :value="index"
        >
            {{ option.title || option.name }}
        </option>
    </select>
</template>

<script>
export default {
  name: 'ParaSelect',
  props: {
    options: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
      default: '#f9f9f9',
    },
  },
};
</script>

<style lang="stylus" scoped>
  .para-select
    width 100%
    border none
    background var(--color)
    padding 10px
    border-radius 25px
    outline none
    position relative

  .para-select:hover
    background var(--color--hover)

</style>
