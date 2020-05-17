<template>
    <div>
        <div>Home page</div>
        <div>{{ count }}</div>
        <button class="px-6 py-1 bg-gray-200 rounded border"
                @click="increaseCount">Inc</button>
        <button class="px-6 py-1 bg-gray-200 rounded border"
                @click="decreaseCount">Dec</button>
    </div>
</template>

<script>
import DefaultLayout from "@front/layouts/default/DefaultLayout"
import useCounter from "@front/services/counter"

export default {
    name: "Home",

    layout: DefaultLayout,

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