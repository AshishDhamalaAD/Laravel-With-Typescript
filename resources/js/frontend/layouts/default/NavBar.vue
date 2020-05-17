<template>
    <nav>
        <inertia-link v-for="(navItem, index) in navItems"
                      :key="index"
                      :href="$route(navItem.route)"
                      class="px-4 py-2 rounded"
                      :class="{'bg-primary text-white': (`frontend.${navItem.route}` === $page.routeName)}">
            {{ navItem.label }}
        </inertia-link>
    </nav>
</template>

<script>
export default {
    name: "Navbar",

    props: {},

    setup() {
        const navItems = [
            {
                label: "Home",
                route: "home"
            },
            {
                label: "Blogs",
                route: "blogs.index"
            }
        ];

        return {
            navItems
        };
    }
};
</script>