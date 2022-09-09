<template>
    <div>
        <h1> Hello from my component!</h1>
        <p> My name is {{ name }}</p>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
            name: { type: String, default: "Jesse"}
        }
    }
</script>