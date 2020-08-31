<template>
    <div :style="'--color:'+color+'; --color-transparent:'+color+'1e'"
      class="para-expense" style="margin-top:25px">
      <span class="para-expense-icon">
        <i class="fas" :class="iconName" aria-hidden="true"></i> &nbsp;
      </span>
      <span class="para-expense-title">
        <p>{{title.length > 17 ? title.substr(0, 17)+'...' : title }}</p>
        <p class="expense-category"> {{category}}</p>
      </span>
      <span class="expense-amount"> {{amount}} </span>
    </div>
</template>

<script>
export default {
  name: 'ParaExpenseItem',
  props: {
    iconName: {
      type: String,
      default: 'fa-search',
    },
    amount: {
      type: String,
      default: '$$$',
    },
    title: {
      type: String,
      default: 'Prime super shop',
    },
    color: {
      type: String,
      default: '#2dde7b',
    },
    category: {
      type: String,
      default: 'Grocery',
    },
  },
};
</script>

<style lang="stylus" scoped>

  semiTransparent()
    return var(--color)ee;

  .para-expense
    display flex
    flex-direction row
    align-items center
    justify-content: space-between;
    width: 80%;

  .para-expense-icon
    padding: 10px;
    background: var(--color-transparent)
    border-radius: 5px;
    position relative

  .para-expense-icon i
    color: var(--color);

  .para-expense-title
    display flex
    flex-direction column
    font-weight: 600

  .expense-category
    font-weight 400

  .expense-amount
    color var(--color)

  p
    margin 0

</style>
