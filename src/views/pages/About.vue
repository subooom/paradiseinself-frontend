<template>
    <div class="section"
        :style="'--background: '+background+';'
          +'; --color:' +color+';'
          +'; --accent-color:' +accentColor">
      <!-- <div class="header">
        <div class="header-title">
            <h3>
                ParadiseInSelf
                <br />
                Season — 2020
            </h3>
        </div>

        <div class="header-content">
            <div>
                <h5>UPU</h5>
                <p class="para" style="min-height: 26px">WE ARE OCEANIA</p>
                <p class="date">
                    5.mar— <br />
                    15.mar.20
                </p>
            </div>

            <div>
                <h5>The Writer</h5>
                <p class="para" style="min-height: 26px">
                    A Ferocious call to arms
                </p>
                <p class="date">
                    11.jun— <br />
                    4.jul.20
                </p>
            </div>

            <div>
                <h5>Every Brilliant Thing</h5>
                <p class="para" style="min-height: 26px">
                    What would you put on your list?
                </p>
                <p class="date">
                    25.aug— <br />
                    19.sep.20
                </p>
            </div>

            <div>
                <h5>BREAK BREAD</h5>
                <p class="para" style="min-height: 26px;">
                    Tell us who you are. Tell us where you come from.
                </p>
                <p class="date">
                    5.nov— <br />
                    28.nov.19
                </p>
            </div>
        </div>
      </div> -->
        <div class="about">
            <h1 class="page-title">about</h1>
            <div class="horizontal-flex">
                <div class="desc">
                    <div class="top-panel">
                        <h4>
                          OUR VISION
                        </h4>
                        <p>
                            Trying to be live soon, we come here to make the world a better place.
                            We are a handful amount of software engineers who do this
                            just for the love of it.
                        </p>
                    </div>
                    <div class="bottom-panel">
                        <h4 class="theater">WHAT WE DO</h4>
                        <p>
                            Paint <br />
                            Social Work <br />
                            Recursion<br />
                        </p>
                    </div>
                </div>

                <div class="season">
                    <div class="heading">
                        <h2>season archive</h2>
                        <br />
                        <p class="solo">SILO THEATRE IS ANTI–STATIC.</p>
                    </div>
                    <div class="creater">
                        <div class="creater1">
                            <img
                                src="/img/1.jpg"
                                alt="sushma"
                                width="110"
                                height="160"
                                class=" loaded"
                            />
                            <p class="name">
                                Sushma Chaudhary
                            </p>
                            <p class="job">
                                Web Developer
                            </p>
                        </div>
                        <div class="creater2">
                            <img
                                src="/img/2.jpg"
                                alt="Subham"
                                width="110"
                                height="160"
                                class=" image"
                            />
                            <p class="name">
                                Subham Kharel
                            </p>
                            <p class="job">
                                Web Developer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LocalStorage from '../../models/storage';

export default {
  name: 'About',
  beforeMount() {
    LocalStorage.set('app_mode', 'paradiseinself');
  },
  props: {
    background: {
      type: String,
      default: '#CAFFB9',
    },
    color: {
      type: String,
      default: '#2708A0',
    },
    accentColor: {
      type: String,
      default: '#D7263D',
    },
  },
};
</script>

<style lang="stylus" scoped>

setTransition()
  transition: all .3s timingFunction()

.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--background);
    background-size: cover;
    top: 0;
    setTransition()
    right: 0;
    bottom: 0;
    left: 0;
}
.horizontal-flex {
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    flex-wrap: wrap;
}
@media screen and (max-width:360px){
 .horizontal-flex {
   margin-left :-38px;
}
}

.header{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-top: 200px;
}

h3 {
  color: var(--color);
  font-weight: 600;
  font-size: 29px;
  letter-spacing: 1px;
}

p {
    color: var(--color);
    font-size: 35px;
    font-weight: 700;
}

.header-content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 20px;
    width: 60%;
    margin-left: 140px;
}

.header-content div {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 182px;
    width:170px
}
h5 {
    color: var(--color);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 5px 0;
    text-transform: uppercase;
    border-bottom: 2px solid var(--color);
}

.para {
    font-size: 11px;
    line-height: 1;
    color: var(--color);
    font-weight: 400;
    letter-spacing: 0.4px;
}

.date {
    line-height: 1;
    font-size: 11px;
    color: var(--color);
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: .4px;
}

.about {
    width: 100%;
    height: 100vh;
}
.about h1 {
    margin: 65px 10px 50px 180px;
    text-transform: lowercase;
    font-size: 100px;
    text-align: right;
}

@media screen and (max-width:600px){
 .about h1{
   margin-top :140px;
   font-size: 75px;
}
}


@media screen and (max-width:768px){
 .about h1{
   margin-top :140px;
   font-size: 75px;
}
}
@media screen and (max-width:360px){
 .about h1{
   margin-top :140px;
   font-size: 60px;
}
}

h1 {
    color: var(--color);
    text-transform: uppercase;
    letter-spacing: 3px;
    line-height: 1em;
    font-weight: bolder;
}

.about hr {
    width: 110px;
    margin: 0 0 10px;
    border-top: 2px solid var(--color);
    margin-left: 295px;
}
hr {
    border-color: #ccc;
    border-style: solid;
    border-width: 1px 0;
    height: 0;
}

h4 {
    color: var(--accent-color);
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 1px;
    border-top: 2px solid var(--color);
    padding-top: 20px;
}
.desc {
    margin-left: 295px;
    width: 263px;
}

@media screen and (max-width:600px){
 .desc {
   margin-left :100px;
}
}

@media screen and (max-width:768px){
 .desc {
   margin-left :100px;
}
}
.desc p {
    color: var(--color);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-top: 25px;
}

.bottom-panel {
    padding: 10px 0 0;
    margin-top: 40px;
}

.bottom-panel h6 {
    font-size: 16px;
    margin-bottom: 5px;
    line-height: 1.5em;
    font-weight: 900;
    color: var(--color);
}
.bottom-panel .theater {
    font-size: 16px;
    font-weight: 900;
    color: var(--accent-color);
}
.season {
    margin-left: 95px;
    max-width: 500px;
}
@media screen and (max-width:360px){
 .season {
   margin-left :55px;
}
}
.heading h2 {
    color: var(--color);
    text-transform: uppercase;
    font-size: 20px;
    padding: 0 10px 0 0;
    border-bottom: 2px solid var(--color);
    line-height: 26px;
    font-size: 16px;
    font-weight: 400;
    text-align: right;
    margin-top: 20px;
    letter-spacing: 1px;
    width: 100%;
}
.page-title {
    margin-left: 162px;
}

.solo {
    margin-bottom: 20px;
    font-size: 38px;
    font-weight: 400;
    line-height: 1;
}
.creater {
    display: flex;
    margin-top: 45px;
}

.creater2 {
    margin-left: 83px;
}
.name {
    margin: auto;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color);
    margin-top: 8px;
}

.job {
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color);
    margin-top: 8px;
}
// @media (min-width: 576px) {

//   .desc{
//     margin-left: 0;
//   }
// }

// @media (min-width: 768px) {

//   .desc{
//     margin-left: 0;
//   }
// }

// @media (min-width: 992px) {

//   .desc{
//     margin-left: 0;
//   }
// }

@media (min-width: 1155px) {
  .header-content{
    margin-left: 0;
  }
  .desc{
    margin-left: 100px;
  }

}
</style>
