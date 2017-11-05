export const state = () => ({
  list: []
})

export const mutations = {
  add (state, message) {
    state.list.push({
      id: message['_id'],
      text: message['text'],
      etag: message['_etag'],
      created: message['_created'],
      updated: message['_updated']

    })
  }
}
