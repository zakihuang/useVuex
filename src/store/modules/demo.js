export default {
    namespaced: true,
    state: {
        demoList: [
            { name: '张斌', id: '001' },
            { name: '庆康', id: '002' },
        ]
    },
    mutations: {
        addMutation(state, payload) {
            state.demoList.push(payload)
        },
        removeMutaion(state, payload) {
            state.demoList = state.demoList.filter((el) => el.id != payload.id)
        }
    },
    actions: {
        addAction({ commit }, value) {
            setTimeout(() => {
                commit('addMutation', value)
            }, 1000);
        },
        removeAction({ commit }, value) {
            commit('removeMutaion', value)
        }
    },
    getters: {
        getList(state) {
            return state.demoList
        }
    }
}
