<template>


  <div class="min-h-screen items-center flex">

    <div class="container  mx-auto">


      <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]" :space-between="50"
        :slides-per-view="1" :loop="false" :autoplay="{ delay: 8000, disableOnInteraction: true, }"
        :pagination="{ el: '.custom-pagination', enabled: true, clickable: true }">
        <SwiperSlide>
          <CardFront :data="data" />
        </SwiperSlide>

        <SwiperSlide>

          <div class="card bg-white  border-b-4 border-reMain p-8 shadow-lg rounded-lg">
            ok
          </div>
        </SwiperSlide>

      </Swiper>


      <div class="text-center custom-pagination"></div>



      <div class="mx-3">


        <a @click="generateVCard" :data-value="data[0].title.rendered" :data-email="data[0].acf.email"
          :data-title="data[0].acf.stanowisko" :data-phone="data[0].acf.telefon" v-if="!vCardData"
          class="btn bg-reMain opacity-60 text-white p-2 m-auto block w-auto rounded-lg text-center mt-3">Wygeneruj
          vCard</a>

        <a v-if="vCardData" :href="vCardData" download="contact.vcf" class="btn bg-reMain text-white p-2 m-auto block w-auto rounded-lg text-center mt-3">  Pobierz vCard </a>


      </div>

      <div class="qr p-6 text-center">

        <h4 class="text-gray-600 dark:text-gray-50">

        </h4>

        <div class="text-center pt-2 px-6">
          <img class="m-auto border rounded-md border-reMain"
            :src="`https://chart.googleapis.com/chart?chs=350x350&cht=qr&chl=${currentUrl}`" alt="">

          <p class="hidden text-xs text-gray-600 dark:text-gray-50 opacity-50 pt-3"> {{ currentUrl }}</p>


          <CopyLink :data="currentUrl" />



        </div>

      </div>



    </div>


  </div>

  <BottomNav :data="data" />

</template>


<script>


</script>

<script setup>
import CryptoJS from 'crypto-js';
const route = useRoute()
const slug = ref('')

if (route.params.slug) {
  let lastIndex = route.params.slug.length - 1
  if (!route.params.slug[lastIndex]) {
    slug.value = route.params.slug[lastIndex - 1]
  } else {
    slug.value = route.params.slug[lastIndex]
  }

} else {
  slug.value = 'home'
}

const { data: data, pending, error, refresh } = await useFetch('https://ecards.renergy.webd.pro/wp-json/wp/v2/posts/?acf_format=standard', {
  query: {
    hash: slug.value,
  }
})
</script>

<script>

export default {
  data() {
    return {
      currentUrl: '',
      name: '',
      email: '',
      vCardData: null
    };
  },
  mounted() {
    if (process.client) {
      this.currentUrl = window.location.href;
    }
  },

  methods: {
    generateVCard(event) {

      const dataValue = event.target.dataset.value;
      const dataEmail = event.target.dataset.email;
      const dataPhone = event.target.dataset.phone;
      const dataTitle = event.target.dataset.title;

      const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN:${dataValue}
N:${dataValue};;;
EMAIL;type=WORK,INTERNET:${dataEmail}
TEL;TYPE=WORK,VOICE:${dataPhone}
LABEL;TYPE=WORK:Work Address
ADR;TYPE=WORK:;;Rydygiera 8;Warszawa; 
TITLE:${dataTitle}
ORG:Respect Energy
REV:2024-02-27T11:50:37.929Z
END:VCARD`;
      const blob = new Blob([vCardContent], { type: 'text/vcard' });
      this.vCardData = window.URL.createObjectURL(blob);
    },
  },


}
</script>


<style>
body {
  @apply bg-gray-100
}

.swiper-pagination-bullet-active {
  @apply bg-reMain
}
</style>