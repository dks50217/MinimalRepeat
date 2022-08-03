const mixin = {
    data: function () {
        return {
            
        }
    },
    methods: {
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }
}