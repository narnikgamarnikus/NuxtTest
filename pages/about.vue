<template>
  <section class="container">
    <div class="about">
      <div>
        <h1 class="subtitle" style="margin-top: 7.5rem">
          I have experience in:
        </h1>
      </div>
      <carousel :perPageCustom="[[320, 1], [768, 2], [1024, 3]]" style="margin-bottom: 7.5rem">
          <slide>
            <li class="list">Python</li>
            <li class="list">JavaScript</li>
            <li class="list">Lua</li>
            <li class="list">Go</li>
            <li class="list">Erlang</li>
          </slide>
          <slide>
            <li class="list">Postgre</li>
            <li class="list">Mongodb</li>
            <li class="list">SQLite</li>
            <li class="list">MySQL</li>
            <li class="list">Tarantool</li>
          </slide>
          <slide>
            <li class="list">Django</li>
            <li class="list">Flask</li>
            <li class="list">Sanic</li>
            <li class="list">Tornado</li>
            <li class="list">AsnycIO</li>
          </slide>
          <slide>
            <li class="list">jQuery</li>
            <li class="list">VueJS</li>
            <li class="list">VannillaJS</li>
            <li class="list">Backbone</li>
            <li class="list">Ember</li>
          </slide>
          <slide>
            <li class="list">REST API</li>
            <li class="list">Websocket</li>
            <li class="list">GraphQL</li>
            <li class="list">Reactive X</li>
            <li class="list">Reactive X</li>            
          </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  },
  head: {
    title: 'About page'
  }
}
</script>

<style lang="sass">


.about 
  width: 50rem
  height: 40rem
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between
  justify-content: space-between
  -webkit-flex-direction: column
  flex-direction: column

.list 
  font-family: 'Bowlby One SC', cursive
  font-weight: 300
  font-size: 0.75rem
  letter-spacing: 0.375rem
  color: #000000
  word-spacing: 5px
  padding-bottom: 15px
  text-transform: uppercase
  list-style-type: none
  margin: auto

.VueCarousel-slide 
  font-family: Bowlby One SC,cursive
  display: inline-block
  color: #000
  letter-spacing: 1px
  background-color: #fff
  border: 2px solid #000
  text-decoration: none
  text-transform: uppercase
  padding: 1rem
  -webkit-align-self: center
  align-self: center
  height: 15rem
  vertical-align: middle
  line-height: 1.75rem


@media (max-width: 480px)
  .about
    width: 20rem
    height: 40rem
    display: -webkit-flex
    display: flex
    -webkit-justify-content: space-between
    justify-content: space-between
    -webkit-flex-direction: column
    flex-direction: column

</style>
