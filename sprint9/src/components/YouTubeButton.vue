<template>
    <a :href="href" 
        target="_blank"
          class="px-3 py-2 rounded border-2 border-red-600 bg-red-600 hover:bg-red-400 text-white transition-colors">
          <slot>Youtube</slot>
    </a>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

 const props = defineProps({ 
    href: String
 })

 const { href } = toRefs(props)
</script>