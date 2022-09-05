Vue.component('global-comp', {
    template: '<button>{{ message }}</button>',
    data: function () {
        return {
            message: 'This button was created using a global component!'
        }
    }
})