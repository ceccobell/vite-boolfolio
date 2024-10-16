<template>
    <header class="shadow-sm">
        <div class="container h-100 d-flex justify-content-between align-items-center">
            <h1 class="h4 fw-bold text-dark">Il Mio Portfolio</h1>
            <nav class="py-2 d-flex">
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

<style scoped>
header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    z-index: 10;
    background-color: white;
}
</style>
