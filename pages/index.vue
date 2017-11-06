<template>
  <section class="container">
    <div class="index">
      <div class="top">
        <h1 class="title">Hello</h1>
        <img src="/face_bw_2.png" width="300" height="300">
        <h2 class="subtitle"></h2>
        <h3 class="element"></h3>
      </div>
      <div class="bottom">
        <div :class="['network',online ? 'online' : 'offline']">
        <div class="circle"></div>
        {{ online ? 'online' : 'offline' }}
        </div>
        <a href="http://github.com/narnikgamarnikus"><icon name="github" scale="2"></icon></a>
        <a href="https://twitter.com/narnikgamarnik"><icon name="twitter" scale="2"></icon></a>
        <a href="https://www.facebook.com/narnikgamarnik"><icon name="facebook" scale="2"></icon></a>
      </div>
    </div> 
  </section>
</template>

<script>
import Typed from 'typed.js'

import 'vue-awesome/icons/github'
import 'vue-awesome/icons/twitter'
import 'vue-awesome/icons/facebook'

export default {
  head: {
    title: 'Home page'
  },
  data () {
    return {
      online: true
    }
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
    if (!window.navigator) {
      this.online = false
      return
    }
    this.online = Boolean(window.navigator.onLine)
    window.addEventListener('offline', this._toggleNetworkStatus)
    window.addEventListener('online', this._toggleNetworkStatus)    
  },
  methods: {
    _toggleNetworkStatus ({ type }) {
      this.online = type === 'online'
    }
  },
  destroyed () {
    window.removeEventListener('offline', this._toggleNetworkStatus)
    window.removeEventListener('online', this._toggleNetworkStatus)
  }  
}
</script>

<style lang="sass">
.bottom
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  margin-bottom: 2rem

.bottom a 
  color: #000000

.index 
  width: 30rem
  height: 40rem
  display: flex;
  flex-direction: column;
  justify-content: space-between;

.icons
  top: 0

.top 
  margin-top: 3rem 

.network 
  font-weight: 400
  font-size: 1rem
  
.network .circle
  display: inline-block
  width: 1rem
  height: 1rem
  background: green
  padding: .1rem .5rem
  border-radius: 1rem

.network.offline .circle 
  background: red

</style>
