<template>
    <div>
        <div>Blogs</div>
    </div>
</template>

<script>
import DefaultLayout from "../layouts/default/DefaultLayout";
import useCounter from "../services/counter";

export default {
    name: "Blogs",

    layout: DefaultLayout,

    props: {
        blogs: Array
    }
};
</script>
