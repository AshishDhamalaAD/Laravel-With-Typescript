<template>
    <div>
        <div>Blogs</div>
        <div>{{ count }}</div>
        <button @click="increaseCount">Inc</button>
        <button @click="decreaseCount">Dec</button>
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
    },

    setup(props) {
        const { count, increaseCount, decreaseCount } = useCounter();

        return {
            count,
            increaseCount,
            decreaseCount
        };
    }
};
</script>
