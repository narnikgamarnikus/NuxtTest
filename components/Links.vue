<template>
	<nav class="links">
		<router-link to="/">Home</router-link>
       	<router-link to="/about">About</router-link>
       	<router-link to="/works">Works</router-link>
    </nav>
</template>

<style lang="sass">
.links 
	padding-top: 15px
	text-align: center


nav a 
  font-family: 'Bowlby One SC', cursive;
  display: inline-block
  color: #000
  letter-spacing: 1px
  background-color: #fff
  border: 2px solid #000
  text-decoration: none
  text-transform: uppercase
  padding: 15px 45px
  margin: 5px

nav a:hover 
  color: #fff
  background-color: #000000


nav a.nuxt-link-exact-active 
  font-family: 'Bowlby One SC', cursive;
  display: inline-block
  color: #fff
  letter-spacing: 1px
  background-color: #000000
  border: 2px solid #000
  text-decoration: none
  text-transform: uppercase
  padding: 15px 45px

</style>