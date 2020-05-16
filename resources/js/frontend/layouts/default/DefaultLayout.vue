<template>
    <div>
        <NavBar />
        <slot />
    </div>
</template>

<script>
import NavBar from "./NavBar";

export default {
    name: "DefaultLayout",

    components: {
        NavBar
    }
};
</script>
