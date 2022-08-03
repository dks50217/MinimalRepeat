let vm = new Vue({
    mixins: [mixin],
    data() {
        return {
           flowList:[],
           actionList:[{"name":"michael"},{"name":"michael2"},{"name":"michael3"},{"name":"michael4"}],
           drag: false
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
        onStart(event) {
            this.drag = true;
        },
        onEnd(event) {
            this.drag = false;
        }
    },
    mounted() {
       
    },
    el: "#app"
})