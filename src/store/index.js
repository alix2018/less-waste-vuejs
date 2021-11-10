import { createStore } from 'vuex';

export default createStore({
  state: {
    message: '',
  },
  mutations: {
    addMessageToPage(state, message) {
      state.message = message;
    }
  },
});
