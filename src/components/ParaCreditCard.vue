<template>
    <div class="para-credit-card"
     :style="
        '--background:' + background + ';' +
        '--size:' + size + ';'
      "
    >
        <div class="overlay-circles">
            <ParaCircle
                size='50px'
                background='white'
                color='white'
                opacity='20%'
            ></ParaCircle>
            <ParaCircle
                size='50px'
                background='white'
                color='white'
                opacity='20%'
            ></ParaCircle>
            <ParaCircle
                size='50px'
                background='white'
                color='white'
                opacity='20%'
            ></ParaCircle>
        </div>
        <div class="main-content">
            <p class="amount">NRP 2,300.76</p>
            <p class="bank-name">Nepal Investment Bank</p>
        </div>
        <div class="footer">
            <p class="account-holder">Subham Kharel</p>
            <p class="expiry-date">3/20</p>
        </div>
    </div>
</template>

<script>
import ParaCircle from './ParaCircle.vue';

export default {
  name: 'ParaCreditCard',
  components: {
    ParaCircle,
  },
  props: {
    background: {
      type: String,
      default: '#293366',
    },
    size: {
      type: String,
      default: '150px',
    },
  },
};
</script>

<style lang="stylus" scoped>
  p
    margin 0

  .para-credit-card
    background: var(--background)
    height: var(--size)
    width: calc(var(--size) * 1.6)
    border-radius 25px
    padding 20px
    position relative
    display flex
    flex-direction column
    justify-content space-between
    overflow hidden

  .overlay-circles
    display flex

  .overlay-circles div
    position absolute

  .overlay-circles div:nth-child(1)
    top 0px
    right -20px

  .overlay-circles div:nth-child(2)
    top -10px
    right -10px

  .overlay-circles div:nth-child(3)
    top -15px
    right 5px

  .amount
    color white
    margin-bottom 5px
    font-size .9em
    font-weight 600

  .bank-name
    font-size .7em
    color #a3a0bb

  .footer
    justify-self end
    font-size .7em
    display flex
    justify-content space-between

  .account-holder,
  .expiry-date
    color #a3a0bb

  .account-holder
    font-size 1em
    font-weight 600
</style>
