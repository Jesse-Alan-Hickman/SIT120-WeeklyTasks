<template>
    <div>
        <my-component></my-component>
    </div>
</template>

<script>
import mycomponent from './components/my-component.vue';

export default {
    components: {
    'my-component': mycomponent
},
}
</script>

<style>
    #app {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        text-align: center;
        color: blueviolet;
        margin-top: 60px;
    }
</style>