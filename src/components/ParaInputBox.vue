<template>
    <div class="form-group">
        <label>{{title}}</label> <span class="error-msg" v-if="error.hasError">{{error.value}}</span>
        <div class="para-input-box" :class="error.hasError ? 'error' : ''">
            <div class="search">
            <i :style="'--accent:' + accent" class="fa input-icon"
                v-show="icon" :class=iconName aria-hidden="true"></i>
            <input
                required
                v-model="value"
                :style="'text-align: '+textAlign" :class=variant :type=type :placeholder=title>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ParaInputBox',
  data() {
    return {
      value: '',
      error: {
        hasError: this.errorMsg ? true : false,
        value: this.errorMsg || null,
      },
    }
  },
  mounted: function () {
    this.$watch('errorMsg', function (error) {
        this.error = {
            hasError: error ? true : false,
            value: error || null,
        }
    }, {deep:true})
  },
  watch: {
    value: function(value)
    {
      this.$emit('change',value);
    }
  },
  props: {
    title: {
      type: String,
      default: 'para input',
    },
    errorMsg: {
      type: String,
      default: null,
    },
    textAlign: {
      type: String,
      default: 'center',
    },
    type: {
      type: String,
      default: 'text',
    },
    variant: {
      type: String,
      default: 'large',
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
};
</script>

<style lang="stylus" scoped>

  label
    margin 0;

  .error-msg
    color: red
    font-size: 10px
    margin-left: 20px

  .form-group
    margin-right: 1rem;

  .para-input-box
    border 0 solid;
    transiton: border .3s ease-in
    border-radius 25px

  .para-input-box.error
    border 2px solid red;

  .search
    font-family "Montserrat", sans-serif
    display flex
    align-items center
    position relative
    border-radius 25px
    border-color rgb(249, 249, 249)
    background-color rgb(249, 249, 249)

  .search .input-icon
    padding 10px
    color: var(--accent)

  .search input.large
    padding 10px

  .search input.small
    padding 10px

  .search input
    width 90%
    border none
    background none
    font-family "Montserrat", sans-serif

  .search input::placeholder
    letter-spacing .3px
    color var(--accent)
    opacity .7
</style>
