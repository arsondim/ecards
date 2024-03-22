<template>

  <div>

    <div class="min-h-screen items-center flex px-4">

      <div class="container  p-2  mx-auto">
        <div> <img class="logo w-50 mb-4" src="~/assets/logo.svg" />
        </div>


        <form @submit.prevent="submitForm">
          <input type="email" id="inputField" v-model="inputValue" placeholder="Wpisz @ email" required
            class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-reMain sm:text-sm sm:leading-6" />
          <button class="btn bg-reMain text-white p-2  w-full rounded-lg text-center mt-3"
            type="submit">Wyszukaj</button>


          <NuxtLink :to="convertedString" external> Spawdź swoją wizytówke
            <UIcon name="i-heroicons-arrow-small-right-20-solid" />
          </NuxtLink>

          <div v-if="convertedString">
            <a class="btn text-white p-2 m-auto block w-auto rounded-lg text-center mt-3 bg-slate-950"
              :href="convertedString">
              Spawdź swoją wizytówke
            </a>
          </div>



        </form>



      </div>

    </div>

  </div>

</template>



<script>

import CryptoJS from 'crypto-js';

export function hashWithMD5(input) {
  return CryptoJS.MD5(input).toString();
}


export default {
  data() {
    return {
      inputValue: '',
      convertedString: ''
    };
  },
  methods: {

    submitForm() {
      // Handle form submission here
      console.log('Form submitted with value:', this.inputValue);
      this.convertedString = hashWithMD5(this.inputValue).slice(0, 6);
      console.log(this.convertedString);

    },

  }
};


</script>