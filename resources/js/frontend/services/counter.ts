import { ref } from "@vue/composition-api";

export default function() {
    const count = ref(0);

    function increaseCount(): void {
        count.value++;
    }

    function decreaseCount(): void {
        count.value--;
    }

    return {
        count,
        increaseCount,
        decreaseCount
    };
}
