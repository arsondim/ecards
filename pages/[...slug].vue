<template>


<Head>
      <Title>{{ data[0].title.rendered }}</Title>
      <Meta name="description" :content="data[0].acf.stanowisko" />
</Head>

  <div :class="{ 'reFuel': data[0].acf.spolka_code === 'REF',  'rePower': data[0].acf.spolka_code === 'REP', 'reSolarwind': data[0].acf.spolka_code === 'RESW', 'reStorage': data[0].acf.spolka_code === 'RES',}" class="max-w-[520px] mx-auto min-h-screen mb-16 lg:mb-0 md:items-start lg:items-center flex">

    <div class="container  mx-auto">
 
      <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]" :space-between="50"
        :slides-per-view="1" :loop="false" :autoplay="false" :pagination="{ el: '.custom-pagination', enabled: true, clickable: true }">

        <SwiperSlide>
          <CardFront :data="data" />
        </SwiperSlide>

        <SwiperSlide>
          <CardBack :data="data" />
        </SwiperSlide>

      </Swiper>

      <div :class="{ 'reFuel': data[0].acf.spolka_code === 'REF'},{ 'rePower': data[0].acf.spolka_code === 'REP'}"  class="text-center custom-pagination"></div>

      <div class="mx-3">

        <a @click="generateVCard" :data-name="data[0].acf.imie" :data-surname="data[0].acf.nazwisko" :data-email="data[0].acf.email"
          :data-title="data[0].acf.stanowisko" :data-phone="data[0].acf.telefon" :data-company="data[0].acf.spolka" v-if="!vCardData"
          class="btn bg-reMain opacity-60 text-white p-2 m-auto block w-auto rounded-lg text-center mt-3">Wygeneruj vCard</a>
        <a v-if="vCardData" :href="vCardData" download="contact.vcf" class="btn bg-reMain text-white p-2 m-auto block w-auto rounded-lg text-center mt-3">  Pobierz vCard </a>
      </div>

      <div class="qr max-w-[350px] m-auto py-6 px-2 text-center">

            <div class="text-center pt-2 px-1">
          <img class="m-auto border rounded-md shadow-lg" :src="`https://chart.googleapis.com/chart?chs=350x350&cht=qr&chl=${currentUrl}`" alt="">
          <p class="hidden text-xs text-gray-600 dark:text-gray-50 opacity-50 pt-3"> {{ currentUrl }}</p>


          <CopyLink/>

        </div>

      </div>

    </div>

    <BottomNav :data="data" />

  </div>


</template>


<script>


</script>

<script setup>
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

const { data: data, pending, error, refresh } = await useFetch('https://card.renergy.webd.pro/api/wp-json/wp/v2/posts/?acf_format=standard', {
  query: {
    hash: slug.value,
  },
  headers: {
        "Authorization": "Basic YWRtaW46NUNvT0hTRkBLNHBNMkxrNG5s"
      },
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


.reFuel{
  .text-reMain{
    @apply text-reFuel
  }
  .bg-reMain{
    @apply bg-reFuel
  } 
  .border-reMain{
    @apply border-reFuel
  } 
  .swiper-pagination-bullet-active{
    @apply bg-reFuel
  }
}


.rePower, .reSolarwind, .reStorage{
  .text-reMain{
    @apply text-rePower
  }
  .bg-reMain{
    @apply bg-rePower
  } 
  .border-reMain{
    @apply border-rePower
  } 
  .swiper-pagination-bullet-active{
    @apply bg-rePower
  }
}


.swiper-pagination-bullet-active {
  @apply bg-reMain
}


</style>