<template>
  <div class="main-content">
    <div class="settings-content">
        <div class="settings-left">
            <header class="header">
                <h1>Settings</h1>
            </header>
            <section class="setting-body">
                <div class="setting-nav-container">
                    <div class="nav-item info active" data-active="info">
                        info
                    </div>
                    <div class="nav-item team-members" data-active="info">
                        team-members
                    </div>
                    <div class="nav-item notifications" data-active="info">
                        notifications
                    </div>
                    <div class="nav-item sudo" data-active="info">
                        sudo
                    </div>
                </div>
                <div class="setting-detail-container" id="info">
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Recusandae placeat culpa accusantium vel
                        veniam dolorem adipisci, fugiat modi ipsa vitae,
                        illo commodi! Libero eos officiis asperiores
                            consectetur ullam delectus sapiente.</p>
                </div>
            </section>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ProjectTrackerSettings',
};
</script>
<style lang="stylus" scoped>

  .main-content
    margin-top 1vh
    height 98vh
    width 85%
    overflow-y scroll
    border-top-left-radius 30px
    border-bottom-left-radius 30px
    box-shadow -1px -1px 6px 0px rgba(92, 99, 103, 0.55)
    float right
    background white

  .settings-content
    padding: 20px 35px;
    display grid
    grid-template-columns 1fr 250px

  @media(max-width: 675px)
    .settings-content
      grid-template-columns 1fr

  .settings-left
    display flex
    flex-direction column

  .setting-body
    display grid
    grid-template-columns 1fr 3fr

  .setting-nav-container
    display flex
    flex-direction column
    color #261e56
    font-size 1.5em
    background #f8faff

  .setting-nav-container .nav-item
    padding: 10px 20px


  .setting-nav-container .nav-item.info
    background green

  .setting-detail-container
    padding 20px
</style>
