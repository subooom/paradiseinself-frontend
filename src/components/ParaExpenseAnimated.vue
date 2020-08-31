<template>
    <div class="para-expense-animated">
        <div class="animated-content">
            <h1 class="title">Monday</h1>
            <div class="amount">
                <p class="income"><i class="fas fa-chart-line"></i> 230 NRP</p>
                <p class="expenditure"><i class="fas fa-chart-line"></i> 230 NRP</p>
            </div>
            <p class="date">June<br>6th</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ParaExpenseAnimated',
  mounted(){
    const paraExpenseAnimated = document.querySelectorAll('.animated-content');
    paraExpenseAnimated.forEach((item) => {
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');

        head.appendChild(style);

        style.type = 'text/css';

        const limit = {
            max: 90,
            min: -90,
        };

        let randomSeed = Math.random();

        if (randomSeed<0.5) {
          randomSeed =Math.floor(randomSeed)
        }
        else {
          randomSeed= Math.ceil(randomSeed)
        }

        const keyframe = `
        @keyframes randomRotation{
          0% {
            transform: rotate(0deg)
          }
          25% {
            transform: rotate(${Math.random() * limit[randomSeed] + 45}deg)
          }
          50% {
            transform: rotate(${Math.random() * 5}deg)
          }
          75% {
            transform: rotate(${Math.random() * limit[randomSeed] - 45}deg)
          }
          100% {
            transform: rotate(0deg)
          }
        }`;

        if (style.styleSheet){
          // This is required for IE8 and below.
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(keyframe));
        }

      const time = Math.floor(Math.random() * 5) + 1 + 's';

      const delay = Math.random() * 1 + 's';

      item.style.animation = `randomRotation ${time} infinite both ${delay}`
    });
  }
};
</script>

<style lang="stylus" scoped>

.para-expense-animated
  cursor pointer

.animated-content
  position relative
  opacity 0
  transition all .4s ease-in

.para-expense-animated:hover .animated-content
  opacity 1;

.animated-content .title
  position: absolute;
  z-index 5
  top: -70px;
  left: -50px;
  text-align center

.animated-content .amount p
  position: absolute;
  z-index 5
  text-align center
  left: -50px;
  font-size: 1.2em;

.income i
  color: #62e7a7;

.animated-content .amount p.expenditure
  top: 20px

.expenditure i
  color: #f85876;

.animated-content .date
  transform: rotate(90deg);
  position: absolute;
  z-index 5
  text-align center
  font-size: 1.5em;
  top: 0px;
  right: -47px;
</style>
