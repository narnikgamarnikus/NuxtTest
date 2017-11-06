<template>
  <div>
    <links/>
    <nuxt/>
  </div>
</template>

<script>
import Links from '~/components/Links.vue'

export default {
  components: {
    Links
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC');

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.nuxt-link-exact-active 
.nuxt-link-active {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070 !important ;
  color: #3b8070 !important ;
  text-decoration: none;
  padding: 10px 30px;
}

.nuxt-link-exact-active :hover 
.nuxt-link-active :hover {
  color: #fff !important;
  background-color: #3b8070 !important ;
}


.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
