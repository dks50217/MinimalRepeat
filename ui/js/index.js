const setDragCursor = value => {
    const html = document.getElementsByTagName('html').item(0)
    html.classList.toggle('grabbing', value)
}


let vm = new Vue({
    mixins: [mixin],
    data() {
        return {
           flowList:[],
           actionList:[{"name":"michael"},{"name":"michael2"},{"name":"michael3"},{"name":"michael4"}],
           test:'test'
        }
    },
    components: {
        'draggable': window['vuedraggable'],
        'raw-displayer': httpVueLoader('../component/raw-displayer.vue')
    },
    created() {

    },
    computed: {

    },
    methods: {
        onChoose(event){
            setDragCursor(true);
        },
        onStart(event) {
            setDragCursor(true);
        },
        onUnchoose(event){
            setDragCursor(false);
        },
        onEnd(event) {
            setDragCursor(false);
        },
    },
    mounted() {
       
    },
    el: "#app"
})