import axios from "axios";

const initialState = {
    items: [],
    currentPage: 1,
    perPage: 6,
    section_id: 1
}

const applicationModule = {
    state: {
        ...initialState
    },
    getters: {
        current: state => state.currentPage,
        total_rows: state => state.items
            .filter(item => item.section_id === (state.section_id === 1 ? item.section_id : state.section_id)).length,
        per_page: state => state.perPage,
        furniture: (state) => {
            let start = (state.currentPage - 1) * state.perPage
            let end = state.currentPage * state.perPage
            return state.items
                .filter(item => item.section_id === (state.section_id === 1 ? item.section_id : state.section_id))
                .slice(start, end)
        },
        typeFurniture: (state) => {
            let type = state.items
                .map(item => {
                    return {
                        value: item.section_id, text: item.section_name
                    }
                })
            type.unshift({value: 1, text: 'Все категории'})
            return type.filter((item, index, self) => {
                return  index === self.findIndex(t => (
                    t.value === item.value && item.text !== null
                ))
            })
        }
    },
    mutations: {
        setFurniture(state, value){
            state.items = value
        },
        setFilter(state, value) {
            state.section_id = value
        },
        setCurrent(state , val){
            state.currentPage = val
       }
    },
    actions: {
        async loadFurniture({commit}){
            await axios.get('https://planhome.online/ajax/flatfeed.php').then(response => {
                const {data} = response
                commit('setFurniture', data)
            })
        }
    }
}

export default applicationModule