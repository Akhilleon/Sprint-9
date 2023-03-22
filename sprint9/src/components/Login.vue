<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-orange-500">Log in to your account</h2>
      </div>
      <form class="mt-8 space-y-6" action="#">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" v-model="email" required="" class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" v-model="password" required="" class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-600" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-orange-500 hover:text-orange-400">Forgot your password?</a>
          </div>
        </div>

        <h3 v-if="errMsg">{{ errMsg }}</h3>

        <div>
          <button @click.prevent="login" class="group relative flex w-full justify-center rounded-md bg-orange-500 py-2 px-3 text-sm font-semibold text-white hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
            Log in
          </button>
        </div>

        <div>
          <button @click.prevent="signInWithGoogle" class="group relative flex w-full justify-center rounded-md bg-orange-500 py-2 px-3 text-sm font-semibold text-white hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
            Sign In with Google
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

  
<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { useRouter } from "vue-router";


const email = ref('');
const password = ref('');
const router = useRouter();
const errMsg = ref()

const login = () => {
  const auth = getAuth()
  signInWithEmailAndPassword (auth, email.value, password.value)
    .then((data) => {
      console.log('Succesfully signed in!');
      console.log(auth.currentUser)
      router.push('/');
    })
    .catch((error) => {
      console.log(error.code)
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = 'Invalid email'
          break;
        case "auth/user-not-found":
          errMsg.value = 'User not found'
          break;
        case "auth/wrong-password":
          errMsg.value = 'Incorrect Password'
          break;
        default:
          errMsg.value = 'Email or password was incorrect'
          break;
      }
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