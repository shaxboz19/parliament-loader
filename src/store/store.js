import {createStore } from 'vuex'
import counter from './modules/counter'
export default createStore({
    modules : {
        count : counter,
    },
    
    state () {
        return {
            appTitle : 'vuex working...'
        }
    },
    getters: {
        uppercaseTitle (state){
            return state.appTitle.toUpperCase()
        }
    }
})