<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
      <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
      <img :src="meal.strMealThumb" 
      :alt="meal.strMeal" 
      class="rounded-t-xl w-full h-auto object-cover">
      </router-link>
        <div class="p-3">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>
          <p class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium beatae exercitationem accusamus? 
            Aliquid vel reprehenderit ipsam asperiores fugiat quam. Rerum hic ut molestias doloremque sunt a assumenda consectetur voluptatum.
          </p>        
        <div class="flex items-center justify-between">
          <YouTubeButton :href="meal.strYoutube" />
        </div>
      </div>
    </div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue';
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    meal: Object
});

const { meal } = toRefs(props)
</script>