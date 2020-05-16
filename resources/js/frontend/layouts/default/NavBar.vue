<template>
    <nav>
        <inertia-link :href="$route('home')">Home</inertia-link>
        <inertia-link :href="$route('blogs.index')">Blogs</inertia-link>
    </nav>
</template>

<script>
export default {
    name: "Navbar",

    props: {},

    data: () => ({}),

    computed: {},

    methods: {},

    watch: {},

    mounted() {}
};
</script>