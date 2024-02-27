<template >
  <div class="min-h-screen items-center flex">

    <div class="container  p-2  mx-auto">

      <div class="card bg-white border-b-4 border-reMain p-8 shadow-lg rounded-lg">

        <div class="header flex justify-between ">
          <img class="inline-block w-12 h-12  rounded-full ring-2 ring-white" :src="`${data[0].acf.zdjecie}`" alt="" />

          <img src="~/assets/logo.svg" />

        </div>



        


       <h2 class="text-2xl pt-2 font-bold">{{ data[0].title.rendered }}</h2>
       <h4 class="text-reMain ">{{ data[0].acf.stanowisko }}</h4> 
       <div class="data text-sm pt-3">
        <div class="mail flex items-center">    <MailIcon class=" opacity-50 " size="1x"></MailIcon>  <span class="ps-2"> {{ data[0].acf.email }} </span></div>
        <div class="phone flex items-center">    <PhoneIcon  class=" opacity-50 " size="1x"></PhoneIcon><span class="ps-2">{{ data[0].acf.telefon }} </span> </div>
        <div class="website flex items-center"> <GlobeIcon  class=" opacity-50 " size="1x"></GlobeIcon>  <a href="http://respect.energy"><span class="ps-2"> respect.energy </span> </a>  </div>

       </div>

      </div>


      <div>

   
        <a @click="generateVCard"  :data-value="data[0].title.rendered"  :data-email="data[0].acf.email" :data-phone="data[0].acf.telefon" v-if="!vCardData" class="btn bg-reMain opacity-60 text-white p-2 m-auto block w-auto rounded-lg text-center mt-3" >Wygeneruj vCard</a>

        <a v-if="vCardData" :href="vCardData" download="contact.vcf"  class="btn bg-reMain text-white p-2 m-auto block w-auto rounded-lg text-center mt-3" >Pobierz vCard</a>


      </div>

      <div class="qr p-6 text-center">
        
        <h4>

          Zeskanuj kod QR

        </h4>

        <div class="text-center pt-4">
    
          <img class="m-auto border border-reMain" :src="`https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${ currentUrl }`" alt="">
      <p class="text-xs opacity-50 pt-3">  {{  currentUrl }}</p>
 
        </div> 

      </div>

      

    </div>


  </div>
</template>
  
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


const { data, pending, error, refresh } = await useFetch('https://ecards.renergy.webd.pro/wp-json/wp/v2/posts/?acf_format=standard',{
  query: {slug: slug.value}
})

</script>

<style>

body,html{
  @apply bg-gray-100;
 height:100vh;
}

</style>

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

        const vCardContent = `BEGIN:VCARD
  VERSION:3.0
  N:${dataValue}
  FN:${dataValue}
  EMAIL:${dataEmail}
  TEL: ${dataPhone}
  END:VCARD`;
        const blob = new Blob([vCardContent], { type: 'text/vcard' });
        this.vCardData = window.URL.createObjectURL(blob);
      },
    },


}


</script>