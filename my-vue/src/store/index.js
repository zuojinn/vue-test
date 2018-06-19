import Vue from 'vue'
import Vuex from 'vuex'

import MenuStore from './MenuStore'
import AuthorStore from './AuthorStore'
import PointStore from './PointStore'
import SelectStore from './SelectStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        MenuStore,
        AuthorStore,
        PointStore,
        SelectStore
    }
})