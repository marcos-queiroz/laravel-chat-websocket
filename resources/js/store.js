import { Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default new Store({
    state: {
        user: {}
    },

    mutations: {
        setUserState: (state, value) => state.user = value
    },

    actions: {
        setUserStateAction: ({ commit }, user) => {
            commit('setUserState', user);
        }
    },

    plugins: [ createPersistedState() ]
});
