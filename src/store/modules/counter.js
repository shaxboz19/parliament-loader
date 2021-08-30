export default {
    namespaced : true,
    state() {
        return {
            counter : 1
        }
    },
    mutations : {
        increments(state) {
            state.counter++;
        },
        add(state, payload) {
            state.counter += payload.value;
        }
    },
    getters : {
        counter(state) {
            return state.counter
        },
        doubleCounter(state, getters, rootState, rootGetters) {
            console.log(state);
            console.log(getters);
            console.log(rootGetters);
            console.log(rootState);
            return getters.counter *2;
          
        }
    },
    actions : {
        incrementAsync(context, payload) {
          setTimeout(() => {
            context.commit('add', payload) 
          }, payload.delay);
        }
    }
}