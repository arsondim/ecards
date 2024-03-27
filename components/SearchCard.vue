<template>
  <div class="max-w-[520px] mx-auto">
      <div class=" pt-3 flex px-4">
          <div class="container  p-2  mx-auto">
              <div> <img class="logo w-50 mb-4" src="~/assets/logo.svg" />
              </div>


              <form @submit.prevent="submitForm">
                  <input type="email" id="inputField" v-model="inputValue" placeholder="Wpisz @ email" required
                      class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-reMain sm:text-sm sm:leading-6" />
                  <button class="btn bg-reMain text-white p-2  w-full rounded-lg text-center mt-3"
                      type="submit">Wyszukaj</button>


              </form>


              <div v-if="responseData">

                  <div class="bg-white border-color-reMain mt-2 px-6 shadow-md rounded-md py-4"
                      v-for="post in responseData">
                      <NuxtLink :to="post.acf.hash">
                          <h3 class="text-lg  font-bold">{{ post.title.rendered }}</h3>
                      </NuxtLink>
                      <h5 class="text-reMain text-sm">{{ post.acf.stanowisko }}</h5>

                  </div>


              
              </div>


              <div v-if="empty">

                  <p class="text-center py-3 text-yellow-500"> Nie zaleziono 😔 </p>

              </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          inputValue: '',
          responseData: null
      };
  },
  methods: {
      async submitForm() {
          try {
              const { data: data, pending, error, refresh } = await useFetch('https://card.renergy.webd.pro/api/wp-json/wp/v2/posts/?acf_format=standard', {
                  query: {
                      email: this.inputValue,
                  }
              })
              this.responseData = data; // Update responseData with fetched data
              this.empty = false;
              if (this.responseData.length === 0) {
                  this.empty = true;
              }
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      }
  }
};
</script>