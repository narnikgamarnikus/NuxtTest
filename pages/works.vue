<template>
  <section class="container">
    <div class="chat">
      <ul>
        <li v-for="message in messages"> 
          <span class="message__text">{{ message.text }}</span>
          <span class="message__created">{{ message.created }}</span>
        </li>
      </ul>
      <input type="text" @keyup.enter="addMessage">
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  async fetch ({ store, params }) {
    let { data } = await axios.get('http://127.0.0.1:5000/messages')
    for (var item in data['_items']) {
      let message = data['_items'][item]
      console.log()
      store.commit('messages/add', message)
    }
  },
  computed: {
    messages () { return this.$store.state.messages.list }
  },
  methods: {
    addMessage (e) {
      let message = {text: e.target.value}
      this.$store.commit('messages/add', message)
      this.sendMessage(e.target.value)
      e.target.value = ''
    },
    sendMessage (data) {
      axios.post(`http://127.0.0.1:5000/messages`, {
        text: JSON.stringify(data)
      })
        .then(response => {
          console.log(response)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  head: {
    title: 'Works page'
  }
}
</script>
<style lang="sass">

.container 
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.chat input 
  display: inline-block
  border-radius: 4px
  border: 1px solid #3b8070
  color: #3b8070
  text-decoration: none
  padding: 10px 30px
  margin-top: 1rem
  margin-bottom: 2rem

.chat ul 
  padding: 1rem  

.chat ul li
  padding: 1rem
  list-style-type: none
  display: -webkit-flex
  display: flex
  -webkit-justify-content: space-between
  justify-content: space-between

.chat ul li 
  color: #3b8070

.message__created 
  font-size: 0.75rem

.message__text
  font-size: 1rem
</style>