<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 mt-6">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals" class="flex justify-center text-gray-600 p-8">
        There are no meals
    </div>
</template>

<script setup>
import { toRefs, defineProps } from 'vue';
import MealItem from "../components/MealItem.vue";

const props = defineProps({
    meals: Array
});

const { meals } = toRefs(props)
</script>