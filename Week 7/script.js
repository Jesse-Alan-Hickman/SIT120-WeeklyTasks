Vue.component('global-comp', {
    template: '<div>{{ message }}</div>',
    data: function () {
        return {
            message: 'This text is written using a global component!'
        }
    }
})