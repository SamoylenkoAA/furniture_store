import Vue from 'vue'
import Vuex from "vuex";
import applicationModule from "@/Store/module/application.module";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        application: applicationModule
    }
})

export default store