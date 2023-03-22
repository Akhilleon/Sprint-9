<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
    </div>
    <div class="px-8">
        <input type="text" placeholder="Search for Ingredients"
          v-model="keyword"
          class="w-full rounded border-2 border-gray-200 bg-white mb-3">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <router-link :to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient}}" 
            v-for="ingredient of computedIngredients" :key="ingredient.idIngredient" 
            class="block bg-white rounded p-3 mb-3 shadow">
                <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
                <!-- <p>{{ ingredient.strDescription }}</p> -->
            </router-link>
        </div>
    </div>
</template>

<script setup>
import axiosClient from '@/axiosClient';
import { onMounted, ref, computed } from 'vue';

    const ingredients = ref([]);
    const keyword = ref('');
    const computedIngredients = computed(() => {
        if (!computedIngredients.value) return ingredients.value
        return ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()));
    });

    onMounted(() => {
        axiosClient.get('list.php?i=list')
        .then(({ data }) => {
            ingredients.value = data.meals
        })
    })
</script>