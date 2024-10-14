<script>
import axios from "axios"

export default {
    methods: {
        getProjects() {
            axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
                console.log(response.data)
            })
        },
    },
    mounted() {
        this.getProjects()
    },
}
</script>

<template></template>

<style scoped></style>
