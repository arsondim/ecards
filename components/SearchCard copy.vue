<template>

  <div>

    <div class="min-h-screen items-center flex px-4">

      <div class="container  p-2  mx-auto">
        <div> <img class="logo w-50 mb-4" src="~/assets/logo.svg" />
        </div>


        <form @submit.prevent="submitForm">
    <label for="inputField">Field:</label>
    <input type="text" id="inputField" v-model="inputValue" />
    <button type="submit">Submit</button>
  </form>


        <input v-model="inputValue" placeholder="Wpisz swoj @ email" id="email" name="email" type="email"
          class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        <button class="btn bg-reMain text-white p-2  w-full rounded-lg text-center mt-3"
          @click="convertToString">Wyszukaj</button>

        <div v-if="convertedString">
          <a class="btn text-white p-2 m-auto block w-auto rounded-lg text-center mt-3 bg-slate-950"
            :href="convertedString">
            Spawdź swoją wizytówke
          </a>
        </div>

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

    convertToString() {
      // Convert input value to string
      this.convertedString = hashWithMD5(this.inputValue).slice(0, 6);
      //  navigateTo(this.convertedString, { external: true })
    }
  }
};

</script>