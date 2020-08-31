<template>
    <div class="para-tri-panel">
        <div class="wallet-balance">
            <h5 class="title">Project Balance</h5>
            <h3 class="total-balance">
              <strong>4,500.00</strong>
              <sup>NRP</sup>
            </h3>
            <div class="icon-remixes">
                <div class="icon-remix">
                    <span class="icon-body">
                        <i class="fas fa-arrow-up positive"></i>
                        <p class="icon-title">NRP 300</p>
                    </span>

                    <p class="icon-subtitle">Income today</p>
                </div>
                <div class="icon-remix">
                    <span class="icon-body">
                        <i class="fas fa-arrow-down negative"></i>
                        <p class="icon-title">NRP 300</p>
                    </span>

                    <p class="icon-subtitle">Expense today</p>
                </div>
            </div>
        </div>
        <ParaCreditCard background="#293366" style="margin: 0 20px" size="120px"></ParaCreditCard>
        <ParaButton title="+ Add New Card"
            class="add-card-button" btnType="light dashed" ></ParaButton>
    </div>
</template>

<script>
import ParaButton from './ParaButton.vue';
import ParaCreditCard from './ParaCreditCard.vue';


export default {
  name: 'ParaTriPanel',
  components: {
    ParaButton,
    ParaCreditCard,
  },
};
</script>

<style lang="stylus" scoped>
  p
    margin 0

  .para-tri-panel
    background #f8faff
    border-radius 25px
    padding 25px 30px
    display flex
    flex-wrap wrap
    align-items center
    justify-content space-around

  .add-card-button
    background #f8faff
    height 120px
    width calc(120px * 1.6)

  .wallet-balance .title
    color: #a3a0bb

  .total-balance
    position relative

  .total-balance sup
    font-size:0.4em
    position absolute
    top 10px

  .icon-remixes
    display flex

  .icon-remix
    padding-right 30px

  .icon-body
    display flex
    align-items center

  .icon-body i
    font-size 0.7em

  .icon-body i.positive
    color #62e7a7

  .icon-body i.negative
    color: #f85876

  .icon-title
    padding-left 10px
    font-weight 500
    font-size 1.1em

  .icon-subtitle
    color: #a3a0bb
    font-size 1.1em
</style>
