<script>
import axios from "axios"
import ProjectCard from "./components/ProjectCard.vue"

export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: [],
        }
    },
    methods: {
        getProjects() {
            axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
                console.log(response.data)
                this.projects = response.data
            })
        },
    },
    mounted() {
        this.getProjects()
    },
}
</script>

<template>
    <ProjectCard />
</template>

<style scoped></style>
