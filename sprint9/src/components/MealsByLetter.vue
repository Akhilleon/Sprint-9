<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
  </div>
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link :to="{name: 'byLetter', params: {letter}}" v-for="(letter, index) in letters" :key="index"
    class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">
          {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals" />
</template>
  
<script setup>
import store from '@/store';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Meals from './Meals.vue';

const route = useRoute();

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(() => store.state.sortedByLetter);

watch(route, () => {
  store.dispatch('searchByLetter', route.params.letter);
});

onMounted(() => {
  store.dispatch('searchByLetter', route.params.letter);
});
</script>