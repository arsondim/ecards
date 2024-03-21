<template>


  <div class="card bg-white mx-3 mt-3 mb-4 border-b-4 border-reMain p-8 shadow-md rounded-lg">

    <div class="header flex justify-between ">
      <img v-if="data[0].acf.zdjecie.length" class="inline-block w-14 h-14  rounded-full ring-2 ring-white" :src="`${data[0].acf.zdjecie}`" alt="" />
      <img class="logo w-28 ms-auto text-end" src="~/assets/logo.svg" />

    </div>

    <h3 class="text-lg pt-2 font-bold">{{ data[0].title.rendered }}</h3>
    <h4 class="text-reMain text-sm">{{ data[0].acf.stanowisko }}</h4>
    <div class="data text-sm pt-3">
      <div v-if="data[0].acf.email.length" class="mail flex items-center">
        <MailIcon class=" opacity-50 " size="1x"></MailIcon> <a :href="'mailto:' + data[0].acf.email" class="ps-2"> {{
        data[0].acf.email }} </a>
      </div>
      <div v-if="data[0].acf.telefon.length" class="phone flex items-center">
        <PhoneIcon class=" opacity-50 " size="1x"></PhoneIcon>
        <a :href="'tel:' + data[0].acf.telefon" class="ps-2">{{ data[0].acf.telefon }} </a>
      </div>
      <div v-if="data[0].acf.email.length" class="website flex items-center">
        <GlobeIcon class=" opacity-50 " size="1x"></GlobeIcon> <a target="_blank" href="http://respect.energy"><span class="ps-2">
            respect.energy </span> </a>
      </div>

    </div>

  </div>

</template>


<script setup>
const { data } = defineProps(['data'])
</script>
