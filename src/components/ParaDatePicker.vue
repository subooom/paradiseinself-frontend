<template>
    <div class="para-date-picker">
        <div class="para-date-container">
        <i @click="toggleDateDropDown" :style="'--accent:' + accent" class="fa input-icon"
            v-show="icon" :class=iconName aria-hidden="true"></i>
        <input type="date" ref="paraDatePicker"  :value=value @change="handleOnChange"
            :style="'text-align: '+textAlign" :placeholder=title />
        </div>
    </div>
</template>

<script>
export default {
  name: 'ParaDatePicker',
  props: {
    title: {
      type: String,
      default: 'para input',
    },
    value: {
      type: String,
      default: '',
    },
    textAlign: {
      type: String,
      default: 'center',
    },
    icon: {
      type: Boolean,
      default: true,
    },
    iconName: {
      type: String,
      default: 'fa-search',
    },
    accent: {
      type: String,
      default: '#000000',
    },
  },
  methods: {
    handleOnChange(e) {
        this.$emit('dateChanged', this.value)
    },
    toggleDateDropDown(e)
    {
      this.$refs.paraDatePicker.focus()
    }
  }
}
</script>

<style lang="stylus" scoped>
::-webkit-calendar-picker-indicator
    position: absolute;
    cursor pointer
    left: -50px;
    width: 100%;
    height: 40px;
    color: rgba(204, 204, 204, 0);
    opacity: 0

  ::-webkit-inner-spin-button
    -webkit-appearance: none;

  .para-date-container
    margin-bottom 10px
    font-family "Montserrat", sans-serif
    display flex
    align-items center
    position relative
    border-radius 25px
    border-color rgb(249, 249, 249)
    background-color rgb(249, 249, 249)

  .para-date-container .input-icon
    padding 10px
    color: var(--accent)

  .input-icon.icon-left
    left 20px

  .input-icon.icon-right
    right 20px

  .para-date-container input
    position relative
    background: none;
    padding 10px
    font-family "Montserrat", sans-serif
    border: none;

  .para-date-container input::placeholder
    letter-spacing .3px
    color var(--accent)
    opacity .7

</style>
