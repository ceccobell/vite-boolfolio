<script>
export default {
    props: {
        project: Object,
    },
}
</script>

<template>
    <div class="card">
        <img :src="project.project_image" class="card-img-top" :alt="project.name" />
        <div class="card-body d-flex flex-column align-items-start justify-content-between">
            <div>
                <h3 class="card-title">{{ project.name }}</h3>
                <h5 class="slug">Slug: {{ project.slug }}</h5>
            </div>
            <button class="border-0">
                <router-link to="/project" class="btn btn-primary">Vedi Progetto</router-link>
            </button>
        </div>
    </div>
</template>

<style scoped>
.card-title {
    font-size: 18px;
}

.slug {
    font-size: 14px;
    color: rgb(94, 94, 94);
}
</style>
