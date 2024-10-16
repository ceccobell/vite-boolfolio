<script>
import axios from "axios"
import { store } from "../store"

export default {
    data() {
        return {
            store,
            project: [],
        }
    },
    methods: {
        getProjectInfo() {
            axios
                .get(`http://127.0.0.1:8000/api/project/slug/${store.projectSlug}`)
                .then((response) => {
                    console.log(response.data)
                    this.project = response.data
                })
        },
    },
    mounted() {
        this.getProjectInfo()
    },
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img :src="project.project_image" :alt="project.name" />
                </div>
                <div class="col-8">
                    <h3 class="card-title">{{ project.name }}</h3>
                    <h5 class="slug">Slug: {{ project.slug }}</h5>
                    <p>Descrizione: {{ project.summary }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    padding-top: 80px;
}
img {
    width: 100%;
    height: auto;
}
</style>
