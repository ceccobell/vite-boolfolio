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
        <div class="card-body">
            <h3 class="card-title">{{ project.name }}</h3>
            <h5>Slug: {{ project.slug }}</h5>
            <p class="card-text">{{ project.summary }}</p>
        </div>
    </div>
</template>

<style scoped></style>
