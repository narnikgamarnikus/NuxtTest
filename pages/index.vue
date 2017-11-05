<template>
  <section class="container">
    <div class="index">
      <h1 class="title">Hello</h1>
      <img src="/face_bw_2.png" width="300" height="300">
      <h2 class="subtitle">
      </h2>
      <h3 class="element"></h3>
      <icon name="github" scale="2" class="alert"></icon>
      <icon name="twitter" scale="2" class="alert"></icon>
      <icon name="facebook" scale="2" class="alert"></icon>
    </div> 
  </section>
</template>

<script>
import Typed from 'typed.js'
// import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
export default {
  head: {
    title: 'Home page'
  },
  mounted () {
    var typed = new Typed('.subtitle', {
      strings: ['I\'m lifetime learner', 'I\'m web developer', 'I\'m software developer'],
      typeSpeed: 100,
      backSpeed: 100,
      smartBackspace: true,
      showCursor: false
    })
    console.log(typed)
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC');
.container 
  min-height: 80vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.index 
  width: 30rem
  height: 50rem

.title
  font-family: 'Bowlby One SC', cursive;
  letter-spacing: 25px
  text-transform: uppercase
  font-size: 50px

.subtitle
  font-family: 'Bowlby One SC', cursive;
  font-weight: 300
  font-size: 40px
  letter-spacing: 20px
  color: #000000
  word-spacing: 5px
  padding-bottom: 15px
  text-transform: uppercase 
</style>
