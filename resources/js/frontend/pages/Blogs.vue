<template>
    <div>
        <div>Blogs</div>
    </div>
</template>

<script>
import DefaultLayout from "@front/layouts/default/DefaultLayout"

export default {
    name: "Blogs",

    layout: DefaultLayout,

    props: {
        blogs: Array
    }
};
</script>
