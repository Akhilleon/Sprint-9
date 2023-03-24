<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-green-500">Create an account</h2>
      </div>
      <form class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" v-model="email" required="" class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" v-model="password" required="" class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6" placeholder="Password" />
          </div>
        </div>

        <div>
          <button @click.prevent="register" class="group relative flex w-full justify-center rounded-md bg-green-500 py-2 px-3 text-sm font-semibold text-white hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">
            Sign Up
          </button>
        </div>

        <div>
          <button @click.prevent="signInWithGoogle" class="group relative flex w-full justify-center rounded-md bg-green-500 py-2 px-3 text-sm font-semibold text-white hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">
            Sign In with Google
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

  
<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { useRouter } from "vue-router";


const email = ref('');
const password = ref('');
const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword (getAuth(), email.value, password.value)
    .then((data) => {
      console.log(data);
      console.log('Succesfully registered!');
      router.push('/');
    })
    .catch((error) => {
      console.log(error.code)
      alert(error.message)
    })
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
  .then((result) => {
    console.log(result.user);
    router.push('/');
  })
  .catch((error) => {
    console.log(error.code)
  })
};

</script>