<template>
    <div class="form-group">
        <label>{{title}}</label> <span class="characters-left">{{maxLength - value.length}} Characters</span> <span class="error-msg" v-if="error.hasError">{{error.value}}</span>
        <div class="para-text-area">
            <div class="para-text-area-container" :class="error.hasError ? 'error' : ''">
            <i :style="'--accent:' + accent" class="fa input-icon"
                v-show="icon" :class=iconName aria-hidden="true"></i>
            <textarea
                :maxlength="maxLength"
                v-model="value"
                :style="'text-align: '+textAlign" :placeholder=title> </textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ParaTextArea',
  data() {
      return {
        error : {
            hasError: this.errorMsg ? true : false,
            value: this.errorMsg || null,
        },
        value: ''
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
        if(value.length < this.maxLength){
            this.$emit('change',value);
        }
    }
  },
  props: {
    title: {
      type: String,
      default: 'para input',
    },
    maxLength: {
        type: Number,
        default: 100
    },
    errorMsg: {
      type: String,
      default: null,
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
};
</script>

<style lang="stylus" scoped>
  .error-msg
    color: red
    font-size: 10px
    margin-left: 20px

  .form-group
    margin-right: 1rem;

  label
    margin 0;

  .characters-left
    color black
    font-size 10px

  .para-text-area-container
    margin-bottom 10px
    font-family "Montserrat", sans-serif
    display flex
    position relative
    border-radius 25px
    border-color rgb(249, 249, 249)
    background-color rgb(249, 249, 249)
    border 0 solid;
    transiton: border .3s ease-in

  .para-text-area-container.error
    border 2px solid red;

  .para-text-area-container .input-icon
    padding 14px
    color: var(--accent)

  .input-icon.icon-left
    left 20px

  .input-icon.icon-right
    right 20px

  .para-text-area-container textarea
    min-height 125px
    width 90%
    padding 10px
    border none
    background none
    font-family "Montserrat", sans-serif

  .para-text-area-container input::placeholder
    letter-spacing .3px
    color var(--accent)
    opacity .7
</style>
