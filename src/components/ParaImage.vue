<template>
    <div class="para-image">
        <img :src="src" :alt="alt" :width="width">
    </div>
</template>

<script>
export default {
  name: 'ParaImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '100%',
    },
  },
};
</script>

<style lang="stylus" scoped>
  .para-image
    display: flex;
    align-items: center;
    justify-content: center;
</style>
