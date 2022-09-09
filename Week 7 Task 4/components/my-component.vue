<template>
    <div>
        <h1> Hello from my component!</h1>
        <div> My name is {{ name }}</div>

    </div>
</template>

<script>
    export default {
        props: {
            name: { type: String, default: "Jesse"}
        }
    }
</script>