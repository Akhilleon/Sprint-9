<template>
  <div class="p-8 pb-0">
    <h1 class="mb-4 font-bold text-green-500 text-4xl">Search Meals By Name</h1>
    <input type="text" placeholder="Search for Meals"
          v-model="keyword"
          @change="searchMeals"
          class="w-full rounded border-2 border-gray-200 bg-white focus:ring-green-500 focus:border-green-500">
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from './Meals.vue';


  const route = useRoute();
  const keyword = ref('');
  const meals = computed(() => store.state.searchedMeals)

  function searchMeals() {
    if (keyword.value) {
      store.dispatch('searchMeals', keyword.value)
    } else {
      store.commit('setSearchedMeals', [])
    }
    
  }

  onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
      searchMeals();
    }
  })
</script>
