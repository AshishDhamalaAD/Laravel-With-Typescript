<template>
    <div>
        <div>Blogs</div>
        <div>{{ count }}</div>
        <button class="px-6 py-1 bg-gray-200 rounded border"
                @click="increaseCount">Inc</button>
        <button class="px-6 py-1 bg-gray-200 rounded border"
                @click="decreaseCount">Dec</button>
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
