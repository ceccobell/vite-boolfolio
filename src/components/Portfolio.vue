<script>
import ProjectCard from "./ProjectCard.vue"
import axios from "axios"

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
            axios.get("http://127.0.0.1:8000/api/portfolio").then((response) => {
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
    <main class="bg-light">
        <div class="container bg-light">
            <div class="row">
                <h1>I miei progetti</h1>
                <div
                    class="col-4 d-flex align-items-stretch my-3"
                    v-for="(project, index) in projects"
                    :key="index">
                    <ProjectCard :project="project" />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    padding-top: 80px;
}
</style>
