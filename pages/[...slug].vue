<template>


  <div class="min-h-screen mb-12 items-start flex">

    <div class="container  mx-auto">


      <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]" :space-between="50"
        :slides-per-view="1" :loop="false" :autoplay="{ delay: 8000, disableOnInteraction: true, }"
        :pagination="{ el: '.custom-pagination', enabled: true, clickable: true }">

        <SwiperSlide>
          <CardFront :data="data" />
        </SwiperSlide>

        <SwiperSlide>
          <CardBack :data="data" />
        </SwiperSlide>

      </Swiper>

      <div class="text-center custom-pagination"></div>


      <div class="mx-3">

        <a @click="generateVCard" :data-name="data[0].acf.imie" :data-surname="data[0].acf.nazwisko" :data-email="data[0].acf.email"
          :data-title="data[0].acf.stanowisko" :data-phone="data[0].acf.telefon" :data-company="data[0].acf.spolka" v-if="!vCardData"
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


          <CopyLink/>

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

      const dataName = event.target.dataset.name;
      const dataSurname = event.target.dataset.surname;
      const dataEmail = event.target.dataset.email;
      const dataPhone = event.target.dataset.phone;
      const dataTitle = event.target.dataset.title;
      const dataCompany = event.target.dataset.company;
   
      const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN:${dataName} ${dataSurname} 
N:${dataSurname};${dataName};;
EMAIL;type=WORK,INTERNET:${dataEmail}
TEL;TYPE=WORK,VOICE:${dataPhone}
TITLE:${dataTitle}
ORG:${dataCompany}
REV:2024-02-27T11:50:37.929Z
END:VCARD`;
      const blob = new Blob([vCardContent], { type: 'text/vcard' });
      this.vCardData = window.URL.createObjectURL(blob);
    },
  },


}
</script>


<style>

.swiper-pagination-bullet-active {
  @apply bg-reMain
}
</style>