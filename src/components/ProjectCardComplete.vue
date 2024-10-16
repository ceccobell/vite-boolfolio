<script>
export default {}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <img :src="project.project_image" :alt="project.name" />
            </div>
            <div class="col-6">
                <h3 class="card-title">{{ project.name }}</h3>
                <h5 class="slug">Slug: {{ project.slug }}</h5>
                <p>Descrizione: {{ project.summary }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
