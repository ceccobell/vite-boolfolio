<template>
    <header class="bg-light shadow-sm">
        <div class="container px-4 py-3 d-flex justify-content-between align-items-center">
            <h1 class="h4 fw-bold text-dark">Il Mio Portfolio</h1>
            <nav class="bg-light py-2 d-flex">
                <router-link to="/" class="text-decoration-none d-block px-4 py-2 text-dark"
                    >Home
                </router-link>
                <router-link
                    to="/portfolio"
                    class="text-decoration-none d-block px-4 py-2 text-dark"
                    >Portfolio
                </router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {},
}
</script>

<style scoped></style>
