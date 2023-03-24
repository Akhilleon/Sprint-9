<template>
  <div class="bg-gray-100 h-[100vh]">
    <nav class="bg-white shadow h-16 flex justify-between items-stretch">
      <div class="flex items-center gap-1">
        <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5 text-green-500 font-bold">Home</router-link>
        <router-link to="/login" v-if="!isLoggedIn" class="inline-flex items-center h-full px-5 text-green-500 font-semibold">Log In</router-link>
        <router-link to="/" @click="handleSignOut" v-if="isLoggedIn" class="inline-flex items-center h-full px-5 text-green-500 font-semibold">Log Out</router-link>
        <router-link to="/signup" class="inline-flex items-center h-full px-5 text-green-500 font-semibold">Sign Up</router-link>
      </div>

        <div @click="toggleNav" class="flex md:hidden mr-4">
          <button
            type="button"
            class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"
          class="bi bi-list text-black font-bold ">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          </button>
        </div>

      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="items-center gap-1
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >   
      <router-link :to="{name: 'byName'}" class="inline-flex px-2 h-full items-center transition-colors hover:text-white hover:bg-green-500">Search Meals</router-link>
      <router-link :to="{name: 'byLetter'}" class="inline-flex px-2 h-full items-center transition-colors hover:text-white hover:bg-green-500">Meals By Letter</router-link>
      <router-link :to="{name: 'ingredients'}" class="inline-flex px-2 h-full items-center transition-colors hover:text-white hover:bg-green-500">Meals By Ingredients</router-link>
      </ul>

    </nav>
    <main>
      <div class="max-w-[1200px] mx-auto">
        <router-view/>
      </div>
      
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import router from './router';

let showMenu = ref(false);
const isLoggedIn = ref(false)

const toggleNav = () => (showMenu.value = !showMenu.value);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
}); 

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/');
  });
}
</script>