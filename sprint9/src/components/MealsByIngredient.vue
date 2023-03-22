<template>
<div class="p-8 pb-0">
    <Meals :meals="meals" /> 
</div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import store from "../store";
import Meals from './Meals.vue';

const route = useRoute()
const meals = computed(() => store.state.sortedByIngredient)
onMounted(() => {
  store.dispatch('searchByIngredient', route.params.ingredient);
});
</script>